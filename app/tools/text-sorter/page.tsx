'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function TextSorter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const sortAscending = () => {
    const lines = input.split('\n').filter(line => line.trim())
    const sorted = lines.sort((a, b) => a.localeCompare(b))
    setOutput(sorted.join('\n'))
  }

  const sortDescending = () => {
    const lines = input.split('\n').filter(line => line.trim())
    const sorted = lines.sort((a, b) => b.localeCompare(a))
    setOutput(sorted.join('\n'))
  }

  const sortByLength = () => {
    const lines = input.split('\n').filter(line => line.trim())
    const sorted = lines.sort((a, b) => a.length - b.length)
    setOutput(sorted.join('\n'))
  }

  const faq = [
    { question: 'How does sorting work?', answer: 'Text is sorted line by line alphabetically or by length.' },
    { question: 'Is sorting case-sensitive?', answer: 'The alphabetical sort is case-insensitive by default.' },
  ]

  return (
    <ToolLayout title="Text Sorter" description="Sort text lines alphabetically or by length" faq={faq} currentToolSlug="text-sorter">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text (one item per line)..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 flex-wrap">
          <button onClick={sortAscending} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Sort A-Z
          </button>
          <button onClick={sortDescending} className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Sort Z-A
          </button>
          <button onClick={sortByLength} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Sort by Length
          </button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {output && (
          <textarea
            value={output}
            readOnly
            className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none"
          />
        )}
      </div>
    </ToolLayout>
  )
}
