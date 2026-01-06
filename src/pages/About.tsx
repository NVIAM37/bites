import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { ExpertsSection } from '@/components/sections/ExpertsSection';
import { FoodQualitySection } from '@/components/sections/FoodQualitySection';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="section-padding pt-0">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge-primary mb-4">About Us</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                The <span className="text-gradient-warm">Future</span> of Dining
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                FutureDish was born from a simple vision: to revolutionize how people experience food 
                through cutting-edge technology and uncompromising culinary excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding pt-0">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Our Mission', text: 'To deliver exceptional dining experiences that combine innovation with tradition, making every meal memorable.' },
                { icon: Eye, title: 'Our Vision', text: 'To become the global standard for immersive dining, where technology enhances the joy of eating.' },
                { icon: Heart, title: 'Our Values', text: 'Quality, innovation, sustainability, and customer happiness drive everything we do.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ExpertsSection />
        <FoodQualitySection />
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default About;
