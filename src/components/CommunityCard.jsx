import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityCard = ({ community, featured = false }) => {
  if (featured) {
    return (
      <article className="group grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden shadow-soft hover-lift">
        <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={community.image}
            alt={community.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-sm text-muted-foreground">{community.location}</span>
            <h3 className="heading-card text-foreground mt-1">{community.name}</h3>
            <p className="text-primary font-medium text-sm mt-1">{community.tagline}</p>
          </div>
          
          <p className="text-body-small text-muted-foreground mb-6">
            {community.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {community.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {community.residentQuote && (
            <blockquote className="relative bg-secondary/50 rounded-xl p-4 mb-6">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "{community.residentQuote.text}"
              </p>
              <cite className="text-xs text-muted-foreground mt-2 block not-italic">
                — {community.residentQuote.author}
              </cite>
            </blockquote>
          )}

          <Link
            to="/life-at-vj"
            className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3 group/link self-start"
          >
            Explore Life Here
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-muted-foreground">{community.location}</span>
        <h3 className="font-display text-xl font-medium text-foreground mt-1 mb-1">
          {community.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-3">{community.tagline}</p>
        <p className="text-body-small text-muted-foreground line-clamp-2 mb-4">
          {community.description}
        </p>
        <Link
          to="/life-at-vj"
          className="inline-flex items-center gap-1 text-primary text-sm font-medium transition-all hover:gap-2"
        >
          Discover More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default CommunityCard;
