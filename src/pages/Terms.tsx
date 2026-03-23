import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
        >
          Terms of Service
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-500 font-light leading-relaxed mb-16"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed"
        >
          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing or using the services provided by Bhosale And Co, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">2. Description of Services</h2>
          <p className="mb-6">
            Bhosale And Co provides financial consulting, advisory, and related services. The specific scope of services will be agreed upon in writing between the firm and the client. Our advice is based on the information provided by you and current market conditions.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">3. Client Responsibilities</h2>
          <p className="mb-6">
            You agree to provide accurate, current, and complete information necessary for us to perform our services. You understand that our advice relies heavily on the accuracy of the information you provide, and we are not liable for any consequences arising from inaccurate or incomplete information.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">4. No Guarantee of Results</h2>
          <p className="mb-6">
            While we strive to provide the best possible financial guidance, we do not guarantee specific financial outcomes or investment returns. Financial markets are inherently unpredictable, and all investments carry risk. Past performance is not indicative of future results.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">5. Confidentiality</h2>
          <p className="mb-6">
            We maintain strict confidentiality regarding all client information and financial data, in accordance with our Privacy Policy and applicable laws. We will not disclose your confidential information without your consent, except as required by law.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">6. Limitation of Liability</h2>
          <p className="mb-6">
            To the maximum extent permitted by law, Bhosale And Co shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">7. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
