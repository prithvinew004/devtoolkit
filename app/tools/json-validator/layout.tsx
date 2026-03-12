import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON Validator - Validate JSON Online | DevToolkit',
  description: 'Free online JSON validator. Check if your JSON syntax is valid instantly.',
  keywords: 'json validator, validate json, json syntax checker, json validation',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
