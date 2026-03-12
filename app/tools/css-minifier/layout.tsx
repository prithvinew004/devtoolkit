import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSS Minifier - Minify CSS Online | DevToolkit',
  description: 'Free online CSS minifier. Compress and minify CSS code to reduce file size.',
  keywords: 'css minifier, minify css, compress css, css compressor',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
