import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-32">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
          >
            Built on trust. <br />
            <span className="text-gray-400">Driven by results.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light leading-relaxed"
          >
            Since 2013, Bhosale And Co has been the trusted financial partner for individuals and businesses in Vasai East, simplifying complex decisions into actionable strategies.
          </motion.p>
        </div>

        {/* Big Image */}
        <motion.div {...fadeIn} className="w-full h-[50vh] rounded-[2.5rem] overflow-hidden mb-40">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team meeting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Split Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-display font-medium mb-8">Our Story</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
              Founded on July 1st, 2013, we began with a simple mission: to provide honest, transparent, and expert financial guidance to the people and businesses of the Vasai-Virar corridor.
            </p>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              Over the past decade, we have grown from a small consultancy into a trusted proprietorship firm. We believe that financial literacy is the key to empowerment, which is why we focus on educating our clients in plain, jargon-free language.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-10">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-[2rem] border border-black/5 relative group cursor-help">
              <p className="text-5xl font-display font-medium mb-4">12+</p>
              <p className="text-base text-gray-500 font-light">Years of Experience</p>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-10 shadow-xl pointer-events-none">
                Founded in 2013
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-900"></div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[2rem] border border-black/5 relative group cursor-help">
              <p className="text-5xl font-display font-medium mb-4">500+</p>
              <p className="text-base text-gray-500 font-light">Clients Served</p>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-10 shadow-xl pointer-events-none">
                Across various industries
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-900"></div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white p-10 rounded-[2rem] border border-black/5 col-span-2 relative group cursor-help">
              <p className="text-xl font-medium mb-2">Registered Firm</p>
              <p className="text-base text-gray-500 font-mono">UDYAM-MH-17-0029924</p>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-10 shadow-xl pointer-events-none">
                Registration: UDYAM-MH-17-0029924
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-900"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Meet the Proprietor */}
        <motion.div {...fadeIn} className="mb-40">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
              <div className="md:col-span-2">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mr. Bhosale" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl font-display font-medium mb-2">Meet the Proprietor</h2>
                <p className="text-primary font-medium mb-8 text-lg">Mr. Bhosale, Founder</p>
                
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-10">
                  <p>
                    With over a decade of hands-on experience in the financial sector, I founded this firm with a clear vision: to demystify finance for the everyday person and local businesses in Vasai East.
                  </p>
                  <p>
                    Holding advanced qualifications in commerce and financial advisory, I have successfully guided hundreds of clients through complex loan approvals, strategic tax planning, and wealth-building investments. My approach is rooted in education—ensuring that every client understands their options before making a decision.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-black/5 relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                  <p className="text-xl font-display font-medium leading-relaxed relative z-10 italic">
                    My commitment is simple: I treat your hard-earned money and business goals with the exact same care, diligence, and respect as I do my own. Your success is the true measure of ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeIn} className="bg-primary text-white rounded-[3rem] p-16 md:p-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight max-w-md">
              Core values that define us.
            </h2>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-gray-100 transition-all flex items-center gap-2">
              Work with us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 text-2xl font-display">01</div>
              <h3 className="text-2xl font-medium mb-6">Integrity</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                We operate with complete transparency. Your financial well-being is our top priority, and we only recommend solutions that genuinely benefit you.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 text-2xl font-display">02</div>
              <h3 className="text-2xl font-medium mb-6">Accessibility</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                Financial advice shouldn't be intimidating. We break down complex concepts into simple, actionable steps for everyone.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 text-2xl font-display">03</div>
              <h3 className="text-2xl font-medium mb-6">Commitment</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                We build long-term relationships. Whether you are an individual or a growing business, we are here for every stage of your journey.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
