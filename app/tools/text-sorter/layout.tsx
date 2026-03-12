import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Sorter - Sort Lines Alphabetically Online | DevToolkit',
  description: 'Sort text lines alphabetically or by length. Free online text sorting tool.',
  keywords: 'text sorter, sort lines, alphabetical sort, text organizer',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
