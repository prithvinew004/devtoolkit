'use client'

import { useState } from 'react'
import QRCode from 'qrcode'
import ToolLayout from '@/components/ToolLayout'

export default function QrCodeGenerator() {
  const [text, setText] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generate = async () => {
    try {
      const url = await QRCode.toDataURL(text, { width: 300, margin: 2 })
      setQrCode(url)
    } catch (err) {
      console.error(err)
    }
  }

  const download = () => {
    const link = document.createElement('a')
    link.href = qrCode
    link.download = 'qrcode.png'
    link.click()
  }

  const faq = [
    { question: 'What can I encode in a QR code?', answer: 'URLs, text, contact information, WiFi credentials, and more.' },
    { question: 'Can I customize the QR code?', answer: 'The generated QR code is optimized for scanning and can be downloaded as PNG.' },
  ]

  return (
    <ToolLayout title="QR Code Generator" description="Create QR codes instantly" faq={faq}>
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Enter text or URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={generate}
          disabled={!text}
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          Generate QR Code
        </button>

        {qrCode && (
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-white rounded-lg">
              <img src={qrCode} alt="QR Code" className="mx-auto" />
            </div>
            <button
              onClick={download}
              className="px-6 py-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
