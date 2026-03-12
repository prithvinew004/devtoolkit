'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function Base64Encoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const encode = () => {
    setOutput(btoa(input))
  }

  const decode = () => {
    try {
      setOutput(atob(input))
    } catch {
      setOutput('Invalid Base64 string')
    }
  }

  const faq = [
    { question: 'What is Base64?', answer: 'Base64 is an encoding scheme that converts binary data to ASCII text format.' },
    { question: 'When should I use Base64?', answer: 'Use Base64 for encoding binary data in text-based formats like JSON or XML.' },
  ]

  return (
    <ToolLayout title="Base64 Encoder/Decoder" description="Encode and decode Base64 strings" faq={faq}>
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode or Base64 to decode..."
          className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4">
          <button onClick={encode} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Encode
          </button>
          <button onClick={decode} className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Decode
          </button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {output && (
          <textarea
            value={output}
            readOnly
            className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none"
          />
        )}
      </div>
    </ToolLayout>
  )
}
