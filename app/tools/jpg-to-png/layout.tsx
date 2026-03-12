import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JPG to PNG Converter - Convert Images Online | DevToolkit',
  description: 'Free online JPG to PNG converter. Convert JPG images to PNG format instantly.',
  keywords: 'jpg to png, convert jpg to png, image converter, jpg png converter',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
