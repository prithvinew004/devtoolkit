'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tool } from '@/data/tools'

export default function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Link href={`/tools/${tool.slug}`}>
        <div className="glass rounded-2xl p-6 h-full hover:shadow-xl transition-shadow cursor-pointer">
          <div className="text-4xl mb-4">{tool.icon}</div>
          <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
