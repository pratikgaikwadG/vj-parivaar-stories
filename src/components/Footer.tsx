import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const footerLinks = {
  discover: [
    { name: 'Our Story', path: '/our-story' },
    { name: 'Life at VJ', path: '/life-at-vj' },
    { name: 'VJ Parivaar', path: '/vj-parivaar' },
    { name: 'Stories', path: '/stories' },
  ],
  connect: [
    { name: 'Pune Office', path: '#' },
    { name: 'Reach Out', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-2xl">VJ</span>
              </div>
              <div>
                <span className="font-display text-2xl font-medium text-cream">
                  VJ Javdekar
                </span>
                <p className="text-sm text-cream/60">Building Homes, Growing Families</p>
              </div>
            </div>
            <p className="text-cream/70 text-body-small max-w-md leading-relaxed mb-6">
              For over five decades, we've been more than builders—we've been family. 
              Every home we create is a testament to trust, quality, and the enduring 
              bonds of community.
            </p>
            <p className="text-sm text-cream/50">
              Proudly building communities in Pune since 1974
            </p>
          </div>

          {/* Discover Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6 text-cream">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-cream transition-colors duration-200 text-body-small"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6 text-cream">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-cream transition-colors duration-200 text-body-small"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © {new Date().getFullYear()} VJ Javdekar. All rights reserved.
            </p>
            <p className="text-sm text-cream/50 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by VJ Parivaar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
