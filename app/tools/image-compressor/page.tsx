'use client'

import ToolLayout from '@/components/ToolLayout'

export default function ImageCompressor() {
  const faq = [
    { question: 'How does image compression work?', answer: 'Image compression reduces file size by optimizing image data while maintaining quality.' },
    { question: 'What formats are supported?', answer: 'Common formats include JPG, PNG, and WebP.' },
  ]

  return (
    <ToolLayout title="Image Compressor" description="Compress images to reduce file size" faq={faq} currentToolSlug="image-compressor">
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🗜️</div>
        <h3 className="text-2xl font-bold mb-4">Image Compressor</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This tool is coming soon! Upload and compress images to reduce file size.
        </p>
        <div className="glass rounded-lg p-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Features will include:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
            <li>• Drag & drop image upload</li>
            <li>• Adjustable compression quality</li>
            <li>• Multiple format support</li>
            <li>• Batch compression</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
