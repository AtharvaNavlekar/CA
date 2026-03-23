import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ChevronDown, ShieldCheck, MessageSquare } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const faqs = [
  {
    question: "What documents do I need for a business loan application?",
    answer: "Typically, you'll need your business registration proof, last 3 years' IT returns, bank statements for the last 6 months, KYC documents of promoters, and a brief project report. We'll provide a detailed checklist based on your specific loan type."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "The timeline varies depending on the loan type and completeness of documentation. Generally, unsecured business loans can be processed within 5-7 working days, while secured loans or mortgages may take 10-15 working days."
  },
  {
    question: "Do you provide services for startups?",
    answer: "Yes, we offer comprehensive financial services for startups, including project report preparation, CMA data analysis, and guidance on securing seed funding or MSME loans."
  },
  {
    question: "What are your consultation fees?",
    answer: "Our initial consultation is completely free. During this session, we understand your requirements and provide a transparent fee structure for the specific services you need before proceeding."
  },
  {
    question: "Can you help with tax planning and filing?",
    answer: "Absolutely. We offer end-to-end tax advisory services, helping you optimize your tax liabilities legally and ensuring timely filing of income tax and GST returns."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`ml-4 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-14 text-gray-500 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
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
        <div className="max-w-3xl mb-24 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
          >
            Let's start a <br />
            <span className="text-gray-400">conversation.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light leading-relaxed"
          >
            Whether you have a question about our services or need to schedule a consultation, our team is ready to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-40">
          
          {/* Form */}
          <motion.div {...fadeIn} className="bg-white p-10 md:p-14 rounded-[3rem] border border-black/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-3xl font-display font-medium mb-3">Send a message</h3>
                <p className="text-gray-500 font-light flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" /> We typically reply within 2 hours.
                </p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-black/5 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-black/5 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-black/5 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 ml-1">How can we help?</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-black/5 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                    placeholder="Tell us about your financial needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Submit Request <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Your information is secure and encrypted.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-12">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium mb-2">Visit Us</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Bhosale And Co<br />
                    Vasai East, Palghar,<br />
                    Maharashtra 401210
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium mb-2">Call Us</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    +91 98765 43210<br />
                    +91 91234 56789
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium mb-2">Email Us</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    contact@bhosaleandco.in<br />
                    info@bhosaleandco.in
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Map Section */}
        <motion.div {...fadeIn} className="h-[32rem] w-full relative rounded-[2.5rem] overflow-hidden border border-black/5 mb-40">
          <iframe
            src="https://maps.google.com/maps?q=Bhosale%20And%20Co,%20Vasai%20East,%20Palghar,%20Maharashtra%20401210&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhosale And Co Location"
            className="absolute inset-0 z-0"
          ></iframe>

          {/* Business Hours Overlay */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg z-10 w-72 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-medium text-lg">Business Hours</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-3 font-light">
              <li className="flex justify-between items-center">
                <span>Mon - Fri</span> 
                <span className="font-medium text-primary">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Saturday</span> 
                <span className="font-medium text-primary">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between items-center pt-3 mt-1 border-t border-black/5">
                <span>Sunday</span> 
                <span className="font-medium text-red-500">Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-500 font-light">
              Find quick answers to common queries about our services and processes.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-sm">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
