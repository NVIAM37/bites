import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { Check, Package, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

const OrderConfirmation = () => {
  const orderNumber = 'FV-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  useEffect(() => {
    // Trigger confetti on mount
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const orderDetails = {
    items: [
      { name: 'Classic Smash', quantity: 2, price: 29.98 },
      { name: 'Dragon Roll', quantity: 1, price: 18.99 },
      { name: 'Mango Sunset', quantity: 2, price: 15.98 },
    ],
    address: '123 Main Street, Apt 4B, New York, NY 10001',
    estimatedTime: '30-45 minutes',
    total: 53.97,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Check className="w-12 h-12 text-accent-foreground" />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl md:text-4xl font-bold mb-2"
            >
              Order Confirmed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              Thank you for your order
            </motion.p>
          </motion.div>

          {/* Order Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 rounded-2xl text-center mb-6"
          >
            <p className="text-sm text-muted-foreground mb-1">Order Number</p>
            <p className="font-display text-2xl font-bold text-gradient-primary">{orderNumber}</p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6 rounded-2xl mb-6"
          >
            <h2 className="font-display text-xl font-bold mb-4">Order Details</h2>

            <div className="space-y-3 mb-6">
              {orderDetails.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-muted-foreground">
                    {item.quantity}x {item.name}
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-bold">
                  <span>Total Paid</span>
                  <span className="text-gradient-primary">${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Delivery Address</p>
                  <p className="text-sm text-muted-foreground">{orderDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted rounded-xl">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Estimated Delivery</p>
                  <p className="text-sm text-muted-foreground">{orderDetails.estimatedTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted rounded-xl">
                <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Order Status</p>
                  <p className="text-sm text-accent">Preparing your order</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/tracking" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gradient-primary flex items-center justify-center gap-2"
              >
                Track Your Order
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/menu" className="flex-1">
              <button className="w-full btn-glass-outline">
                Continue Shopping
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default OrderConfirmation;
