'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState<any>(null)

  const calculateAge = () => {
    const birth = new Date(birthDate)
    const today = new Date()
    
    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    const totalMonths = years * 12 + months

    setAge({ years, months, days, totalDays, totalMonths })
  }

  const faq = [
    { question: 'How is age calculated?', answer: 'Age is calculated from your birth date to today\'s date, showing years, months, and days.' },
    { question: 'Is my data stored?', answer: 'No, all calculations happen in your browser. No data is stored or sent anywhere.' },
  ]

  return (
    <ToolLayout title="Age Calculator" description="Calculate your exact age from birth date" faq={faq} currentToolSlug="age-calculator">
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Birth Date</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button onClick={calculateAge} disabled={!birthDate} className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50">
          Calculate Age
        </button>

        {age && (
          <div className="space-y-4">
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">
                {age.years}
              </div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Years Old</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-500">{age.months}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-500">{age.days}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-500">{age.totalMonths}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Months</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{age.totalDays}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Days</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
