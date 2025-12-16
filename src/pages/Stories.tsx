import { useState } from 'react';
import StoryCard from '@/components/StoryCard';
import SoftCTA from '@/components/SoftCTA';
import { stories } from '@/data/stories';

const categories = [
  { id: 'all', label: 'All Stories' },
  { id: 'homeowner', label: 'Homeowner Stories' },
  { id: 'employee', label: 'Team Stories' },
  { id: 'community', label: 'Community Stories' },
];

const Stories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Stories & Updates
            </p>
            <h1 className="heading-hero text-foreground mb-6">
              Voices of
              <span className="block text-primary">Our Community</span>
            </h1>
            <p className="text-body text-muted-foreground">
              Every home has a story. Every family has a journey. Here, we share 
              the experiences, celebrations, and everyday moments that make the 
              VJ Parivaar special.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary/10 text-primary">
                Featured Story
              </span>
              <h2 className="heading-section text-foreground mb-4">
                {stories[0].title}
              </h2>
              <p className="text-body text-muted-foreground mb-6">
                {stories[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                  <img
                    src={stories[0].image}
                    alt={stories[0].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{stories[0].author}</p>
                  <p className="text-sm text-muted-foreground">{stories[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding bg-secondary">
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
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <div
                key={story.id}
                className="animate-fade-up"
                style={{ animationDelay: `${(index % 6) * 50}ms` }}
              >
                <StoryCard story={story} featured />
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/Updates Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Stay Connected
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Join Our Community
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Be the first to hear about community events, new stories, and 
              updates from the VJ Parivaar. We share meaningful content, not spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-medium whitespace-nowrap">
                Stay Updated
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <SoftCTA
            title="Meet the VJ Parivaar"
            description="Get to know the faces behind these stories—our team members, homeowners, and partners who make our community special."
            linkText="Meet the Family"
            linkTo="/vj-parivaar"
          />
        </div>
      </section>
    </main>
  );
};

export default Stories;
