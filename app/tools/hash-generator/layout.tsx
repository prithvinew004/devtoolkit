import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hash Generator - MD5 & SHA256 Online | DevToolkit',
  description: 'Generate MD5 and SHA256 hashes online. Free hash generator tool for text encryption.',
  keywords: 'hash generator, md5, sha256, encryption, hash function',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
