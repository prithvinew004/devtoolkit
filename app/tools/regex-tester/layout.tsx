import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regex Tester - Test Regular Expressions Online | DevToolkit',
  description: 'Free online regex tester. Test and validate regular expressions with instant results.',
  keywords: 'regex tester, regular expression, regex validator, pattern matching',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
