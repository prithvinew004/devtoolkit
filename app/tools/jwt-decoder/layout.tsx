import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JWT Decoder - Decode JWT Tokens Online | DevToolkit',
  description: 'Free online JWT decoder. Decode and inspect JSON Web Tokens instantly.',
  keywords: 'jwt decoder, decode jwt, jwt token, json web token decoder',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
