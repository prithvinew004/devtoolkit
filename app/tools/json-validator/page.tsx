'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function JsonValidator() {
  const [input, setInput] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState('')

  const validate = () => {
    try {
      JSON.parse(input)
      setIsValid(true)
      setError('')
    } catch (e: any) {
      setIsValid(false)
      setError(e.message)
    }
  }

  const faq = [
    { question: 'What is JSON validation?', answer: 'JSON validation checks if your JSON syntax is correct and follows proper formatting rules.' },
    { question: 'Why is my JSON invalid?', answer: 'Common issues include missing commas, quotes, or brackets. Check the error message for details.' },
  ]

  return (
    <ToolLayout title="JSON Validator" description="Validate JSON syntax instantly" faq={faq} currentToolSlug="json-validator">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button onClick={validate} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Validate JSON
        </button>

        {isValid !== null && (
          <div className={`p-4 rounded-lg ${isValid ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
            {isValid ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Valid JSON!</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✗</span>
                  <span className="font-semibold">Invalid JSON</span>
                </div>
                <p className="text-sm">{error}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
