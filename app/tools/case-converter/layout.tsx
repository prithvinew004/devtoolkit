import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Converter - Change Text Case Online | DevToolkit',
  description: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.',
  keywords: 'case converter, text case, uppercase, lowercase, camelcase, snake case',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
