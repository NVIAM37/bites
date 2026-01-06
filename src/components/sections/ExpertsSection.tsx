import { motion } from 'framer-motion';
import { ChefHat, Award, Clock, Star } from 'lucide-react';
import { experts } from '@/data/menuData';

export const ExpertsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">Meet The Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Our <span className="text-gradient-warm">Expert</span> Chefs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            World-class culinary artists with decades of combined experience, 
            bringing passion and creativity to every dish.
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-0 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-background">
                  <h3 className="font-display text-xl font-bold">{expert.name}</h3>
                  <p className="text-background/80 text-sm">{expert.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{expert.specialty}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{expert.experience} experience</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {expert.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
