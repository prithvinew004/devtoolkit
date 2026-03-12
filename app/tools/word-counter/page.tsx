'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function WordCounter() {
  const [text, setText] = useState('')

  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, '').length
  const lines = text.split('\n').length

  const faq = [
    { question: 'How accurate is the word count?', answer: 'The tool counts words separated by spaces, matching most word processors.' },
    { question: 'Does it count special characters?', answer: 'Yes, all characters including special characters are counted.' },
  ]

  return (
    <ToolLayout title="Word Counter" description="Count words, characters, and lines in your text" faq={faq}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-64 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-500">{words}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Words</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-500">{characters}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-500">{charactersNoSpaces}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">No Spaces</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-500">{lines}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Lines</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
