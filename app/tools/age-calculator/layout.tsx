import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Your Age Online | DevToolkit',
  description: 'Free online age calculator. Calculate your exact age in years, months, and days.',
  keywords: 'age calculator, calculate age, age from date of birth, how old am i',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
