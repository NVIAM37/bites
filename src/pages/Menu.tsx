import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { ProductCard } from '@/components/cards/ProductCard';
import { menuItems, categories } from '@/data/menuData';
import { Search, Filter } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = !activeCategory || item.category === activeCategory;
    const matchesTag = !activeTag || item.tags.includes(activeTag);
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  const tags = ['Best Seller', 'Spicy', 'Vegan', 'Premium'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-5xl font-bold mb-4">
              Our <span className="text-gradient-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse selection of culinary masterpieces, each crafted with passion.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-4 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTag === tag ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${!activeCategory ? 'bg-primary text-primary-foreground' : 'glass hover:bg-muted'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'glass hover:bg-muted'}`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results */}
          <p className="text-muted-foreground mb-6">{filteredItems.length} dishes found</p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <ProductCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Menu;
