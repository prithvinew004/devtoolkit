export interface Tool {
  name: string
  slug: string
  description: string
  category: string
  icon: string
  popular?: boolean
}

export interface Category {
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

export const categories: Category[] = [
  {
    name: 'Developer Tools',
    slug: 'developer-tools',
    description: 'Essential tools for developers',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Text Tools',
    slug: 'text-tools',
    description: 'Text manipulation and analysis',
    icon: '📝',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Security Tools',
    slug: 'security-tools',
    description: 'Security and encryption utilities',
    icon: '🔐',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Image Tools',
    slug: 'image-tools',
    description: 'Image processing and conversion',
    icon: '🖼️',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Utility Tools',
    slug: 'utility-tools',
    description: 'Everyday utility calculators',
    icon: '🛠️',
    color: 'from-yellow-500 to-orange-500',
  },
]

export const tools: Tool[] = [
  // Developer Tools
  { name: 'JSON Formatter', slug: 'json-formatter', description: 'Format and validate JSON data', category: 'developer-tools', icon: '{}', popular: true },
  { name: 'JSON Validator', slug: 'json-validator', description: 'Validate JSON syntax', category: 'developer-tools', icon: '✓', popular: false },
  { name: 'Base64 Encoder', slug: 'base64-encoder', description: 'Encode and decode Base64', category: 'developer-tools', icon: '🔤', popular: false },
  { name: 'UUID Generator', slug: 'uuid-generator', description: 'Generate unique identifiers', category: 'developer-tools', icon: '🆔', popular: true },
  { name: 'Regex Tester', slug: 'regex-tester', description: 'Test regular expressions', category: 'developer-tools', icon: '🔍', popular: false },
  { name: 'HTML Formatter', slug: 'html-formatter', description: 'Format and beautify HTML', category: 'developer-tools', icon: '📄', popular: false },
  { name: 'CSS Minifier', slug: 'css-minifier', description: 'Minify CSS code', category: 'developer-tools', icon: '🎨', popular: false },
  { name: 'JavaScript Minifier', slug: 'javascript-minifier', description: 'Minify JavaScript code', category: 'developer-tools', icon: '⚡', popular: false },
  { name: 'SQL Formatter', slug: 'sql-formatter', description: 'Format SQL queries', category: 'developer-tools', icon: '🗄️', popular: false },

  // Text Tools
  { name: 'Word Counter', slug: 'word-counter', description: 'Count words and characters', category: 'text-tools', icon: '📊', popular: true },
  { name: 'Character Counter', slug: 'character-counter', description: 'Count characters in text', category: 'text-tools', icon: '🔢', popular: false },
  { name: 'Case Converter', slug: 'case-converter', description: 'Convert text case formats', category: 'text-tools', icon: '🔄', popular: false },
  { name: 'Remove Duplicate Lines', slug: 'remove-duplicates', description: 'Remove duplicate lines from text', category: 'text-tools', icon: '🗑️', popular: false },
  { name: 'Text Sorter', slug: 'text-sorter', description: 'Sort text lines alphabetically', category: 'text-tools', icon: '📋', popular: false },
  { name: 'Text Compare', slug: 'text-compare', description: 'Compare two texts (Diff Checker)', category: 'text-tools', icon: '⚖️', popular: false },

  // Security Tools
  { name: 'Password Generator', slug: 'password-generator', description: 'Generate secure passwords', category: 'security-tools', icon: '🔑', popular: true },
  { name: 'Hash Generator', slug: 'hash-generator', description: 'Generate MD5, SHA256 hashes', category: 'security-tools', icon: '#️⃣', popular: false },
  { name: 'JWT Decoder', slug: 'jwt-decoder', description: 'Decode JWT tokens', category: 'security-tools', icon: '🎫', popular: false },
  { name: 'Random Token Generator', slug: 'random-token', description: 'Generate random tokens', category: 'security-tools', icon: '🎲', popular: false },

  // Image Tools
  { name: 'QR Code Generator', slug: 'qr-code-generator', description: 'Create QR codes instantly', category: 'image-tools', icon: '📱', popular: true },
  { name: 'Image Compressor', slug: 'image-compressor', description: 'Compress images online', category: 'image-tools', icon: '🗜️', popular: false },
  { name: 'Image Resizer', slug: 'image-resizer', description: 'Resize images to any dimension', category: 'image-tools', icon: '📐', popular: false },
  { name: 'JPG to PNG', slug: 'jpg-to-png', description: 'Convert JPG to PNG format', category: 'image-tools', icon: '🔄', popular: false },
  { name: 'PNG to JPG', slug: 'png-to-jpg', description: 'Convert PNG to JPG format', category: 'image-tools', icon: '🔄', popular: false },

  // Utility Tools
  { name: 'Timestamp Converter', slug: 'timestamp-converter', description: 'Convert Unix timestamps', category: 'utility-tools', icon: '⏰', popular: false },
  { name: 'Age Calculator', slug: 'age-calculator', description: 'Calculate age from birthdate', category: 'utility-tools', icon: '🎂', popular: false },
  { name: 'Percentage Calculator', slug: 'percentage-calculator', description: 'Calculate percentages', category: 'utility-tools', icon: '%', popular: false },
  { name: 'Random Number Generator', slug: 'random-number', description: 'Generate random numbers', category: 'utility-tools', icon: '🎰', popular: false },
  { name: 'Time Zone Converter', slug: 'timezone-converter', description: 'Convert between time zones', category: 'utility-tools', icon: '🌍', popular: false },
]

export const getToolsByCategory = (categorySlug: string) => {
  return tools.filter(tool => tool.category === categorySlug)
}

export const getPopularTools = () => {
  return tools.filter(tool => tool.popular)
}

export const getCategoryBySlug = (slug: string) => {
  return categories.find(cat => cat.slug === slug)
}

export const getToolBySlug = (slug: string) => {
  return tools.find(tool => tool.slug === slug)
}
