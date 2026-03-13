import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | DevToolkit',
  description: 'Learn about DevToolkit - Free online developer tools and utilities for everyone.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
