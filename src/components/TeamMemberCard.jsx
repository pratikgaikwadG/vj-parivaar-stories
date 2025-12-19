import { Quote } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  const categoryStyles = {
    leadership: 'ring-2 ring-primary/20',
    team: '',
    homeowner: 'ring-2 ring-sage/20',
    partner: 'ring-2 ring-terracotta/20',
  };

  return (
    <article className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift ${categoryStyles[member.category]}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-medium text-foreground">{member.name}</h3>
        <p className="text-sm text-primary font-medium">{member.role}</p>
        <p className="text-xs text-muted-foreground mt-1 mb-4">{member.tenure}</p>
        
        <blockquote className="relative">
          <Quote className="w-4 h-4 text-primary/30 mb-1" />
          <p className="text-sm text-muted-foreground italic leading-relaxed line-clamp-3">
            "{member.quote}"
          </p>
        </blockquote>
      </div>
    </article>
  );
};

export default TeamMemberCard;
