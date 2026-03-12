'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function JwtDecoder() {
  const [token, setToken] = useState('')
  const [header, setHeader] = useState('')
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')

  const decodeJwt = () => {
    try {
      const parts = token.split('.')
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format')
      }

      const decodedHeader = JSON.parse(atob(parts[0]))
      const decodedPayload = JSON.parse(atob(parts[1]))

      setHeader(JSON.stringify(decodedHeader, null, 2))
      setPayload(JSON.stringify(decodedPayload, null, 2))
      setError('')
    } catch (e) {
      setError('Invalid JWT token')
      setHeader('')
      setPayload('')
    }
  }

  const faq = [
    { question: 'What is JWT?', answer: 'JWT (JSON Web Token) is a compact token format used for securely transmitting information between parties.' },
    { question: 'Is decoding safe?', answer: 'Yes, decoding happens in your browser. No data is sent to any server.' },
  ]

  return (
    <ToolLayout title="JWT Decoder" description="Decode and inspect JWT tokens" faq={faq} currentToolSlug="jwt-decoder">
      <div className="space-y-4">
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your JWT token here..."
          className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />

        <button onClick={decodeJwt} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Decode JWT
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {header && (
          <div>
            <label className="block mb-2 font-semibold">Header</label>
            <textarea
              value={header}
              readOnly
              className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm"
            />
          </div>
        )}

        {payload && (
          <div>
            <label className="block mb-2 font-semibold">Payload</label>
            <textarea
              value={payload}
              readOnly
              className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
