import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Random Number Generator - Generate Random Numbers | DevToolkit',
  description: 'Generate random numbers within any range. Free online random number generator tool.',
  keywords: 'random number generator, random numbers, number generator, rng',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
