'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Category } from '@/data/tools'

const colorMap: { [key: string]: string } = {
  'from-blue-500 to-cyan-500': 'text-blue-500',
  'from-purple-500 to-pink-500': 'text-purple-500',
  'from-green-500 to-emerald-500': 'text-green-500',
  'from-orange-500 to-red-500': 'text-orange-500',
  'from-yellow-500 to-orange-500': 'text-yellow-500',
}

export default function CategoryCard({ category, index }: { category: Category; index: number }) {
  const textColor = colorMap[category.color] || 'text-blue-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Link href={`/category/${category.slug}`}>
        <div className="glass rounded-2xl p-8 h-full hover:shadow-xl transition-shadow cursor-pointer">
          <div className="text-5xl mb-4">{category.icon}</div>
          <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>
            {category.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
