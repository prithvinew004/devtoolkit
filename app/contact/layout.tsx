import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | DevToolkit',
  description: 'Get in touch with DevToolkit. We\'d love to hear your feedback and suggestions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
