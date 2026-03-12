import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Compare - Compare Two Texts Online | DevToolkit',
  description: 'Free online text comparison tool. Compare two texts and find differences instantly.',
  keywords: 'text compare, diff checker, compare text, text difference',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
