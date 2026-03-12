'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function SqlFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const formatSql = () => {
    let formatted = input
    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'ON', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING', 'LIMIT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP']
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
      formatted = formatted.replace(regex, `\n${keyword}`)
    })
    
    formatted = formatted.split('\n').map(line => line.trim()).filter(line => line).join('\n')
    setOutput(formatted)
  }

  const faq = [
    { question: 'What does SQL formatting do?', answer: 'It beautifies SQL queries by adding proper line breaks and indentation for better readability.' },
    { question: 'Does it work with all SQL dialects?', answer: 'Yes, it works with standard SQL syntax used across MySQL, PostgreSQL, and other databases.' },
  ]

  return (
    <ToolLayout title="SQL Formatter" description="Format and beautify SQL queries" faq={faq} currentToolSlug="sql-formatter">
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your SQL query here..."
          className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
        
        <div className="flex gap-4">
          <button onClick={formatSql} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Format SQL
          </button>
          <button onClick={() => { setInput(''); setOutput('') }} className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Clear
          </button>
        </div>

        {output && (
          <textarea
            value={output}
            readOnly
            className="w-full h-48 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none font-mono text-sm"
          />
        )}
      </div>
    </ToolLayout>
  )
}
