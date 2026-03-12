import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PNG to JPG Converter - Convert Images Online | DevToolkit',
  description: 'Free online PNG to JPG converter. Convert PNG images to JPG format instantly.',
  keywords: 'png to jpg, convert png to jpg, image converter, png jpg converter',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
