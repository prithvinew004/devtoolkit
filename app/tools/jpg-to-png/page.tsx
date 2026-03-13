'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function JpgToPng() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [convertedImage, setConvertedImage] = useState<string>('')
  const [converting, setConverting] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setSelectedFile(file)
      setConvertedImage('')
    } else {
      alert('Please select a JPG/JPEG image')
    }
  }

  const convertImage = () => {
    if (!selectedFile) return
    setConverting(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        
        // Fill with white background (PNG will have transparency support)
        if (ctx) {
          ctx.fillStyle = '#FFFFFF'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0)
        }
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            setConvertedImage(url)
            setConverting(false)
          }
        }, 'image/png')
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(selectedFile)
  }

  const downloadImage = () => {
    if (convertedImage) {
      const link = document.createElement('a')
      link.href = convertedImage
      const fileName = selectedFile?.name.replace(/\.(jpg|jpeg)$/i, '.png') || 'converted.png'
      link.download = fileName
      link.click()
    }
  }

  const faq = [
    { question: 'What is the difference between JPG and PNG?', answer: 'JPG is compressed and smaller, PNG supports transparency and is lossless.' },
    { question: 'When should I use PNG?', answer: 'Use PNG for images with transparency, logos, or when you need lossless quality.' },
    { question: 'Is my image uploaded?', answer: 'No, conversion happens in your browser. Your images never leave your device.' },
  ]

  return (
    <ToolLayout title="JPG to PNG Converter" description="Convert JPG images to PNG format" faq={faq} currentToolSlug="jpg-to-png">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/jpeg,image/jpg"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-6xl mb-4">🔄</div>
            <p className="text-lg font-semibold mb-2">Click to upload a JPG image</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Only JPG/JPEG files</p>
          </label>
        </div>

        {selectedFile && (
          <>
            <div className="glass rounded-lg p-4 text-center">
              <p className="font-semibold">{selectedFile.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Size: {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>

            <button
              onClick={convertImage}
              disabled={converting}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {converting ? 'Converting...' : 'Convert to PNG'}
            </button>

            {convertedImage && (
              <div className="text-center space-y-4">
                <div className="glass rounded-lg p-4">
                  <p className="text-green-500 font-semibold mb-2">✓ Conversion Complete!</p>
                  <img src={convertedImage} alt="Converted" className="max-w-full h-auto mx-auto max-h-96" />
                </div>
                <button
                  onClick={downloadImage}
                  className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Download PNG Image
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </ToolLayout>
  )
}
