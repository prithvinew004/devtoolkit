import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Password Generator - Create Strong Passwords | DevToolkit',
  description: 'Generate secure random passwords online. Customize length and character types for maximum security.',
  keywords: 'password generator, random password, secure password, strong password generator',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
