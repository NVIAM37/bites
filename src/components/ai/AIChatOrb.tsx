import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const AIChatOrb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Chef AI 👨‍🍳 How can I help you today? I can recommend dishes, explain ingredients, or help with dietary preferences!" }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setMessage('');
    
    // Simulated AI response
    setTimeout(() => {
      const responses = [
        "Based on your preferences, I'd recommend our Truffle Deluxe Burger - it's our chef's masterpiece! 🍔",
        "For a lighter option, try our Quinoa Power Salad - it's packed with nutrients and absolutely delicious! 🥗",
        "Our Dragon Roll is incredibly popular today! The combination of eel and avocado is divine! 🍣",
        "If you're feeling adventurous, the Spicy Inferno Burger with ghost pepper is a thrilling experience! 🌶️"
      ];
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Orb */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-golden shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px hsl(var(--primary) / 0.3)',
            '0 0 40px hsl(var(--primary) / 0.5)',
            '0 0 20px hsl(var(--primary) / 0.3)',
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
        }}
      >
        <Sparkles className="w-7 h-7 text-primary-foreground" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-foreground/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)]"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-golden p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary-foreground">Chef AI</h3>
                    <p className="text-xs text-primary-foreground/80">Your culinary assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                >
                  <X className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-muted text-foreground rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-2 bg-muted rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    className="p-2 bg-primary rounded-xl text-primary-foreground"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
