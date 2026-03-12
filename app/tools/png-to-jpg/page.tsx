'use client'

import ToolLayout from '@/components/ToolLayout'

export default function PngToJpg() {
  const faq = [
    { question: 'Why convert PNG to JPG?', answer: 'JPG files are smaller and better for photos. Convert to reduce file size.' },
    { question: 'Will I lose transparency?', answer: 'Yes, JPG does not support transparency. Transparent areas will become white or a chosen background color.' },
  ]

  return (
    <ToolLayout title="PNG to JPG Converter" description="Convert PNG images to JPG format" faq={faq} currentToolSlug="png-to-jpg">
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔄</div>
        <h3 className="text-2xl font-bold mb-4">PNG to JPG Converter</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This tool is coming soon! Convert PNG images to JPG format.
        </p>
        <div className="glass rounded-lg p-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Features will include:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
            <li>• Drag & drop upload</li>
            <li>• Batch conversion</li>
            <li>• Background color selection</li>
            <li>• Quality adjustment</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
