
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { systemPrompt } from '../data/restaurantData';

// Get API keys from environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export const AIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'system',
            content: systemPrompt
        },
        {
            role: 'assistant',
            content: 'Welcome to Bites Restaurant. How may I assist you today? I am here to help with menu recommendations, reservations, catering services, or any questions about our dining experience.'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [hasError, setHasError] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = { role: 'user', content: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setHasError(false);

        try {
            // Primary: Gemini API, Fallback: Groq API
            if (GEMINI_API_KEY) {
                await sendMessageToGemini([...messages, userMessage]);
            } else {
                await sendMessageToGroq([...messages, userMessage]);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            console.error('Error fetching chat response:', errorMessage);
            
            toast.error("Unable to connect to concierge. Please try again later.");
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment."
            }]);
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessageToGemini = async (messageList: Message[]) => {
        // Filter out system messages for the API call, but keep them for context
        const conversationMessages = messageList.filter(msg => msg.role !== 'system');
        
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: conversationMessages.map(msg => ({
                        role: msg.role === 'assistant' ? 'model' : msg.role,
                        parts: [{ text: msg.content }]
                    })),
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1024,
                    }
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
            console.error('Gemini API Error:', errorData);
            throw new Error(`API Error: ${response.status} - ${errorData?.error?.message || 'Failed to get response'}`);
        }

        const data = await response.json();
        
        if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
            throw new Error('Invalid response format from Gemini API');
        }
        
        const assistantMessage: Message = {
            role: 'assistant',
            content: data.candidates[0].content.parts[0].text
        };

        setMessages(prev => [...prev, assistantMessage]);
    };

    const sendMessageToGroq = async (messageList: Message[]) => {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: messageList.map(({ role, content }) => ({ role, content })),
                temperature: 0.7,
                max_tokens: 1024,
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
            console.error('Groq API Error:', errorData);
            throw new Error(`API Error: ${response.status} - ${errorData?.error?.message || 'Failed to get response'}`);
        }

        const data = await response.json();
        
        if (!data.choices?.[0]?.message?.content) {
            throw new Error('Invalid response format from Groq API');
        }
        
        const assistantMessage: Message = {
            role: 'assistant',
            content: data.choices[0].message.content
        };

        setMessages(prev => [...prev, assistantMessage]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className={`bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl overflow-hidden mb-4 pointer-events-auto flex flex-col transition-all duration-300 ${isMinimized ? 'w-72 h-14' : 'w-80 sm:w-96 h-[500px]'}`}
                        >
                            {/* Header */}
                            <div className="bg-primary/10 p-4 flex items-center justify-between border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-sm">Bites Concierge</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-muted-foreground">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setIsMinimized(!isMinimized)}
                                        className="p-1.5 hover:bg-primary/10 rounded-md transition-colors text-muted-foreground hover:text-foreground"
                                    >
                                        {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1.5 hover:bg-destructive/10 rounded-md transition-colors text-muted-foreground hover:text-destructive"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {!isMinimized && (
                                <>
                                    {/* Messages */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background/50 to-background">
                                        <>
                                            {messages.filter(m => m.role !== 'system').map((msg, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                                        {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                                    </div>
                                                    <div
                                                        className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === 'user'
                                                            ? 'bg-primary text-primary-foreground rounded-tr-none'
                                                            : 'bg-muted/80 text-foreground rounded-tl-none'
                                                            }`}
                                                    >
                                                        {msg.content}
                                                    </div>
                                                </div>
                                            ))}
                                            {isLoading && (
                                                <div className="flex gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                                                        <Bot className="w-5 h-5" />
                                                    </div>
                                                    <div className="bg-muted/50 rounded-2xl rounded-tl-none p-4 flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                        <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                        <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                                                    </div>
                                                    </div>
                                                )}
                                                <div ref={chatEndRef} />
                                        </>
                                    </div>

                                    {/* Input */}
                                    <div className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Ask about our menu..."
                                                className="flex-1 bg-muted/50 border border-border/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/70"
                                                disabled={isLoading}
                                            />
                                            <button
                                                onClick={handleSendMessage}
                                                disabled={!inputValue.trim() || isLoading}
                                                className="p-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <Send className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center pointer-events-auto hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                </motion.button>
            </div>
        </>
    );
};
