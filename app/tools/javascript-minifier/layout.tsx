import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JavaScript Minifier - Minify JS Online | DevToolkit',
  description: 'Free online JavaScript minifier. Compress and minify JS code to reduce file size.',
  keywords: 'javascript minifier, minify js, compress javascript, js compressor',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
