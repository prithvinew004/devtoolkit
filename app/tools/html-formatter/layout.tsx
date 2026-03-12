import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTML Formatter - Beautify HTML Online | DevToolkit',
  description: 'Free online HTML formatter. Beautify and format HTML code with proper indentation.',
  keywords: 'html formatter, beautify html, format html, html beautifier',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
