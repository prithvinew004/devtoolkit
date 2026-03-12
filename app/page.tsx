'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import CategoryCard from '@/components/CategoryCard'
import SearchBar from '@/components/SearchBar'
import ToolGrid from '@/components/ToolGrid'
import AdSenseAd from '@/components/AdSenseAd'
import { categories, tools, getPopularTools } from '@/data/tools'

export default function Home() {
  const [search, setSearch] = useState('')
  const [recentTools, setRecentTools] = useState<string[]>([])

  useEffect(() => {
    const recent = localStorage.getItem('recentTools')
    if (recent) setRecentTools(JSON.parse(recent))
  }, [])

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
  )

  const popularTools = getPopularTools()
  const recentToolsData = tools.filter(t => recentTools.includes(t.slug)).slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Developer Toolkit
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Free online tools for developers and creators
        </p>

        {/* Search Bar */}
        <SearchBar onSearch={setSearch} />
      </motion.div>

      {/* Ad Placeholder */}
      <div className="max-w-4xl mx-auto mb-12">
        <AdSenseAd />
      </div>

      {search ? (
        /* Search Results */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8">Search Results</h2>
          <ToolGrid tools={filteredTools} emptyMessage="No tools found matching your search" />
        </motion.div>
      ) : (
        <>
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={category.slug} category={category} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Popular Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Popular Tools</h2>
            <ToolGrid tools={popularTools} />
          </motion.div>

          {/* Recently Used */}
          {recentToolsData.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8">Recently Used</h2>
              <ToolGrid tools={recentToolsData} />
            </motion.div>
          )}
        </>
      )}

      {/* Ad Placeholder */}
      <div className="max-w-4xl mx-auto mt-12">
        <AdSenseAd />
      </div>
    </div>
  )
}
