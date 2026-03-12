'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
      saveToRecent('json-formatter')
    } catch (e) {
      setError('Invalid JSON')
      setOutput('')
    }
  }

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
      saveToRecent('json-formatter')
    } catch (e) {
      setError('Invalid JSON')
      setOutput('')
    }
  }

  const saveToRecent = (slug: string) => {
    const recent = JSON.parse(localStorage.getItem('recentTools') || '[]')
    const updated = [slug, ...recent.filter((s: string) => s !== slug)].slice(0, 10)
    localStorage.setItem('recentTools', JSON.stringify(updated))
  }

  const faq = [
    { question: 'What is JSON?', answer: 'JSON (JavaScript Object Notation) is a lightweight data interchange format.' },
    { question: 'How do I format JSON?', answer: 'Paste your JSON in the input field and click Format to beautify it.' },
    { question: 'Is my data secure?', answer: 'Yes, all processing happens in your browser. No data is sent to any server.' },
  ]

  return (
    <ToolLayout 
      title="JSON Formatter" 
      description="Format, validate, and minify JSON data instantly" 
      faq={faq}
      currentToolSlug="json-formatter"
    >
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="flex gap-4">
          <button onClick={formatJson} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Format
          </button>
          <button onClick={minifyJson} className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Minify
          </button>
          <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

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
