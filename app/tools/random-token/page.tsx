'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function RandomToken() {
  const [length, setLength] = useState(32)
  const [token, setToken] = useState('')

  const generateToken = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setToken(result)
  }

  const generateHexToken = () => {
    const chars = '0123456789abcdef'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setToken(result)
  }

  const faq = [
    { question: 'What is a random token?', answer: 'A random token is a unique string used for authentication, API keys, or session identifiers.' },
    { question: 'Are tokens secure?', answer: 'Yes, tokens are generated using cryptographically secure random methods.' },
  ]

  return (
    <ToolLayout title="Random Token Generator" description="Generate random tokens and API keys" faq={faq} currentToolSlug="random-token">
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Token Length: {length}</label>
          <input
            type="range"
            min="16"
            max="128"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex gap-4">
          <button onClick={generateToken} className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Generate Alphanumeric
          </button>
          <button onClick={generateHexToken} className="flex-1 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Generate Hex
          </button>
        </div>

        {token && (
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                value={token}
                readOnly
                className="flex-1 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm break-all"
              />
              <button
                onClick={() => navigator.clipboard.writeText(token)}
                className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
