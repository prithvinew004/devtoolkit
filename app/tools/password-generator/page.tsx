'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const generatePassword = () => {
    let charset = ''
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (numbers) charset += '0123456789'
    if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let result = ''
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  const faq = [
    { question: 'How secure are generated passwords?', answer: 'Passwords are generated using cryptographically secure random methods.' },
    { question: 'Are passwords stored?', answer: 'No, all passwords are generated locally in your browser and never stored.' },
  ]

  return (
    <ToolLayout title="Password Generator" description="Generate secure random passwords" faq={faq}>
      <div className="space-y-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Generated password will appear here"
            className="flex-1 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono"
          />
          <button onClick={copyToClipboard} disabled={!password} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50">
            Copy
          </button>
        </div>

        <div>
          <label className="block mb-2">Length: {length}</label>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
            Uppercase (A-Z)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
            Lowercase (a-z)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
            Numbers (0-9)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
            Symbols (!@#$...)
          </label>
        </div>

        <button onClick={generatePassword} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Generate Password
        </button>
      </div>
    </ToolLayout>
  )
}
