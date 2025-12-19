import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story, featured = false }) => {
  const categoryColors = {
    homeowner: 'bg-sage/10 text-sage',
    employee: 'bg-primary/10 text-primary',
    community: 'bg-terracotta/10 text-terracotta',
  };

  const categoryLabels = {
    homeowner: 'Homeowner Story',
    employee: 'Team Story',
    community: 'Community Story',
  };

  if (featured) {
    return (
      <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 md:p-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[story.category]}`}>
            {categoryLabels[story.category]}
          </span>
          <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-body-small text-muted-foreground mb-4 line-clamp-3">
            {story.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{story.author}</p>
              <p className="text-xs text-muted-foreground">{story.role}</p>
            </div>
            <Link
              to="/stories"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"
            >
              Read
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-6 p-6 bg-card rounded-xl hover-lift cursor-pointer">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1">
        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${categoryColors[story.category]}`}>
          {categoryLabels[story.category]}
        </span>
        <h4 className="font-display text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {story.title}
        </h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{story.excerpt}</p>
      </div>
    </article>
  );
};

export default StoryCard;
