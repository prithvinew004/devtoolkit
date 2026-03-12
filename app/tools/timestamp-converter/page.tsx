'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState(Date.now())
  const [dateString, setDateString] = useState('')

  const convertToDate = () => {
    const date = new Date(Number(timestamp))
    setDateString(date.toString())
  }

  const convertToTimestamp = () => {
    const date = new Date(dateString)
    setTimestamp(date.getTime())
  }

  const useNow = () => {
    setTimestamp(Date.now())
  }

  const faq = [
    { question: 'What is a Unix timestamp?', answer: 'A Unix timestamp is the number of seconds or milliseconds since January 1, 1970 UTC.' },
    { question: 'What format does this use?', answer: 'This tool uses milliseconds since Unix epoch.' },
  ]

  return (
    <ToolLayout title="Timestamp Converter" description="Convert between Unix timestamps and dates" faq={faq}>
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Unix Timestamp (milliseconds)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(Number(e.target.value))}
              className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={useNow} className="px-4 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Now
            </button>
            <button onClick={convertToDate} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Convert
            </button>
          </div>
        </div>

        {dateString && (
          <div className="p-4 glass rounded-lg">
            <div className="font-semibold mb-2">Result:</div>
            <div className="font-mono">{dateString}</div>
          </div>
        )}

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <label className="block mb-2 font-semibold">Date String</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
              placeholder="e.g., 2024-01-01 or Mon Jan 01 2024"
              className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={convertToTimestamp} className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Convert
            </button>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
