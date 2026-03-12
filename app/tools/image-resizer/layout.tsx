import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Resizer - Resize Images Online | DevToolkit',
  description: 'Free online image resizer. Resize images to any dimension instantly.',
  keywords: 'image resizer, resize image, change image size, image dimensions',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
