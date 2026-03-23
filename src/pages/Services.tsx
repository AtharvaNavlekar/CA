import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, PiggyBank, Compass, FileText, Umbrella, Briefcase } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Services() {
  const services = [
    {
      id: 'loans',
      title: 'Loan Assistance',
      icon: Home,
      desc: 'Help clients identify the right loan product (home, personal, business, or vehicle loan), prepare documentation, and liaise with banks or NBFCs on their behalf.',
      benefit: 'Saves time, reduces rejections, ensures best rates.',
      clientProfile: 'Individuals seeking home ownership or MSMEs needing capital.',
      useCases: ['First-time homebuyers', 'Business expansion capital', 'Debt consolidation']
    },
    {
      id: 'investments',
      title: 'Investment Advisory',
      icon: PiggyBank,
      desc: 'Guidance on mutual funds, SIPs, fixed deposits, government schemes (PPF, NSC), and other savings instruments suited to each client\'s risk profile and goals.',
      benefit: 'Helps clients grow wealth safely and systematically.',
      clientProfile: 'Salaried professionals, retirees, and young investors.',
      useCases: ['Retirement corpus building', 'Tax-saving investments (ELSS)', 'Child education funds']
    },
    {
      id: 'planning',
      title: 'Financial Planning',
      icon: Compass,
      desc: 'End-to-end personal or business financial plans covering short-term goals, emergency funds, tax-saving investments, and retirement planning.',
      benefit: 'Provides clients with a clear roadmap for their money.',
      clientProfile: 'Families and individuals seeking long-term financial stability.',
      useCases: ['Comprehensive wealth mapping', 'Estate planning basics', 'Emergency fund sizing']
    },
    {
      id: 'tax',
      title: 'Tax & Compliance',
      icon: FileText,
      desc: 'Assistance with Income Tax Return (ITR) filing, GST registration, and annual compliance for individuals and small businesses.',
      benefit: 'Ensures clients stay legally compliant and avoid penalties.',
      clientProfile: 'Freelancers, small business owners, and high-net-worth individuals.',
      useCases: ['Annual ITR filing', 'Monthly GST returns', 'Tax notice resolution']
    },
    {
      id: 'insurance',
      title: 'Insurance Advisory',
      icon: Umbrella,
      desc: 'Guidance on life, health, and general insurance products — matching the right coverage to client needs and budget.',
      benefit: 'Protects clients and their families from financial shocks.',
      clientProfile: 'Breadwinners, business owners, and families.',
      useCases: ['Term life insurance selection', 'Comprehensive family health covers', 'Keyman insurance for businesses']
    },
    {
      id: 'business',
      title: 'Business Finance',
      icon: Briefcase,
      desc: 'Helping MSMEs with working capital management, project finance, government scheme eligibility (MUDRA, CGTMSE), and MSME registration.',
      benefit: 'Supports local businesses in accessing formal credit.',
      clientProfile: 'Startups, local manufacturers, and retail business owners.',
      useCases: ['Working capital optimization', 'MUDRA loan applications', 'Udyam registration']
    }
  ];

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
            Expertise tailored <br />
            <span className="text-gray-400">to your goals.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light leading-relaxed"
          >
            Comprehensive financial solutions designed to simplify your life and accelerate your growth.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          {services.map((service, index) => (
            <motion.div 
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              key={service.id} 
              id={service.id}
              className="bg-white p-12 rounded-[2.5rem] border border-black/5 hover:border-black/10 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="text-gray-200 font-display text-3xl">0{index + 1}</div>
              </div>
              <h3 className="text-4xl font-display font-medium mb-6">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10 flex-grow text-lg">
                {service.desc}
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl mb-10">
                <p className="text-base text-gray-600 mb-5">
                  <span className="font-medium text-primary block mb-2">Why it matters:</span>
                  {service.benefit}
                </p>
                <div className="h-px w-full bg-black/5 my-5"></div>
                <p className="text-sm text-gray-600 mb-5">
                  <span className="font-medium text-primary block mb-2">Typical Client:</span>
                  {service.clientProfile}
                </p>
                <div>
                  <span className="font-medium text-primary block mb-2 text-sm">Use Cases:</span>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                    {service.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 font-medium text-base hover:text-gray-500 transition-colors mt-auto"
              >
                Enquire about this <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
