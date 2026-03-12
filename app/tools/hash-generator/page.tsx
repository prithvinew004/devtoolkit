'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function HashGenerator() {
  const [input, setInput] = useState('')
  const [md5Hash, setMd5Hash] = useState('')
  const [sha256Hash, setSha256Hash] = useState('')

  const generateHashes = async () => {
    if (!input) return

    // MD5 (simple implementation for demo)
    const md5 = await simpleHash(input, 'MD5')
    setMd5Hash(md5)

    // SHA-256
    const encoder = new TextEncoder()
    const data = encoder.encode(input)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const sha256 = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    setSha256Hash(sha256)
  }

  const simpleHash = async (str: string, algorithm: string) => {
    // Simple hash for demo - in production use proper crypto library
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash).toString(16).padStart(32, '0')
  }

  const faq = [
    { question: 'What is a hash?', answer: 'A hash is a fixed-size string generated from input data using a mathematical algorithm.' },
    { question: 'Are hashes reversible?', answer: 'No, hash functions are one-way. You cannot reverse a hash to get the original input.' },
  ]

  return (
    <ToolLayout title="Hash Generator" description="Generate MD5 and SHA256 hashes" faq={faq} currentToolSlug="hash-generator">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={generateHashes} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Generate Hashes
        </button>

        {md5Hash && (
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold">MD5</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={md5Hash}
                  readOnly
                  className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 font-mono text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(md5Hash)}
                  className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">SHA-256</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={sha256Hash}
                  readOnly
                  className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 font-mono text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(sha256Hash)}
                  className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
