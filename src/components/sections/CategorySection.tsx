import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, Category } from '@/data/menuData';

// Image imports
import burgerImg from '../../assets/categories/burger.png';
import pizzaImg from '../../assets/categories/pizza.png';
import sushiImg from '../../assets/categories/sushi.png';
import saladImg from '../../assets/categories/salad.png';
import dessertImg from '../../assets/categories/dessert.png';
import drinkImg from '../../assets/categories/drink.png';

const categoryImages: Record<string, string> = {
  burgers: burgerImg,
  pizza: pizzaImg,
  sushi: sushiImg,
  salads: saladImg,
  desserts: dessertImg,
  drinks: drinkImg,
};

const CategoryCard = ({ category, index }: { category: Category, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/menu?category=${category.id}`}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-card group cursor-pointer h-[400px] overflow-hidden relative flex flex-col"
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

          {/* Image Container with Parallax Effect */}
          <div className="flex-1 relative flex items-center justify-center p-8 active-glow" style={{ transform: "translateZ(75px)" }}>
            <motion.img
              src={categoryImages[category.id]}
              alt={category.name}
              className={`w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 ${(category.id === 'sushi' || category.id === 'desserts') ? '-translate-y-12' : ''
                }`}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            />

            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${category.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`} />
          </div>

          {/* Content */}
          <div className="p-6 relative z-10 bg-background/40 backdrop-blur-md border-t border-white/10" style={{ transform: "translateZ(50px)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl filter drop-shadow-md">{category.icon}</span>
              <motion.div
                whileHover={{ x: 5, backgroundColor: "var(--primary)" }}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-foreground group-hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            <h3 className="font-display text-2xl font-black mb-2 tracking-tight">{category.name}</h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-2">{category.description}</p>
          </div>

          {/* Interactive Border */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-3xl" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const CategorySection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Menu
          </motion.span>
          <h2 className="font-display text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Explore <span className="text-gradient-primary">Categories</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our diverse selection of culinary delights, from juicy burgers to fresh sushi.
            Each category offers a unique dining experience.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient-primary px-10 py-5 rounded-2xl flex items-center gap-3 text-xl font-black group mx-auto"
            >
              View Full Menu
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
