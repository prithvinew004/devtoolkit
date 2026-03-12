'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function RandomNumber() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(1)
  const [numbers, setNumbers] = useState<number[]>([])

  const generate = () => {
    const generated = []
    for (let i = 0; i < count; i++) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min
      generated.push(random)
    }
    setNumbers(generated)
  }

  const faq = [
    { question: 'How random are the numbers?', answer: 'Numbers are generated using JavaScript\'s Math.random() which is suitable for most use cases.' },
    { question: 'Can I generate negative numbers?', answer: 'Yes, you can set negative values for the minimum range.' },
  ]

  return (
    <ToolLayout title="Random Number Generator" description="Generate random numbers within a range" faq={faq} currentToolSlug="random-number">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Minimum</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Maximum</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Count</label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button onClick={generate} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Generate Random Numbers
        </button>

        {numbers.length > 0 && (
          <div className="glass rounded-lg p-6">
            <h3 className="font-semibold mb-4">Generated Numbers:</h3>
            <div className="flex flex-wrap gap-3">
              {numbers.map((num, i) => (
                <div key={i} className="px-6 py-3 bg-blue-500 text-white rounded-lg text-2xl font-bold">
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
