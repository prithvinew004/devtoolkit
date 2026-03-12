'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function RemoveDuplicates() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)

  const removeDuplicates = () => {
    const lines = input.split('\n')
    const unique = caseSensitive 
      ? [...new Set(lines)]
      : [...new Set(lines.map(l => l.toLowerCase()))].map(l => 
          lines.find(line => line.toLowerCase() === l) || l
        )
    setOutput(unique.join('\n'))
  }

  const faq = [
    { question: 'How does duplicate removal work?', answer: 'The tool compares each line and removes exact duplicates, keeping only unique lines.' },
    { question: 'What is case-sensitive mode?', answer: 'When enabled, "Hello" and "hello" are treated as different lines.' },
  ]

  return (
    <ToolLayout title="Remove Duplicate Lines" description="Remove duplicate lines from text" faq={faq} currentToolSlug="remove-duplicates">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text (one item per line)..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
            />
            Case Sensitive
          </label>
        </div>
        
        <div className="flex gap-4">
          <button onClick={removeDuplicates} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Remove Duplicates
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
