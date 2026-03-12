'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function RegexTester() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [testString, setTestString] = useState('')
  const [matches, setMatches] = useState<string[]>([])
  const [error, setError] = useState('')

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags)
      const found = testString.match(regex)
      setMatches(found || [])
      setError('')
    } catch (e) {
      setError('Invalid regex pattern')
      setMatches([])
    }
  }

  const faq = [
    { question: 'What is regex?', answer: 'Regular expressions (regex) are patterns used to match character combinations in strings.' },
    { question: 'What flags can I use?', answer: 'Common flags: g (global), i (case-insensitive), m (multiline).' },
  ]

  return (
    <ToolLayout title="Regex Tester" description="Test regular expressions online" faq={faq} currentToolSlug="regex-tester">
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Regex Pattern</label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="e.g., \d{3}-\d{3}-\d{4}"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Flags</label>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="g, i, m"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Test String</label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter text to test..."
            className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button onClick={testRegex} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Test Regex
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {matches.length > 0 && (
          <div className="glass rounded-lg p-4">
            <h3 className="font-semibold mb-2">Matches ({matches.length}):</h3>
            <div className="space-y-2">
              {matches.map((match, i) => (
                <div key={i} className="p-2 bg-green-100 dark:bg-green-900 rounded font-mono text-sm">
                  {match}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
