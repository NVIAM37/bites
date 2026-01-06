import { motion } from 'framer-motion';
import { menuItems } from '@/data/menuData';
import { ProductCard } from '../cards/ProductCard';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedSection = () => {
  // Get best sellers
  const featured = menuItems.filter(item => item.tags.includes('Best Seller')).slice(0, 6);

  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="badge-primary">Trending Now</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Best <span className="text-gradient-warm">Sellers</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Our most loved dishes, handpicked by our customers and perfected by our chefs.
            </p>
          </div>

          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glass-outline flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
