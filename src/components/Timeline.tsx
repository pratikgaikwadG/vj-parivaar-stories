import type { TimelineEvent } from '@/data/timeline';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
              <div
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft hover-lift ${
                  event.highlight ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-display font-semibold mb-3 ${
                  event.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {event.year}
                </span>
                <h3 className="heading-card text-foreground mb-2">{event.title}</h3>
                <p className="text-body-small text-muted-foreground">{event.description}</p>
              </div>
            </div>

            {/* Center Point */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full border-4 ${
                event.highlight 
                  ? 'bg-primary border-primary/30' 
                  : 'bg-background border-border'
              }`} />
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
