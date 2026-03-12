import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Character Counter - Count Characters Online | DevToolkit',
  description: 'Free online character counter. Count characters, words, sentences, and paragraphs.',
  keywords: 'character counter, count characters, letter counter, text counter',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
