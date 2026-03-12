'use client'

import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import ToolGrid from '@/components/ToolGrid'
import { getCategoryBySlug, getToolsByCategory } from '@/data/tools'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  const tools = getToolsByCategory(params.slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {category.description}
          </p>
        </div>

        {/* Ad Placeholder */}
        <div className="max-w-4xl mx-auto mb-12 p-4 glass rounded-xl text-center text-gray-500">
          [AdSense Ad Placeholder - 728x90]
        </div>

        {/* Tools Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Available Tools</h2>
          <ToolGrid tools={tools} emptyMessage="No tools available in this category yet" />
        </div>

        {/* Ad Placeholder */}
        <div className="max-w-4xl mx-auto mt-12 p-4 glass rounded-xl text-center text-gray-500">
          [AdSense Ad Placeholder - 728x90]
        </div>
      </motion.div>
    </div>
  )
}
