import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Random Token Generator - Generate API Keys Online | DevToolkit',
  description: 'Free online random token generator. Create secure random tokens and API keys.',
  keywords: 'random token generator, api key generator, token generator, random string',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
