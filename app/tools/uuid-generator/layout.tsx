import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UUID Generator - Generate Unique IDs Online | DevToolkit',
  description: 'Generate UUID v4 unique identifiers instantly. Create single or multiple UUIDs for your projects.',
  keywords: 'uuid generator, unique id generator, guid generator, uuid v4',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
