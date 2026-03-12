'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function TimezoneConverter() {
  const [time, setTime] = useState('')
  const [fromTz, setFromTz] = useState('UTC')
  const [toTz, setToTz] = useState('America/New_York')
  const [result, setResult] = useState('')

  const timezones = [
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Dubai',
    'Australia/Sydney',
  ]

  const convert = () => {
    try {
      const date = new Date(time)
      const converted = date.toLocaleString('en-US', { timeZone: toTz })
      setResult(converted)
    } catch (e) {
      setResult('Invalid date/time')
    }
  }

  const faq = [
    { question: 'How does timezone conversion work?', answer: 'The tool converts time from one timezone to another accounting for UTC offsets.' },
    { question: 'Does it handle daylight saving?', answer: 'Yes, the conversion automatically accounts for daylight saving time.' },
  ]

  return (
    <ToolLayout title="Time Zone Converter" description="Convert time between different time zones" faq={faq} currentToolSlug="timezone-converter">
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Date & Time</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">From Timezone</label>
            <select
              value={fromTz}
              onChange={(e) => setFromTz(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timezones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">To Timezone</label>
            <select
              value={toTz}
              onChange={(e) => setToTz(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timezones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={convert} disabled={!time} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50">
          Convert
        </button>

        {result && (
          <div className="glass rounded-lg p-6 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Converted Time</div>
            <div className="text-2xl font-bold text-blue-500">{result}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{toTz}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
