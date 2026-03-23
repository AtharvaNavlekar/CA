import { motion } from 'motion/react';

export default function Privacy() {
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
          Privacy Policy
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
          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-6">
            At Bhosale And Co, we collect information that you provide directly to us when you use our services, consult with our advisors, or communicate with us. This may include personal information such as your name, email address, phone number, financial information, and any other details you choose to provide.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve our financial consulting services. This includes communicating with you, responding to your inquiries, providing tailored financial advice, and ensuring compliance with applicable legal and regulatory requirements.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">3. AI Assistant and Data Processing</h2>
          <p className="mb-6">
            Our website utilizes Google's Gemini AI to power our interactive assistant features. When you interact with our AI assistant, your chat messages are processed by Google's servers, which may be located in the United States. We do not use your personal data to train these AI models. By using our AI features, you consent to this data processing. Please do not share sensitive personal or financial information (like bank account numbers or passwords) with the AI assistant.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">4. Information Sharing and Disclosure</h2>
          <p className="mb-6">
            We do not sell or rent your personal information to third parties. We may share your information with trusted service providers (such as Google Cloud for hosting and AI services) who assist us in operating our business, provided that those parties agree to keep this information confidential. We may also disclose information when required by law or to protect our rights and safety.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">5. Data Security & DPDP Act Compliance</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect the security of your personal information in accordance with India's Digital Personal Data Protection (DPDP) Act, 2023. We collect only the data necessary for our services and retain it only as long as required.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">6. Your Rights</h2>
          <p className="mb-6">
            Under the DPDP Act, you have the right to access, correct, or delete your personal information held by us. You also have the right to withdraw your consent for data processing at any time. If you wish to exercise these rights or have any questions about our privacy practices, please contact our Data Protection Officer at contact@bhosaleandco.in.
          </p>

          <h2 className="text-2xl font-display font-medium text-primary mt-12 mb-6">7. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
