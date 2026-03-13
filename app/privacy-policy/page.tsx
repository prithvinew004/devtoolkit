'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="glass rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to DevToolkit. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we handle your data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              We collect minimal information to improve our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Usage data through Google Analytics (page views, session duration)</li>
              <li>Browser type and device information</li>
              <li>Recently used tools (stored locally in your browser)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Improve our website and tools</li>
              <li>Understand user preferences</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use cookies and similar tracking technologies to track activity on our website. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Google Analytics - for website analytics</li>
              <li>Google AdSense - for displaying advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-400">
              All tools process data locally in your browser. We do not store or transmit your tool input data to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You have the right to access, update, or delete your information. Since we collect minimal data, 
              you can clear your browser data to remove any locally stored information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
