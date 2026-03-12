'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function TextCompare() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [differences, setDifferences] = useState<string[]>([])

  const compare = () => {
    const lines1 = text1.split('\n')
    const lines2 = text2.split('\n')
    const diffs: string[] = []

    const maxLines = Math.max(lines1.length, lines2.length)
    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || ''
      const line2 = lines2[i] || ''
      if (line1 !== line2) {
        diffs.push(`Line ${i + 1}: "${line1}" ≠ "${line2}"`)
      }
    }

    setDifferences(diffs)
  }

  const faq = [
    { question: 'How does text comparison work?', answer: 'The tool compares texts line by line and highlights differences.' },
    { question: 'Is it case-sensitive?', answer: 'Yes, the comparison is case-sensitive by default.' },
  ]

  return (
    <ToolLayout title="Text Compare" description="Compare two texts and find differences" faq={faq} currentToolSlug="text-compare">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Text 1</label>
            <textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter first text..."
              className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Text 2</label>
            <textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter second text..."
              className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button onClick={compare} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Compare Texts
        </button>

        {differences.length > 0 ? (
          <div className="glass rounded-lg p-4">
            <h3 className="font-semibold mb-4">Differences Found: {differences.length}</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {differences.map((diff, i) => (
                <div key={i} className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded text-sm">
                  {diff}
                </div>
              ))}
            </div>
          </div>
        ) : differences.length === 0 && text1 && text2 ? (
          <div className="glass rounded-lg p-4 text-center text-green-600 dark:text-green-400">
            ✓ Texts are identical!
          </div>
        ) : null}
      </div>
    </ToolLayout>
  )
}
