import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remove Duplicate Lines - Remove Duplicates Online | DevToolkit',
  description: 'Free online tool to remove duplicate lines from text. Keep only unique lines.',
  keywords: 'remove duplicates, duplicate remover, unique lines, text deduplication',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
