import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON Formatter - Format & Validate JSON Online | DevToolkit',
  description: 'Free online JSON formatter and validator. Beautify, minify, and validate JSON data instantly.',
  keywords: 'json formatter, json validator, json beautifier, json minifier, format json online',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
