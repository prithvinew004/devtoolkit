import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQL Formatter - Format SQL Queries Online | DevToolkit',
  description: 'Free online SQL formatter. Beautify and format SQL queries with proper formatting.',
  keywords: 'sql formatter, format sql, beautify sql, sql beautifier',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
