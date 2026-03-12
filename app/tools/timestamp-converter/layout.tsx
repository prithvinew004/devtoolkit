import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timestamp Converter - Unix Time to Date | DevToolkit',
  description: 'Convert Unix timestamps to dates and vice versa. Free online timestamp converter tool.',
  keywords: 'timestamp converter, unix timestamp, epoch converter, time converter',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
