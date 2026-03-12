'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { categories } from '@/data/tools'
import { useState } from 'react'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [showCategories, setShowCategories] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          DevToolkit
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          
          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="hover:text-blue-500 transition-colors"
            >
              Categories ▾
            </button>
            
            {showCategories && (
              <div className="absolute top-full right-0 mt-2 w-64 glass rounded-lg shadow-xl p-4 space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setShowCategories(false)}
                    className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
