import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Compressor - Compress Images Online | DevToolkit',
  description: 'Free online image compressor. Reduce image file size while maintaining quality.',
  keywords: 'image compressor, compress image, reduce image size, optimize images',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
