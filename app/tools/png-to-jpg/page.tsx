'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function PngToJpg() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [convertedImage, setConvertedImage] = useState<string>('')
  const [converting, setConverting] = useState(false)
  const [quality, setQuality] = useState(90)
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === 'image/png') {
      setSelectedFile(file)
      setConvertedImage('')
    } else {
      alert('Please select a PNG image')
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
        
        if (ctx) {
          // Fill with selected background color (JPG doesn't support transparency)
          ctx.fillStyle = bgColor
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0)
        }
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob)
              setConvertedImage(url)
              setConverting(false)
            }
          },
          'image/jpeg',
          quality / 100
        )
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(selectedFile)
  }

  const downloadImage = () => {
    if (convertedImage) {
      const link = document.createElement('a')
      link.href = convertedImage
      const fileName = selectedFile?.name.replace(/\.png$/i, '.jpg') || 'converted.jpg'
      link.download = fileName
      link.click()
    }
  }

  const faq = [
    { question: 'Why convert PNG to JPG?', answer: 'JPG files are smaller and better for photos. Convert to reduce file size.' },
    { question: 'Will I lose transparency?', answer: 'Yes, JPG does not support transparency. Transparent areas will become the selected background color.' },
    { question: 'Is my image uploaded?', answer: 'No, conversion happens in your browser. Your images never leave your device.' },
  ]

  return (
    <ToolLayout title="PNG to JPG Converter" description="Convert PNG images to JPG format" faq={faq} currentToolSlug="png-to-jpg">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/png"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-6xl mb-4">🔄</div>
            <p className="text-lg font-semibold mb-2">Click to upload a PNG image</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Only PNG files</p>
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

            <div>
              <label className="block mb-2 font-semibold">Quality: {quality}%</label>
              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Background Color (for transparent areas)</label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="h-12 w-20 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#FFFFFF"
                />
              </div>
            </div>

            <button
              onClick={convertImage}
              disabled={converting}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {converting ? 'Converting...' : 'Convert to JPG'}
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
                  Download JPG Image
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </ToolLayout>
  )
}
