'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function PercentageCalculator() {
  const [value, setValue] = useState('')
  const [percentage, setPercentage] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const val = parseFloat(value)
    const perc = parseFloat(percentage)
    if (!isNaN(val) && !isNaN(perc)) {
      setResult((val * perc) / 100)
    }
  }

  const faq = [
    { question: 'How to calculate percentage?', answer: 'Multiply the value by the percentage and divide by 100. For example, 20% of 100 = (100 × 20) / 100 = 20.' },
    { question: 'What are common uses?', answer: 'Calculating discounts, tips, tax, interest rates, and statistical data.' },
  ]

  return (
    <ToolLayout title="Percentage Calculator" description="Calculate percentages easily" faq={faq} currentToolSlug="percentage-calculator">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Percentage (%)</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter percentage"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button onClick={calculate} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Calculate
        </button>

        {result !== null && (
          <div className="glass rounded-lg p-8 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {percentage}% of {value} is
            </div>
            <div className="text-5xl font-bold text-blue-500">
              {result.toFixed(2)}
            </div>
          </div>
        )}

        <div className="glass rounded-lg p-4">
          <h3 className="font-semibold mb-2">Quick Examples:</h3>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <p>• 20% of 100 = 20</p>
            <p>• 15% of 200 = 30</p>
            <p>• 50% of 80 = 40</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
