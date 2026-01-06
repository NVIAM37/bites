import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIAgent } from '@/components/AIAgent';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ExpertsSection } from '@/components/sections/ExpertsSection';
import { FoodQualitySection } from '@/components/sections/FoodQualitySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedSection />
        <FoodQualitySection />
        <ExpertsSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
};

export default Index;
