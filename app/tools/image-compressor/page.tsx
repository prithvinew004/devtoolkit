'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [compressedImage, setCompressedImage] = useState<string>('')
  const [quality, setQuality] = useState(80)
  const [originalSize, setOriginalSize] = useState(0)
  const [compressedSize, setCompressedSize] = useState(0)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      setOriginalSize(file.size)
      compressImage(file, quality)
    }
  }

  const compressImage = (file: File, qual: number) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0)
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              setCompressedSize(blob.size)
              const url = URL.createObjectURL(blob)
              setCompressedImage(url)
            }
          },
          'image/jpeg',
          qual / 100
        )
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleQualityChange = (newQuality: number) => {
    setQuality(newQuality)
    if (selectedFile) {
      compressImage(selectedFile, newQuality)
    }
  }

  const downloadImage = () => {
    if (compressedImage) {
      const link = document.createElement('a')
      link.href = compressedImage
      link.download = `compressed-${selectedFile?.name || 'image.jpg'}`
      link.click()
    }
  }

  const faq = [
    { question: 'How does image compression work?', answer: 'Image compression reduces file size by optimizing image data while maintaining quality.' },
    { question: 'What formats are supported?', answer: 'This tool supports JPG, PNG, and WebP images.' },
    { question: 'Is my image uploaded to a server?', answer: 'No, all processing happens in your browser. Your images never leave your device.' },
  ]

  return (
    <ToolLayout title="Image Compressor" description="Compress images to reduce file size" faq={faq} currentToolSlug="image-compressor">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-6xl mb-4">🗜️</div>
            <p className="text-lg font-semibold mb-2">Click to upload an image</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Supports JPG, PNG, WebP</p>
          </label>
        </div>

        {selectedFile && (
          <>
            <div>
              <label className="block mb-2 font-semibold">Quality: {quality}%</label>
              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => handleQualityChange(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">
                  {(originalSize / 1024).toFixed(2)} KB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Original Size</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-500">
                  {(compressedSize / 1024).toFixed(2)} KB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Compressed Size</div>
              </div>
            </div>

            {compressedSize > 0 && (
              <div className="text-center">
                <p className="text-lg font-semibold text-green-500 mb-4">
                  Reduced by {Math.round((1 - compressedSize / originalSize) * 100)}%
                </p>
                <button
                  onClick={downloadImage}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Download Compressed Image
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </ToolLayout>
  )
}
