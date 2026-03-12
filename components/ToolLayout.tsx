'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import { tools } from '@/data/tools'

interface ToolLayoutProps {
  title: string
  description: string
  children: ReactNode
  faq?: { question: string; answer: string }[]
  currentToolSlug?: string
}

export default function ToolLayout({ title, description, children, faq, currentToolSlug }: ToolLayoutProps) {
  const relatedTools = currentToolSlug 
    ? tools.filter(t => t.slug !== currentToolSlug).slice(0, 4)
    : []

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{description}</p>

        {/* Ad Placeholder */}
        <div className="mb-8 p-4 glass rounded-xl text-center text-gray-500">
          [AdSense Ad Placeholder - 728x90]
        </div>

        {/* Tool Interface */}
        <div className="glass rounded-2xl p-8 mb-12">
          {children}
        </div>

        {/* Tool Description Section */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Tool</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {description} This free online tool helps you work efficiently with instant results.
          </p>
        </div>

        {/* FAQ Section */}
        {faq && faq.length > 0 && (
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                  <div className="glass rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer text-center">
                    <div className="text-3xl mb-2">{tool.icon}</div>
                    <div className="text-sm font-semibold">{tool.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Ad Placeholder */}
        <div className="mt-8 p-4 glass rounded-xl text-center text-gray-500">
          [AdSense Ad Placeholder - 728x90]
        </div>
      </motion.div>
    </div>
  )
}
