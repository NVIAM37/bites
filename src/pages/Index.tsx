import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ExpertsSection } from '@/components/sections/ExpertsSection';
import { FoodQualitySection } from '@/components/sections/FoodQualitySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { motion } from 'framer-motion';
import heroNew from '@/assets/hero-new.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-white"> {/* Changed to White */}
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-red-500/10 blur-[130px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-red-400/10 blur-[120px] rounded-full" />
            <div className="absolute top-[30%] right-[20%] w-[20%] h-[20%] bg-orange-100/50 blur-[80px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Text Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                  Now Open for Reservations
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-7xl md:text-9xl font-bold tracking-tight text-gray-900"
                style={{ textShadow: "0 0 40px rgba(239,68,68,0.1)" }}
              >
                BITES
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
              >
                Experience dining reimagined with our immersive 3D menu, AI-powered recommendations, and dishes crafted by world-class chefs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold shadow-[0_10px_30px_rgba(239,68,68,0.2)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.4)] transition-all hover:scale-105 active:scale-95">
                  Explore Menu →
                </button>
                <button className="px-8 py-4 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                  Book a Table
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-10 pt-8 border-t border-gray-100"
              >
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">50+</h4>
                  <p className="text-sm text-gray-500">Dishes</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">4.9</h4>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">10K+</h4>
                  <p className="text-sm text-gray-500">Reviews</p>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center h-full"
            >
              {/* Main Image */}
              <div className="relative z-10 w-full max-w-[650px] aspect-square flex items-center justify-center">
                <img
                  src={heroNew}
                  alt="Culinary Masterpiece"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                />
              </div>

              {/* Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-red-500/5 to-transparent blur-[80px] -z-10" />
            </motion.div>
          </div>
        </section>
        <CategorySection />
        <FeaturedSection />
        <FoodQualitySection />
        <ExpertsSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Index;
