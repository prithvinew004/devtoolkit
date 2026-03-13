'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About DevToolkit</h1>
        
        <div className="glass rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              DevToolkit is a free online platform providing essential tools for developers, designers, and content creators. 
              Our mission is to make powerful utilities accessible to everyone, completely free of charge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We provide 30+ tools across 5 categories:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4">
                <h3 className="font-bold text-blue-500 mb-2">💻 Developer Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  JSON formatter, Base64 encoder, UUID generator, and more
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <h3 className="font-bold text-purple-500 mb-2">📝 Text Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Word counter, case converter, text sorter, and more
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <h3 className="font-bold text-green-500 mb-2">🔐 Security Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Password generator, hash generator, JWT decoder, and more
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <h3 className="font-bold text-orange-500 mb-2">🖼️ Image Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  QR code generator, image tools, and more
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose DevToolkit?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>100% Free:</strong>
                  <span className="text-gray-600 dark:text-gray-400"> All tools are completely free to use, no registration required</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Privacy First:</strong>
                  <span className="text-gray-600 dark:text-gray-400"> All processing happens in your browser, no data is sent to servers</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Fast & Reliable:</strong>
                  <span className="text-gray-600 dark:text-gray-400"> Instant results with no waiting time</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Mobile Friendly:</strong>
                  <span className="text-gray-600 dark:text-gray-400"> Works perfectly on all devices</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
            <p className="text-gray-600 dark:text-gray-400">
              DevToolkit is built with modern web technologies including Next.js 14, React, TypeScript, and Tailwind CSS. 
              We prioritize performance, accessibility, and user experience in everything we build.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions or suggestions? We'd love to hear from you! Visit our{' '}
              <Link href="/contact" className="text-blue-500 hover:underline">
                contact page
              </Link>{' '}
              to get in touch.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
