import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import CommunityCard from '@/components/CommunityCard';
import SoftCTA from '@/components/SoftCTA';
import { communities } from '@/data/communities';
import communityAerialImage from '@/assets/community-aerial.jpg';

const LifeAtVJ = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={communityAerialImage}
            alt="VJ Javdekar community aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Life at VJ
            </p>
            <h1 className="heading-hero text-cream mb-6">
              Where Communities
              <span className="block text-terracotta-light">Come Alive</span>
            </h1>
            <p className="text-cream/80 text-body max-w-2xl">
              Our neighbourhoods are more than addresses—they're vibrant communities 
              where daily life unfolds beautifully. From morning walks to evening 
              gatherings, discover what makes life at VJ special.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-section text-foreground mb-6">
              Designed for Living,
              <span className="block text-primary">Not Just Dwelling</span>
            </h2>
            <p className="text-body text-muted-foreground">
              Every VJ community is thoughtfully designed around how people actually 
              live. We create spaces that encourage connection, support different 
              lifestyles, and evolve with the families who call them home.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-soft text-center hover-lift">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Green Spaces
              </h3>
              <p className="text-sm text-muted-foreground">
                Lush gardens and nature trails that bring the outdoors into everyday life.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center hover-lift">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Family Zones
              </h3>
              <p className="text-sm text-muted-foreground">
                Spaces designed for all ages—from play areas to senior-friendly amenities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Gathering Places
              </h3>
              <p className="text-sm text-muted-foreground">
                Community halls, rooftop lounges, and shared kitchens for celebrations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center hover-lift">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                Wellness Focus
              </h3>
              <p className="text-sm text-muted-foreground">
                Yoga pavilions, fitness centres, and meditation gardens for wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Our Neighbourhoods
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Find Your Community
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Each VJ community has its own character, shaped by the families who 
              live there and the experiences they share.
            </p>
          </div>

          <div className="space-y-12">
            {communities.map((community, index) => (
              <div
                key={community.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CommunityCard community={community} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
                Daily Life
              </p>
              <h2 className="heading-section text-foreground mb-6">
                A Day in the Life
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌅</span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Morning</h4>
                    <p className="text-sm text-muted-foreground">
                      Sunrise yoga in the garden, children cycling to the bus stop, 
                      and friendly waves between neighbours heading to work.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">☀️</span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Afternoon</h4>
                    <p className="text-sm text-muted-foreground">
                      Retirees enjoying chai at the community centre, work-from-home 
                      professionals using co-working spaces, and students returning from school.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌆</span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Evening</h4>
                    <p className="text-sm text-muted-foreground">
                      Families gathering in the amphitheatre, evening walks along 
                      tree-lined paths, and children playing in safe, monitored areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="heading-card text-foreground mb-6">
                What Residents Say
              </h3>
              <div className="space-y-6">
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-body-small text-muted-foreground italic mb-2">
                    "We've made friendships here that will last a lifetime. Our kids 
                    have 50 'aunties and uncles' looking out for them."
                  </p>
                  <cite className="text-sm text-primary font-medium not-italic">
                    — The Kulkarni Family, VJ Harmony
                  </cite>
                </blockquote>
                <blockquote className="border-l-2 border-sage pl-4">
                  <p className="text-body-small text-muted-foreground italic mb-2">
                    "After years in apartments where I didn't know my neighbours, 
                    this feels like coming home to a village."
                  </p>
                  <cite className="text-sm text-sage font-medium not-italic">
                    — Ramesh Iyer, VJ Heights
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Locations Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Across Pune
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Our Locations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => (
              <div
                key={community.id}
                className="bg-card p-6 rounded-xl shadow-soft hover-lift"
              >
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-medium text-foreground mb-1">
                  {community.name}
                </h3>
                <p className="text-sm text-muted-foreground">{community.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <SoftCTA
            title="Hear From Our Families"
            description="The best way to understand life at VJ is through the stories of those who live it. Read about their experiences, celebrations, and daily moments."
            linkText="Read Stories"
            linkTo="/stories"
            variant="accent"
          />
        </div>
      </section>
    </main>
  );
};

export default LifeAtVJ;
