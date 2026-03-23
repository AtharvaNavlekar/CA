import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, TrendingUp, Users, PieChart, Star, MapPin, HeartHandshake, Target, ChevronLeft, ChevronRight, BarChart3, Activity, DollarSign } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      quote: "Bhosale And Co made securing my business loan incredibly smooth. Their transparency and dedication are unmatched in Vasai.",
      rating: 5
    },
    {
      name: "Priya Desai",
      quote: "I've been relying on them for my tax filing and investments for 5 years. They explain everything simply and always have my best interests at heart.",
      rating: 5
    },
    {
      name: "Amit Patel",
      quote: "Professional, approachable, and highly knowledgeable. They helped me restructure my MSME finances and saved me a lot of stress.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24"
    >
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[75vh]">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Accounting & Finance Experts in Vasai East</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.1] mb-6"
            >
              Precision in <br />
              <span className="text-gray-400 italic">numbers.</span><br />
              Growth in <br />
              <span className="text-primary">business.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 font-light leading-relaxed"
            >
              We transform complex financial data into clear, actionable strategies. From tax optimization to securing capital, we are your dedicated financial architects.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <Link to="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-white border border-black/10 text-primary font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
                Our Services
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 sm:gap-10 pt-8 border-t border-black/5 w-full"
            >
              <div>
                <p className="text-3xl font-display font-medium text-primary">12+</p>
                <p className="text-sm text-gray-500 font-light mt-1">Years Exp.</p>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div>
                <p className="text-3xl font-display font-medium text-primary">₹50Cr+</p>
                <p className="text-sm text-gray-500 font-light mt-1">Loans Sanctioned</p>
              </div>
              <div className="w-px h-12 bg-black/10 hidden sm:block"></div>
              <div className="hidden sm:block">
                <p className="text-3xl font-display font-medium text-primary flex items-center gap-1">
                  <ShieldCheck className="w-7 h-7 text-green-500" />
                </p>
                <p className="text-sm text-gray-500 font-light mt-1">Govt. Registered</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Financial Dashboard Composition */}
          <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">
            {/* Background decorative blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl opacity-70 transform -rotate-12 scale-110"></div>
            
            {/* Main Dashboard Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md bg-white rounded-[2rem] shadow-2xl border border-black/5 p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Total Portfolio Value</p>
                  <h3 className="text-3xl font-display font-bold text-gray-900">₹12.4M</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-32 flex items-end gap-2 mb-8">
                {[40, 60, 45, 80, 65, 90, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                    className={`flex-1 rounded-t-md ${i === 6 ? 'bg-primary' : 'bg-gray-100'}`}
                  ></motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <PieChart className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Tax Optimization</p>
                      <p className="text-xs text-gray-500">Q3 Filing Completed</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-500">+15%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Business Loan</p>
                      <p className="text-xs text-gray-500">Sanctioned</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">₹50L</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-4 lg:-right-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Wealth Growth</p>
                <p className="text-lg font-bold text-gray-900">+24.5%</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-4 lg:-left-12 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Audit Status</p>
                <p className="text-lg font-bold text-gray-900">Clear</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We combine deep financial expertise with a genuinely client-first approach.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Proven Expertise", desc: "Over a decade of experience navigating complex financial landscapes." },
            { icon: MapPin, title: "Local Presence", desc: "Deeply rooted in Vasai East, understanding the unique needs of our community." },
            { icon: HeartHandshake, title: "Client-Centric", desc: "Your goals are our goals. We prioritize your financial well-being above all." },
            { icon: Target, title: "Absolute Transparency", desc: "Clear communication, no hidden fees, and honest, jargon-free advice." }
          ].map((feature, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2rem] border border-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <motion.div {...fadeIn} className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight">Our Expertise</h2>
          <Link to="/services" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
            View all <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="md:col-span-2 bg-white p-12 rounded-[2.5rem] border border-black/5 hover:border-black/10 transition-colors group">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-medium mb-4">Loan Assistance</h3>
            <p className="text-gray-500 font-light max-w-md mb-8">
              Navigate home, personal, and business loans with ease. We handle the paperwork and liaise with banks to secure the best rates.
            </p>
            <Link to="/services#loans" className="inline-flex items-center gap-2 font-medium text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-primary text-white p-12 rounded-[2.5rem] group">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-medium mb-4">Investments</h3>
            <p className="text-white/70 font-light mb-8 text-lg">
              Grow wealth safely with expert guidance on mutual funds and SIPs.
            </p>
            <Link to="/services#investments" className="inline-flex items-center gap-2 font-medium text-sm text-white/90">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white p-12 rounded-[2.5rem] border border-black/5 hover:border-black/10 transition-colors group">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-medium mb-4">Tax Filing</h3>
            <p className="text-gray-500 font-light mb-8 text-lg">
              Stay compliant with seamless ITR and GST filing services.
            </p>
            <Link to="/services#tax" className="inline-flex items-center gap-2 font-medium text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Medium Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="md:col-span-2 bg-gray-100 p-12 rounded-[2.5rem] group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-medium mb-4">Business Finance</h3>
            <p className="text-gray-600 font-light max-w-md mb-8">
              Tailored support for MSMEs including working capital management and government scheme eligibility.
            </p>
            <Link to="/services#business" className="inline-flex items-center gap-2 font-medium text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <motion.div {...fadeIn} className="bg-primary text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                What our clients say.
              </h2>
              <p className="text-white/70 font-light text-lg mb-8">
                Don't just take our word for it. Hear from the people and businesses we've helped grow.
              </p>
              <div className="flex gap-4">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 relative min-h-[250px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="absolute inset-0"
                >
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="font-medium text-lg">{testimonials[currentTestimonial].name}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced CTA */}
      <motion.section {...fadeIn} className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-32">
        <div className="relative bg-primary rounded-[3rem] overflow-hidden px-8 py-20 md:px-20 md:py-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Ready to secure your <br className="hidden md:block" /> <span className="text-white/70 italic">financial future?</span>
            </h2>
            <p className="text-lg text-white/70 font-light max-w-xl mx-auto md:mx-0">
              Take the first step towards clarity and growth. Let our experts craft a strategy tailored specifically to your goals.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white text-primary font-medium hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
              <span className="text-lg">Schedule a Consultation</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
