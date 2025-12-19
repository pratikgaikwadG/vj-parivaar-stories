import { useState } from 'react';
import TeamMemberCard from '@/components/TeamMemberCard';
import SoftCTA from '@/components/SoftCTA';
import { leadership, team, homeowners, partners } from '@/data/team';

const categories = [
  { id: 'all', label: 'Everyone' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'team', label: 'Our Team' },
  { id: 'homeowner', label: 'Homeowners' },
  { id: 'partner', label: 'Partners' },
];

const VJParivaar = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getFilteredMembers = () => {
    switch (activeCategory) {
      case 'leadership':
        return leadership;
      case 'team':
        return team;
      case 'homeowner':
        return homeowners;
      case 'partner':
        return partners;
      default:
        return [...leadership, ...team, ...homeowners, ...partners];
    }
  };

  const filteredMembers = getFilteredMembers();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              VJ Parivaar
            </p>
            <h1 className="heading-hero text-foreground mb-6">
              One Family,
              <span className="block text-primary">Many Stories</span>
            </h1>
            <p className="text-body text-muted-foreground">
              At VJ Javdekar, we're not just colleagues, clients, or partners—we're 
              family. Meet the people who make our communities what they are: 
              passionate team members, proud homeowners, and trusted partners.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="font-display text-4xl font-semibold text-primary mb-2">200+</p>
              <p className="text-cream/80">Dedicated Team Members</p>
            </div>
            <div className="p-6">
              <p className="font-display text-4xl font-semibold text-primary mb-2">15,000+</p>
              <p className="text-cream/80">Happy Families</p>
            </div>
            <div className="p-6">
              <p className="font-display text-4xl font-semibold text-primary mb-2">50+</p>
              <p className="text-cream/80">Trusted Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-up"
                style={{ animationDelay: `${(index % 8) * 50}ms` }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Our Culture
            </p>
            <h2 className="heading-section text-foreground mb-4">
              What Makes Us Family
            </h2>
            <p className="text-body text-muted-foreground">
              The VJ Parivaar isn't just a team—it's a community united by shared 
              values and a common purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="heading-card text-foreground mb-3">Mutual Respect</h3>
              <p className="text-body-small text-muted-foreground">
                Every voice matters. From site workers to senior leadership, 
                we treat everyone with dignity and listen to every perspective.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="heading-card text-foreground mb-3">Growth Together</h3>
              <p className="text-body-small text-muted-foreground">
                We invest in our people's futures. Training, mentorship, and 
                opportunities to grow are part of the VJ promise.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="heading-card text-foreground mb-3">Celebrate Life</h3>
              <p className="text-body-small text-muted-foreground">
                From festivals to milestones, we find reasons to celebrate. 
                Because life is meant to be enjoyed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <SoftCTA
            title="Read Their Stories"
            description="Dive deeper into the lives and experiences of our VJ Parivaar. Every story is a testament to the bonds we build."
            linkText="Explore Stories"
            linkTo="/stories"
          />
        </div>
      </section>
    </main>
  );
};

export default VJParivaar;
