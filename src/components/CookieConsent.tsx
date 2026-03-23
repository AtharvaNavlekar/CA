import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay before showing to not overwhelm the user immediately
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white border border-black/10 shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full hidden sm:block">
              <ShieldAlert className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-display font-medium mb-1">We value your privacy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 rounded-xl border border-black/10 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-gray-800 transition-colors shadow-md w-full sm:w-auto text-center"
              >
                Accept All
              </button>
            </div>
            
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
