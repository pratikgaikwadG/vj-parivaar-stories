import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SoftCTAProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  variant?: 'default' | 'accent' | 'muted';
}

const SoftCTA = ({ title, description, linkText, linkTo, variant = 'default' }: SoftCTAProps) => {
  const variants = {
    default: 'bg-secondary',
    accent: 'bg-sage/10',
    muted: 'bg-muted',
  };

  return (
    <div className={`${variants[variant]} rounded-2xl p-8 md:p-12 text-center`}>
      <h3 className="heading-card text-foreground mb-4">{title}</h3>
      <p className="text-body-small text-muted-foreground max-w-lg mx-auto mb-6">
        {description}
      </p>
      <Link
        to={linkTo}
        className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3 group"
      >
        {linkText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default SoftCTA;
