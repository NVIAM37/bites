import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/menuData';
import { Scene3D } from '../3d/Scene3D';
import { FoodModel } from '../3d/FoodModel';

const categoryShapes: Record<string, 'burger' | 'pizza' | 'sushi' | 'salad' | 'dessert' | 'drink'> = {
  burgers: 'burger',
  pizza: 'pizza',
  sushi: 'sushi',
  salads: 'salad',
  desserts: 'dessert',
  drinks: 'drink',
};

export const CategorySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Explore <span className="text-gradient-primary">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse selection of culinary delights, from juicy burgers to fresh sushi.
            Each category offers a unique dining experience.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/menu?category=${category.id}`}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card group cursor-pointer h-full overflow-hidden relative"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* 3D Model */}
                  <div className="h-48 relative">
                    <Scene3D cameraPosition={[0, 1, 4]}>
                      <FoodModel shape={categoryShapes[category.id]} scale={0.8} />
                    </Scene3D>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{category.icon}</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient-primary inline-flex items-center gap-2"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
