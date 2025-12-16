import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Timeline from '@/components/Timeline';
import SoftCTA from '@/components/SoftCTA';
import { timeline } from '@/data/timeline';
import heroFamilyImage from '@/assets/hero-family.jpg';

const values = [
  {
    title: 'People First',
    description: 'Every decision we make starts with one question: how does this serve our families?',
  },
  {
    title: 'Quality Without Compromise',
    description: 'We build homes we would be proud to live in ourselves. No shortcuts, no excuses.',
  },
  {
    title: 'Community Above All',
    description: 'We design spaces that bring people together, not just walls that keep them apart.',
  },
  {
    title: 'Trust Through Transparency',
    description: 'Open communication and honest relationships are the foundation of everything we do.',
  },
];

const OurStory = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img
            src={heroFamilyImage}
            alt="VJ Javdekar family legacy"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h1 className="heading-hero text-cream mb-6">
              Five Decades of
              <span className="block text-terracotta-light">Building Trust</span>
            </h1>
            <p className="text-cream/80 text-body max-w-2xl">
              In 1974, Late Shri Vithal Javdekar laid the first brick of what would 
              become one of Pune's most trusted names in real estate. His dream was 
              simple: build homes with the same care you would build your own.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-foreground mb-6">
                More Than Builders,
                <span className="block text-primary">We Are Family</span>
              </h2>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  When VJ Javdekar was founded, real estate was just beginning to 
                  transform Pune. But even then, our founder understood something 
                  that many still miss today: a home is not just a transaction—it's 
                  a promise.
                </p>
                <p>
                  A promise of safety. Of community. Of a place where children grow, 
                  families gather, and memories are made.
                </p>
                <p>
                  Fifty years later, that promise guides everything we do. From the 
                  materials we choose to the communities we design, every decision 
                  reflects our commitment to the families who trust us.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-xl shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Our Journey
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Milestones of Trust
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Every year has brought new challenges and triumphs. Through it all, 
              our commitment to our families has never wavered.
            </p>
          </div>

          <Timeline events={timeline} />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="container-custom">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed mb-8">
              "We don't build homes to sell—we build them to last. Every brick carries 
              the weight of someone's dreams, and we never forget that responsibility."
            </p>
            <cite className="text-cream/60 not-italic">
              <span className="text-primary font-medium">Late Shri Vithal Javdekar</span>
              <span className="block text-sm mt-1">Founder, VJ Javdekar</span>
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Looking Forward
            </p>
            <h2 className="heading-section text-foreground mb-6">
              The Next Chapter
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              As we enter our sixth decade, we remain committed to the same values 
              that started it all. New technologies, sustainable practices, and 
              evolving lifestyles inspire us—but our core promise stays the same: 
              to build homes where families thrive.
            </p>
            <Link
              to="/vj-parivaar"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-medium"
            >
              Meet Our Family
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SoftCTA
            title="Discover Life at VJ"
            description="Experience what makes our communities special. From morning yoga sessions to festive celebrations, see life through the eyes of our residents."
            linkText="Explore Communities"
            linkTo="/life-at-vj"
            variant="accent"
          />
        </div>
      </section>
    </main>
  );
};

export default OurStory;
