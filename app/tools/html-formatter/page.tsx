'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function HtmlFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const formatHtml = () => {
    let formatted = input
    formatted = formatted.replace(/>\s*</g, '>\n<')
    const lines = formatted.split('\n')
    let indent = 0
    const result = lines.map(line => {
      const trimmed = line.trim()
      if (trimmed.startsWith('</')) indent = Math.max(0, indent - 1)
      const indented = '  '.repeat(indent) + trimmed
      if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) indent++
      return indented
    }).join('\n')
    setOutput(result)
  }

  const faq = [
    { question: 'What does HTML formatting do?', answer: 'It beautifies HTML code by adding proper indentation and line breaks for better readability.' },
    { question: 'Will it change my HTML structure?', answer: 'No, it only changes whitespace and formatting, not the actual HTML structure.' },
  ]

  return (
    <ToolLayout title="HTML Formatter" description="Format and beautify HTML code" faq={faq} currentToolSlug="html-formatter">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your HTML here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
        
        <div className="flex gap-4">
          <button onClick={formatHtml} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Format HTML
          </button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {output && (
          <textarea
            value={output}
            readOnly
            className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm"
          />
        )}
      </div>
    </ToolLayout>
  )
}
