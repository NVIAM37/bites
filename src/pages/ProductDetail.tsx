import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { Scene3D } from '@/components/3d/Scene3D';
import { FoodModel } from '@/components/3d/FoodModel';
import { menuItems } from '@/data/menuData';
import { Star, Plus, Minus, ShoppingCart, ArrowLeft, Flame, Leaf, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState({
    extraCheese: false,
    noOnions: false,
    extraSpicy: false,
    addBacon: false,
  });

  const product = menuItems.find(item => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  const getModelShape = () => {
    if (product.category === 'burgers') return 'burger';
    if (product.category === 'pizza') return 'pizza';
    if (product.category === 'sushi') return 'sushi';
    if (product.category === 'salads') return 'salad';
    if (product.category === 'desserts') return 'dessert';
    return 'drink';
  };

  const calculatePrice = () => {
    let total = product.price * quantity;
    if (customizations.extraCheese) total += 1.5 * quantity;
    if (customizations.addBacon) total += 2.0 * quantity;
    return total.toFixed(2);
  };

  const handleAddToCart = () => {
    toast.success(`${quantity}x ${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Menu
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 3D Model Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 h-[400px] md:h-[500px] relative overflow-hidden">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at center, ${product.color}40 0%, transparent 70%)`
                  }}
                />
                
                <Scene3D cameraPosition={[0, 2, 5]} autoRotate enableZoom>
                  <FoodModel shape={getModelShape()} scale={1.8} color={product.color} />
                </Scene3D>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tag === 'Best Seller' ? 'bg-primary text-primary-foreground' :
                        tag === 'Spicy' ? 'bg-destructive text-destructive-foreground' :
                        tag === 'Vegan' ? 'bg-accent text-accent-foreground' :
                        'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Suggestion Bubble */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 right-4 glass-card px-4 py-3 rounded-2xl max-w-[250px]"
              >
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold">Chef AI:</span> Pairs perfectly with our Mango Sunset drink!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Flame className="w-4 h-4" />
                    {product.calories} cal
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              <div className="text-4xl font-bold text-gradient-primary">
                ${calculatePrice()}
              </div>

              {/* Customizations */}
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h3 className="font-display text-lg font-bold">Customize Your Order</h3>
                
                {[
                  { key: 'extraCheese', label: 'Extra Cheese', price: '+$1.50' },
                  { key: 'noOnions', label: 'No Onions', price: 'Free' },
                  { key: 'extraSpicy', label: 'Extra Spicy', price: 'Free' },
                  { key: 'addBacon', label: 'Add Bacon', price: '+$2.00' },
                ].map(({ key, label, price }) => (
                  <label
                    key={key}
                    className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={customizations[key as keyof typeof customizations]}
                        onChange={(e) => setCustomizations(prev => ({
                          ...prev,
                          [key]: e.target.checked
                        }))}
                        className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-primary"
                      />
                      <span>{label}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{price}</span>
                  </label>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 glass-card px-4 py-2 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-xl w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 btn-gradient-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>

              {/* Extra Info */}
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Leaf className="w-4 h-4 text-accent" />
                  Fresh Ingredients
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Flame className="w-4 h-4 text-destructive" />
                  Made to Order
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default ProductDetail;
