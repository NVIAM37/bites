import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { CreditCard, Wallet, Smartphone, ChevronLeft, Lock, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'address' | 'payment'>('address');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | 'apple'>('card');
  
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    apartment: '',
    city: '',
    zipCode: '',
    instructions: '',
  });

  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const handleAddressSubmit = () => {
    if (!address.fullName || !address.phone || !address.street || !address.city || !address.zipCode) {
      toast.error('Please fill in all required fields');
      return;
    }
    setStep('payment');
  };

  const handlePayment = () => {
    if (paymentMethod === 'card' && (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)) {
      toast.error('Please fill in all card details');
      return;
    }
    toast.success('Order placed successfully!');
    navigate('/order-confirmation');
  };

  const orderSummary = {
    subtotal: 49.97,
    delivery: 0,
    tax: 4.00,
    total: 53.97,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Checkout</span>
            </h1>
          </motion.div>

          {/* Steps */}
          <div className="flex justify-center gap-8 mb-8">
            {['address', 'payment'].map((s, i) => (
              <div
                key={s}
                className={`flex items-center gap-2 ${
                  (s === 'address' && step === 'address') || (s === 'payment' && step === 'payment')
                    ? 'text-primary'
                    : step === 'payment' && s === 'address'
                      ? 'text-primary'
                      : 'text-muted-foreground'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  step === s || (step === 'payment' && s === 'address')
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}>
                  {step === 'payment' && s === 'address' ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className="font-medium capitalize">{s}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Address Step */}
              {step === 'address' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h2 className="font-display text-xl font-bold mb-6">Delivery Address</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={address.fullName}
                        onChange={(e) => setAddress(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={address.phone}
                        onChange={(e) => setAddress(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Street Address *</label>
                      <input
                        type="text"
                        value={address.street}
                        onChange={(e) => setAddress(prev => ({ ...prev, street: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Apartment / Suite</label>
                      <input
                        type="text"
                        value={address.apartment}
                        onChange={(e) => setAddress(prev => ({ ...prev, apartment: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="Apt 4B"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        value={address.zipCode}
                        onChange={(e) => setAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="10001"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Delivery Instructions</label>
                      <textarea
                        value={address.instructions}
                        onChange={(e) => setAddress(prev => ({ ...prev, instructions: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        rows={3}
                        placeholder="Ring the doorbell, leave at door, etc."
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddressSubmit}
                    className="w-full mt-6 btn-gradient-primary"
                  >
                    Continue to Payment
                  </motion.button>
                </motion.div>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <button
                    onClick={() => setStep('address')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to address
                  </button>

                  <h2 className="font-display text-xl font-bold mb-6">Payment Method</h2>

                  {/* Payment Options */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { id: 'card', icon: CreditCard, label: 'Card' },
                      { id: 'wallet', icon: Wallet, label: 'Wallet' },
                      { id: 'apple', icon: Smartphone, label: 'Apple Pay' },
                    ].map(({ id, icon: Icon, label }) => (
                      <button
                        key={id}
                        onClick={() => setPaymentMethod(id as typeof paymentMethod)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">{label}</p>
                      </button>
                    ))}
                  </div>

                  {/* Card Details */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <input
                          type="text"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails(prev => ({ ...prev, number: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Name on Card</label>
                        <input
                          type="text"
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="JOHN DOE"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry</label>
                          <input
                            type="text"
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <input
                            type="password"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="•••"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod !== 'card' && (
                    <div className="p-8 text-center bg-muted rounded-xl">
                      <p className="text-muted-foreground">
                        {paymentMethod === 'wallet' 
                          ? 'You will be redirected to your digital wallet'
                          : 'You will be prompted by Apple Pay'}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6 mb-4">
                    <Lock className="w-4 h-4" />
                    <span>Your payment is secured with 256-bit encryption</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    className="w-full btn-gradient-primary"
                  >
                    Pay ${orderSummary.total.toFixed(2)}
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="glass-card p-6 rounded-2xl h-fit">
              <h3 className="font-display text-lg font-bold mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">2x Classic Smash</span>
                  <span>$29.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1x Dragon Roll</span>
                  <span>$18.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">2x Mango Sunset</span>
                  <span>$15.98</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-accent">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${orderSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-gradient-primary">${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Checkout;
