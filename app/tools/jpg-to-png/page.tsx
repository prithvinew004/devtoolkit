'use client'

import ToolLayout from '@/components/ToolLayout'

export default function JpgToPng() {
  const faq = [
    { question: 'What is the difference between JPG and PNG?', answer: 'JPG is compressed and smaller, PNG supports transparency and is lossless.' },
    { question: 'When should I use PNG?', answer: 'Use PNG for images with transparency, logos, or when you need lossless quality.' },
  ]

  return (
    <ToolLayout title="JPG to PNG Converter" description="Convert JPG images to PNG format" faq={faq} currentToolSlug="jpg-to-png">
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔄</div>
        <h3 className="text-2xl font-bold mb-4">JPG to PNG Converter</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This tool is coming soon! Convert JPG images to PNG format.
        </p>
        <div className="glass rounded-lg p-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Features will include:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
            <li>• Drag & drop upload</li>
            <li>• Batch conversion</li>
            <li>• Quality preservation</li>
            <li>• Instant download</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
