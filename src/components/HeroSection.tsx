import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-family.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Multi-generational family enjoying time together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-cream/80 text-sm md:text-base font-medium tracking-widest uppercase mb-6 animate-fade-up">
            50 Years of Building Trust
          </p>
          
          <h1 className="heading-hero text-cream mb-8 animate-fade-up animation-delay-100">
            Where Every Home
            <span className="block text-terracotta-light">Tells a Story</span>
          </h1>
          
          <p className="text-cream/80 text-body max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            At VJ Javdekar, we don't just build homes—we nurture communities. 
            For five decades, families across Pune have trusted us to create 
            spaces where life unfolds beautifully.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-300">
            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-large hover:-translate-y-0.5"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/vj-parivaar"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream font-medium transition-all duration-300 hover:bg-cream/20"
            >
              Meet the Family
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
