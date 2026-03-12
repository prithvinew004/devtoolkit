'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function JavaScriptMinifier() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const minifyJs = () => {
    let minified = input
    minified = minified.replace(/\/\*[\s\S]*?\*\//g, '')
    minified = minified.replace(/\/\/.*/g, '')
    minified = minified.replace(/\s+/g, ' ')
    minified = minified.replace(/\s*{\s*/g, '{')
    minified = minified.replace(/\s*}\s*/g, '}')
    minified = minified.replace(/\s*\(\s*/g, '(')
    minified = minified.replace(/\s*\)\s*/g, ')')
    minified = minified.replace(/\s*;\s*/g, ';')
    minified = minified.replace(/\s*,\s*/g, ',')
    minified = minified.trim()
    setOutput(minified)
  }

  const faq = [
    { question: 'What is JavaScript minification?', answer: 'Minification removes whitespace, comments, and unnecessary characters to reduce file size.' },
    { question: 'Should I minify for production?', answer: 'Yes, minified JavaScript loads faster and improves website performance.' },
  ]

  return (
    <ToolLayout title="JavaScript Minifier" description="Minify JavaScript code to reduce file size" faq={faq} currentToolSlug="javascript-minifier">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JavaScript here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
        
        <div className="flex gap-4">
          <button onClick={minifyJs} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Minify JavaScript
          </button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Reduced by {Math.round((1 - output.length / input.length) * 100)}%
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="px-4 py-1 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                Copy
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
