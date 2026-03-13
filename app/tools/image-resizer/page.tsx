'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function ImageResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [resizedImage, setResizedImage] = useState<string>('')
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(600)
  const [maintainAspect, setMaintainAspect] = useState(true)
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 })

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height })
          setWidth(img.width)
          setHeight(img.height)
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth)
    if (maintainAspect && originalDimensions.width > 0) {
      const ratio = originalDimensions.height / originalDimensions.width
      setHeight(Math.round(newWidth * ratio))
    }
  }

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight)
    if (maintainAspect && originalDimensions.height > 0) {
      const ratio = originalDimensions.width / originalDimensions.height
      setWidth(Math.round(newHeight * ratio))
    }
  }

  const resizeImage = () => {
    if (!selectedFile) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, width, height)
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            setResizedImage(url)
          }
        }, 'image/png')
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(selectedFile)
  }

  const downloadImage = () => {
    if (resizedImage) {
      const link = document.createElement('a')
      link.href = resizedImage
      link.download = `resized-${width}x${height}-${selectedFile?.name || 'image.png'}`
      link.click()
    }
  }

  const faq = [
    { question: 'How does image resizing work?', answer: 'Image resizing changes the dimensions of an image while maintaining aspect ratio.' },
    { question: 'Will quality be affected?', answer: 'Resizing may affect quality. Downscaling is generally safe, upscaling may reduce quality.' },
    { question: 'Is my image uploaded?', answer: 'No, all processing happens in your browser. Your images stay on your device.' },
  ]

  return (
    <ToolLayout title="Image Resizer" description="Resize images to any dimension" faq={faq} currentToolSlug="image-resizer">
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
            <div className="text-6xl mb-4">📐</div>
            <p className="text-lg font-semibold mb-2">Click to upload an image</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Supports JPG, PNG, WebP</p>
          </label>
        </div>

        {selectedFile && (
          <>
            <div className="glass rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Original: {originalDimensions.width} x {originalDimensions.height} px
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold">Width (px)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => handleWidthChange(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Height (px)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => handleHeightChange(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={maintainAspect}
                onChange={(e) => setMaintainAspect(e.target.checked)}
              />
              Maintain aspect ratio
            </label>

            <button
              onClick={resizeImage}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Resize Image
            </button>

            {resizedImage && (
              <div className="text-center space-y-4">
                <div className="glass rounded-lg p-4">
                  <img src={resizedImage} alt="Resized" className="max-w-full h-auto mx-auto" />
                </div>
                <button
                  onClick={downloadImage}
                  className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Download Resized Image
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </ToolLayout>
  )
}
