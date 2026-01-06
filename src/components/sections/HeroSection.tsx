import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChefHat, Clock } from 'lucide-react';
import Lottie from "lottie-react";
import { useEffect, useState } from 'react';
import heroMain from '../../assets/hero-main.png';

export const HeroSection = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetching a working public lottie animation for food background
    fetch('https://assets9.lottiefiles.com/packages/lf20_m6cuL6.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Lottie Load Error:", err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-[0.03]" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                <ChefHat className="w-4 h-4" />
                Michelin Star Excellence
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                <span className="block text-gradient-primary">PURE</span>
                <span className="block text-foreground opacity-90 text-5xl md:text-6xl lg:text-7xl mt-2 italic font-serif">Seasoning.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0"
            >
              Where culinary art meets high-tech precision. Explore our 3D immersive menu and let our AI curate your perfect dining experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gradient-primary px-8 py-4 rounded-2xl flex items-center gap-3 text-lg font-bold group"
                >
                  View 3D Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glass-outline px-8 py-4 rounded-2xl text-lg font-bold"
                >
                  Reservations
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              {[
                { label: "Rating", value: "4.9", icon: <Star className="w-4 h-4 text-golden" /> },
                { label: "Delivery", value: "25min", icon: <Star className="w-4 h-4 text-primary" /> },
                { label: "Verified", value: "12k+", icon: <Star className="w-4 h-4 text-secondary" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {stat.icon}
                    {stat.label}
                  </span>
                  <span className="text-2xl font-black text-foreground">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            {/* Background Lottie Animation */}
            <div className="absolute inset-0 -z-10 opacity-30 scale-150 blur-md">
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>

            {/* Hero Image Container */}
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-golden/20 rounded-full blur-[100px] animate-pulse-slow" />

              <motion.img
                src={heroMain}
                alt="Pure Seasoning"
                className="w-full h-auto object-contain z-10 drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Dynamic Floaters */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-4 glass-card p-4 rounded-2xl shadow-2xl backdrop-blur-xl border-white/10 z-20"
              >
                <p className="text-sm font-black flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  LIVE ORDERING
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -left-4 glass-card p-4 rounded-2xl shadow-2xl backdrop-blur-xl border-white/10 z-20"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">Chef's Choice</p>
                  <p className="text-sm font-black">Smoky Wagyu Burger</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Cut */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
