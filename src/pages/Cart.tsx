import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { Scene3D } from '@/components/3d/Scene3D';
import { FoodModel } from '@/components/3d/FoodModel';
import { menuItems } from '@/data/menuData';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  quantity: number;
  customizations: string[];
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 'b1', quantity: 2, customizations: ['Extra Cheese'] },
    { id: 's1', quantity: 1, customizations: [] },
    { id: 'dr1', quantity: 2, customizations: [] },
  ]);

  const getProduct = (id: string) => menuItems.find(item => item.id === id);

  const getModelShape = (category: string) => {
    if (category === 'burgers') return 'burger';
    if (category === 'pizza') return 'pizza';
    if (category === 'sushi') return 'sushi';
    if (category === 'salads') return 'salad';
    if (category === 'desserts') return 'dessert';
    return 'drink';
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProduct(item.id);
      if (!product) return total;
      let itemPrice = product.price * item.quantity;
      if (item.customizations.includes('Extra Cheese')) itemPrice += 1.5 * item.quantity;
      if (item.customizations.includes('Add Bacon')) itemPrice += 2.0 * item.quantity;
      return total + itemPrice;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 30 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-20 px-4">
          <div className="max-w-lg mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center"
            >
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </motion.div>
            <h2 className="font-display text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything yet. Let's fix that!
            </p>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient-primary"
              >
                Browse Menu
              </motion.button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartItems.length} />
      <main className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-gradient-primary">Cart</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {cartItems.length} items • Review and checkout
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => {
                  const product = getProduct(item.id);
                  if (!product) return null;

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="glass-card p-4 rounded-2xl flex gap-4"
                    >
                      {/* 3D Preview */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
                        <Scene3D cameraPosition={[0, 1, 3]} className="w-full h-full">
                          <FoodModel
                            shape={getModelShape(product.category)}
                            scale={0.6}
                            color={product.color}
                          />
                        </Scene3D>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display font-bold">{product.name}</h3>
                            {item.customizations.length > 0 && (
                              <p className="text-sm text-muted-foreground">
                                {item.customizations.join(', ')}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-lg">
                            ${(product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="glass-card p-6 rounded-2xl h-fit sticky top-24">
              <h3 className="font-display text-xl font-bold mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-gradient-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {subtotal < 30 && (
                <p className="text-sm text-muted-foreground mb-4">
                  Add ${(30 - subtotal).toFixed(2)} more for free delivery!
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/checkout')}
                className="w-full btn-gradient-primary flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <Link to="/menu">
                <button className="w-full mt-3 btn-glass-outline text-sm">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Cart;
