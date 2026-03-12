import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Zone Converter - Convert Time Zones Online | DevToolkit',
  description: 'Free online timezone converter. Convert time between different time zones instantly.',
  keywords: 'timezone converter, time zone converter, convert time zones, world clock',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
