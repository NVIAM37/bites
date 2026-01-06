import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo-bites.png';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Sage & Salt" className="w-15 h-12 rounded-full object-contain bg-white/10" />
              <span className="font-display text-xl font-bold text-background">
                Bites
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Experience culinary excellence where fresh herbs meet pure seasoning.
              Farm-fresh ingredients, handcrafted recipes, unforgettable dining.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'About Us', 'Book a Table', 'Track Order', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Culinary Avenue, Foodie District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@sageandsalt.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Mon - Thu</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Fri - Sun</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 NVIAM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
