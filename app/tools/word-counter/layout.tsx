import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Counter - Count Words & Characters Online | DevToolkit',
  description: 'Free online word counter tool. Count words, characters, lines instantly.',
  keywords: 'word counter, character counter, text counter, count words online',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
