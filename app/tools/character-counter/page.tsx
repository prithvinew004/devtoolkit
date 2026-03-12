'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function CharacterCounter() {
  const [text, setText] = useState('')

  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, '').length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length
  const paragraphs = text.split(/\n+/).filter(p => p.trim()).length

  const faq = [
    { question: 'What counts as a character?', answer: 'Every letter, number, symbol, space, and punctuation mark counts as one character.' },
    { question: 'How are words counted?', answer: 'Words are counted by splitting text on whitespace characters.' },
  ]

  return (
    <ToolLayout title="Character Counter" description="Count characters, words, and sentences" faq={faq} currentToolSlug="character-counter">
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-64 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-500">{characters}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-500">{charactersNoSpaces}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">No Spaces</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-500">{words}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Words</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-500">{sentences}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Sentences</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-500">{paragraphs}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Paragraphs</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
