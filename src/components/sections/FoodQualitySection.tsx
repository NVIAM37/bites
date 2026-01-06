import { motion } from 'framer-motion';
import { Shield, Leaf, Award, Heart, Truck, Sparkles } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every ingredient is carefully sourced and quality-checked before reaching your plate.',
    color: 'primary',
  },
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'We partner with local farms to bring you the freshest produce, delivered daily.',
    color: 'lime',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Multiple Michelin stars and culinary awards recognize our commitment to excellence.',
    color: 'golden',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Each dish is crafted with passion by our expert chefs who take pride in their art.',
    color: 'rose',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Hot, fresh food delivered to your doorstep in 30 minutes or less.',
    color: 'sky',
  },
  {
    icon: Sparkles,
    title: 'Hygiene First',
    description: 'State-of-the-art kitchen facilities with the highest hygiene standards.',
    color: 'teal',
  },
];

const colorClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  lime: 'bg-lime/10 text-lime',
  golden: 'bg-golden/10 text-golden',
  rose: 'bg-rose/10 text-rose',
  sky: 'bg-sky/10 text-sky',
  teal: 'bg-teal/10 text-teal',
};

export const FoodQualitySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-secondary mb-4">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Uncompromising <span className="text-gradient-primary">Quality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From farm to table, we ensure every step of our process meets the highest standards 
            of quality, freshness, and taste.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card"
            >
              <div className={`w-14 h-14 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-golden p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Ready to Experience the Future?
                </h3>
                <p className="text-primary-foreground/80">
                  Order now and taste the difference quality makes.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
