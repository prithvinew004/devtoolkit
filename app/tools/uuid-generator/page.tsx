'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ToolLayout from '@/components/ToolLayout'

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState(1)

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => uuidv4())
    setUuids(newUuids)
  }

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'))
  }

  const faq = [
    { question: 'What is a UUID?', answer: 'UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information.' },
    { question: 'Are UUIDs truly unique?', answer: 'UUIDs have an extremely low probability of collision, making them practically unique.' },
  ]

  return (
    <ToolLayout title="UUID Generator" description="Generate unique identifiers (UUID v4)" faq={faq}>
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <label>Count:</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={generate} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Generate
          </button>
          {uuids.length > 0 && (
            <button onClick={copyAll} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Copy All
            </button>
          )}
        </div>

        {uuids.length > 0 && (
          <div className="space-y-2">
            {uuids.map((uuid, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={uuid}
                  readOnly
                  className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 font-mono text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(uuid)}
                  className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
