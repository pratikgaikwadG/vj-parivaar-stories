import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Home } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import StoryCard from '@/components/StoryCard';
import CommunityCard from '@/components/CommunityCard';
import SoftCTA from '@/components/SoftCTA';
import { featuredStories } from '@/data/stories';
import { featuredCommunities } from '@/data/communities';
import communityYogaImage from '@/assets/community-yoga.jpg';

const stats = [
  { icon: Home, value: '15,000+', label: 'Happy Families' },
  { icon: Users, value: '50+', label: 'Years of Trust' },
  { icon: Heart, value: '200+', label: 'Team Members' },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-card rounded-2xl shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <p className="font-display text-4xl font-semibold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Moments Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
                Life in Our Communities
              </p>
              <h2 className="heading-section text-foreground mb-6">
                Where Neighbours
                <span className="block text-primary">Become Family</span>
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                At VJ Javdekar, we believe that a home is more than four walls. 
                It's the morning yoga sessions with neighbours, the festive celebrations 
                that span entire buildings, and the countless small moments that turn 
                strangers into lifelong friends.
              </p>
              <Link
                to="/life-at-vj"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-medium"
              >
                Explore Life Here
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-large">
                <img
                  src={communityYogaImage}
                  alt="Community yoga session at VJ Javdekar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium max-w-xs">
                <p className="text-sm text-muted-foreground italic">
                  "The morning yoga sessions have given us friendships that go beyond 
                  just being neighbours."
                </p>
                <p className="text-xs text-primary font-medium mt-2">
                  — VJ Greenwood Residents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Stories from Our Family
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Voices of the VJ Parivaar
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Every home has a story. Here are some from the people who make our 
              communities what they are—homeowners, team members, and neighbours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div
                key={story.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StoryCard story={story} featured />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3 group"
            >
              Read More Stories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Communities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Our Neighbourhoods
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Communities Built with Care
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Each VJ community is unique, designed around the lifestyles and needs 
              of the families who call it home.
            </p>
          </div>

          <div className="mb-12">
            <CommunityCard community={featuredCommunities[0]} featured />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredCommunities.slice(1).map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <SoftCTA
              title="Meet Our Family"
              description="Get to know the people who make VJ Javdekar special—from our dedicated team to the homeowners who trust us with their dreams."
              linkText="Meet the Family"
              linkTo="/vj-parivaar"
            />
            <SoftCTA
              title="Our Story"
              description="Five decades of building trust, one home at a time. Discover the values and legacy that guide everything we do."
              linkText="Discover More"
              linkTo="/our-story"
              variant="accent"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
