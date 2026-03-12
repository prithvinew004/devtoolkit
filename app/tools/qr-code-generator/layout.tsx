import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR Code Generator - Create QR Codes Free | DevToolkit',
  description: 'Generate QR codes instantly for URLs, text, and more. Download as PNG image.',
  keywords: 'qr code generator, create qr code, qr code maker, generate qr code online',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
