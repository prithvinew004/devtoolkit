'use client'

import ToolLayout from '@/components/ToolLayout'

export default function ImageResizer() {
  const faq = [
    { question: 'How does image resizing work?', answer: 'Image resizing changes the dimensions of an image while maintaining aspect ratio.' },
    { question: 'Will quality be affected?', answer: 'Resizing may affect quality. Downscaling is generally safe, upscaling may reduce quality.' },
  ]

  return (
    <ToolLayout title="Image Resizer" description="Resize images to any dimension" faq={faq} currentToolSlug="image-resizer">
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📐</div>
        <h3 className="text-2xl font-bold mb-4">Image Resizer</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This tool is coming soon! Resize images to custom dimensions.
        </p>
        <div className="glass rounded-lg p-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Features will include:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
            <li>• Custom width & height</li>
            <li>• Maintain aspect ratio</li>
            <li>• Preset dimensions</li>
            <li>• Preview before download</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
