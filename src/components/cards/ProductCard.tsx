import { motion } from 'framer-motion';
import { Star, Plus, Flame } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  item: MenuItem;
  index?: number;
}

export const ProductCard = ({ item, index = 0 }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)}`,
    });
  };

  return (
    <Link to={`/product/${item.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -5 }}
        className="glass-card group cursor-pointer overflow-hidden relative"
      >
        {/* Tags */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                tag === 'Best Seller'
                  ? 'bg-primary/90 text-primary-foreground'
                  : tag === 'Spicy'
                  ? 'bg-rose/90 text-primary-foreground flex items-center gap-1'
                  : tag === 'Vegan'
                  ? 'bg-lime/90 text-primary-foreground'
                  : 'bg-golden/90 text-primary-foreground'
              }`}
            >
              {tag === 'Spicy' && <Flame className="w-3 h-3" />}
              {tag}
            </span>
          ))}
        </div>

        {/* Calories Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 rounded-full bg-muted/90 text-xs font-medium">
            {item.calories} cal
          </span>
        </div>

        {/* Food Image */}
        <div className="h-48 relative bg-gradient-to-b from-muted/50 to-transparent overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-golden text-golden" />
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-xs text-muted-foreground">({item.reviews})</span>
          </div>

          {/* Name & Description */}
          <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Price & Add Button */}
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-primary">
              ${item.price.toFixed(2)}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
