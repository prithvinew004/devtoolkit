'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function CaseConverter() {
  const [text, setText] = useState('')

  const convert = (type: string) => {
    switch (type) {
      case 'upper':
        setText(text.toUpperCase())
        break
      case 'lower':
        setText(text.toLowerCase())
        break
      case 'title':
        setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()))
        break
      case 'sentence':
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
        break
      case 'camel':
        setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
          index === 0 ? word.toLowerCase() : word.toUpperCase()
        ).replace(/\s+/g, ''))
        break
      case 'snake':
        setText(text.toLowerCase().replace(/\s+/g, '_'))
        break
      case 'kebab':
        setText(text.toLowerCase().replace(/\s+/g, '-'))
        break
    }
  }

  const faq = [
    { question: 'What case formats are supported?', answer: 'Upper, lower, title, sentence, camelCase, snake_case, and kebab-case.' },
    { question: 'Can I convert code variable names?', answer: 'Yes, this tool works great for converting between different naming conventions.' },
  ]

  return (
    <ToolLayout title="Case Converter" description="Convert text between different case formats" faq={faq}>
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button onClick={() => convert('upper')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            UPPERCASE
          </button>
          <button onClick={() => convert('lower')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            lowercase
          </button>
          <button onClick={() => convert('title')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Title Case
          </button>
          <button onClick={() => convert('sentence')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Sentence case
          </button>
          <button onClick={() => convert('camel')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            camelCase
          </button>
          <button onClick={() => convert('snake')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            snake_case
          </button>
          <button onClick={() => convert('kebab')} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            kebab-case
          </button>
          <button onClick={() => setText('')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Clear
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
