import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Scene3D } from '../3d/Scene3D';
import { FoodModel } from '../3d/FoodModel';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-golden/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now Open for Reservations
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-primary">Sage</span> &{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-warm">Salt</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0">
            Experience dining reimagined with our immersive 3D menu, AI-powered recommendations, 
            and dishes crafted by world-class chefs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient-primary flex items-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glass-outline"
              >
                Book a Table
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 mt-12 justify-center lg:justify-start"
          >
            {[
              { value: '50+', label: 'Dishes' },
              { value: '4.9', label: 'Rating' },
              { value: '10K+', label: 'Reviews' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl font-bold text-gradient-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Hero Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/30 to-golden/30 rounded-full blur-3xl" />
          </div>
          
          <Scene3D cameraPosition={[0, 2, 6]} enableZoom={false}>
            <FoodModel shape="burger" scale={1.5} />
          </Scene3D>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 right-0 glass-card py-3 px-4 rounded-xl"
          >
            <p className="text-sm font-medium">🔥 Trending Now</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-1/4 left-0 glass-card py-3 px-4 rounded-xl"
          >
            <p className="text-sm font-medium">⭐ 4.9 Rating</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
        >
          <div className="w-1 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
