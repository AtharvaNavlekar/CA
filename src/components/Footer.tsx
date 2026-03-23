import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Show when 10% of footer is visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer ref={footerRef} className="bg-primary text-white pt-20 pb-10 rounded-t-[3rem] mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <span className="text-primary font-display font-bold text-xl">B&C</span>
              </div>
              <p className="text-gray-400 text-lg max-w-sm font-light mb-6">
                Modern financial guidance for individuals and businesses in Vasai East.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                UDYAM-MH-17-0029924
              </div>
            </div>

            <div>
              <h4 className="font-display font-medium text-lg mb-6">Navigation</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-medium text-lg mb-6">Connect</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="mailto:contact@bhosaleandco.in" className="hover:text-white transition-colors flex items-center gap-1">
                    Email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors flex items-center gap-1">
                    Call Us <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    Facebook <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    Instagram <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-[12vw] leading-none font-display font-bold tracking-tighter text-white/5">
              BHOSALE
            </h2>
            <div className="text-gray-500 text-sm flex flex-col items-end gap-2">
              <p>&copy; {new Date().getFullYear()} Bhosale And Co.</p>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-xl hover:bg-gray-800 border border-white/10 transition-colors flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
