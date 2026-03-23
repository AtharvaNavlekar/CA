import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const featuredPost = {
  id: 1,
  title: "Navigating the New Tax Regime: What MSMEs Need to Know in 2026",
  excerpt: "The recent changes to the tax structure present both challenges and opportunities for small and medium enterprises. Here is a comprehensive breakdown of how to optimize your tax strategy this financial year.",
  metaDescription: "A comprehensive guide for MSMEs on navigating the new 2026 tax regime, optimizing tax strategies, and understanding compliance changes.",
  keywords: ["MSME tax 2026", "new tax regime", "tax strategy", "business compliance", "India tax updates"],
  category: "Tax & Compliance",
  date: "March 15, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
};

const posts = [
  {
    id: 2,
    title: "5 Common Mistakes to Avoid When Applying for a Business Loan",
    excerpt: "Securing capital is crucial for growth, but many businesses stumble during the application process. Learn how to prepare a foolproof loan application.",
    metaDescription: "Learn the top 5 common mistakes businesses make when applying for loans and how to prepare a foolproof business loan application.",
    keywords: ["business loan", "loan application", "business finance", "securing capital", "SME loans"],
    category: "Business Finance",
    date: "March 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why SIPs Are Still Your Best Bet for Long-Term Wealth Creation",
    excerpt: "Market volatility can be intimidating, but Systematic Investment Plans offer a disciplined approach to building wealth over time.",
    metaDescription: "Discover why Systematic Investment Plans (SIPs) remain the best strategy for navigating market volatility and achieving long-term wealth creation.",
    keywords: ["SIP", "mutual funds", "wealth creation", "long-term investment", "market volatility"],
    category: "Investments",
    date: "February 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Understanding Term Life vs. Whole Life Insurance",
    excerpt: "Choosing the right life insurance policy is a critical financial decision. We break down the pros and cons of term and whole life insurance.",
    metaDescription: "A detailed comparison of term life versus whole life insurance to help you make the right financial decision for your family's future.",
    keywords: ["term life insurance", "whole life insurance", "insurance comparison", "financial protection", "life cover"],
    category: "Insurance",
    date: "February 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "How to Build an Emergency Fund That Actually Protects You",
    excerpt: "An emergency fund is your financial safety net. Discover the right way to calculate, build, and store your emergency savings.",
    metaDescription: "Step-by-step guide on how to calculate, build, and securely store an emergency fund to protect your personal finances from unexpected events.",
    keywords: ["emergency fund", "financial safety net", "savings", "personal finance", "financial planning"],
    category: "Financial Planning",
    date: "January 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "The Importance of Regular Portfolio Rebalancing",
    excerpt: "As markets shift, your asset allocation can drift from your original goals. Learn why and how to rebalance your investment portfolio.",
    metaDescription: "Understand the importance of portfolio rebalancing, how asset allocation drifts over time, and strategies to maintain your investment goals.",
    keywords: ["portfolio rebalancing", "asset allocation", "investment strategy", "risk management", "financial goals"],
    category: "Investments",
    date: "January 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "GST Compliance Checklist for E-commerce Sellers",
    excerpt: "Selling online comes with specific GST requirements. Ensure your e-commerce business is fully compliant with this handy checklist.",
    metaDescription: "A complete GST compliance checklist for e-commerce sellers in India to ensure smooth online business operations and avoid penalties.",
    keywords: ["GST compliance", "e-commerce GST", "online sellers tax", "GST checklist", "India business tax"],
    category: "Tax & Compliance",
    date: "December 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  }
];

export default function Blog() {
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
        <div className="max-w-3xl mb-20 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
          >
            Insights & <br />
            <span className="text-gray-400">Updates.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light leading-relaxed"
          >
            Expert financial analysis, company news, and market updates to help you make informed decisions.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div {...fadeIn} className="mb-24 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-6 group-hover:text-primary transition-colors leading-[1.1]">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-white transition-all w-fit mt-2">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-black/5 mb-24"></div>

        {/* Recent Posts Grid */}
        <div className="mb-16 flex justify-between items-end">
          <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight">Latest Articles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id} 
              {...fadeIn} 
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-primary shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>
              
              <h4 className="text-xl font-display font-medium tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              
              <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-black/5 text-primary font-medium text-sm group-hover:bg-primary group-hover:text-white transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.section {...fadeIn} className="relative bg-gray-50 rounded-[3rem] overflow-hidden px-8 py-20 md:px-20 text-center border border-black/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">
              Stay ahead of the curve.
            </h2>
            <p className="text-lg text-gray-500 font-light mb-10">
              Subscribe to our newsletter for the latest financial insights, tax updates, and investment strategies delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full bg-white border border-black/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}
