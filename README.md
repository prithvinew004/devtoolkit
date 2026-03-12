# DevToolkit - Categorized Developer Tools Platform

A comprehensive, modern developer toolkit website with 30+ tools organized by categories. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🎯 Features

- ✅ **30+ Tools** across 5 categories
- 🗂️ **Category-based browsing** system
- 🔍 **Smart search** functionality
- 🌓 **Dark/Light mode** toggle
- 📱 **Fully responsive** mobile layout
- ✨ **Smooth animations** with Framer Motion
- 🎨 **Glassmorphism** design
- 📊 **Recently used tools** tracking
- 🔗 **Related tools** suggestions
- 🎯 **SEO optimized** with metadata
- 🚀 **Google AdSense** ready

## 📂 Tool Categories

### 💻 Developer Tools
- JSON Formatter
- JSON Validator
- Base64 Encoder/Decoder
- UUID Generator
- Regex Tester
- HTML Formatter
- CSS Minifier
- JavaScript Minifier
- SQL Formatter

### 📝 Text Tools
- Word Counter
- Character Counter
- Case Converter
- Remove Duplicate Lines
- Text Sorter
- Text Compare (Diff Checker)

### 🔐 Security Tools
- Password Generator
- Hash Generator (MD5, SHA256)
- JWT Decoder
- Random Token Generator

### 🖼️ Image Tools
- QR Code Generator
- Image Compressor
- Image Resizer
- JPG to PNG Converter
- PNG to JPG Converter

### 🛠️ Utility Tools
- Timestamp Converter
- Age Calculator
- Percentage Calculator
- Random Number Generator
- Time Zone Converter

## 🏗️ Architecture

### Central Configuration
All tools are defined in `/data/tools.ts` for easy management:

```typescript
export const tools: Tool[] = [
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    description: 'Format and validate JSON',
    category: 'developer-tools',
    icon: '{}',
    popular: true
  },
  // ... more tools
]
```

### Component Structure
```
/components
  ├── Navbar.tsx           # Navigation with category dropdown
  ├── Footer.tsx           # Footer component
  ├── ToolCard.tsx         # Individual tool card
  ├── CategoryCard.tsx     # Category card
  ├── ToolLayout.tsx       # Tool page layout wrapper
  ├── ToolGrid.tsx         # Grid of tool cards
  ├── SearchBar.tsx        # Search functionality
  └── ThemeProvider.tsx    # Dark/light mode provider
```

### Routing Structure
```
/                          # Homepage
/category/[slug]           # Category pages
/tools/[tool-name]         # Individual tool pages
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## ➕ Adding New Tools

### 1. Add Tool to Configuration

Edit `/data/tools.ts`:

```typescript
{
  name: 'Your Tool Name',
  slug: 'your-tool-slug',
  description: 'Tool description',
  category: 'developer-tools', // or other category
  icon: '🔧',
  popular: false
}
```

### 2. Create Tool Directory

```bash
mkdir app/tools/your-tool-slug
```

### 3. Create Tool Page

`app/tools/your-tool-slug/page.tsx`:

```typescript
'use client'

import ToolLayout from '@/components/ToolLayout'

export default function YourTool() {
  const faq = [
    { question: 'Question?', answer: 'Answer' }
  ]

  return (
    <ToolLayout 
      title="Your Tool Name" 
      description="Tool description"
      faq={faq}
      currentToolSlug="your-tool-slug"
    >
      {/* Your tool interface */}
    </ToolLayout>
  )
}
```

### 4. Add Metadata

`app/tools/your-tool-slug/layout.tsx`:

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Tool - Description | DevToolkit',
  description: 'Detailed description',
  keywords: 'keywords, separated, by, commas',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

That's it! The tool will automatically appear on the homepage, category page, and in search results.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` and `app/globals.css`

### Categories
Edit `/data/tools.ts` to add/modify categories

### Fonts
Change in `app/layout.tsx`

## 📊 SEO

- ✅ Dynamic sitemap generation
- ✅ Metadata for all pages
- ✅ robots.txt configured
- ✅ Semantic HTML structure
- ✅ Fast page loads

## 💰 Monetization

AdSense placeholders are included in:
- Homepage (2 slots)
- Category pages (2 slots)
- Tool pages (2 slots)

Replace placeholders with your AdSense code.

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📈 Features

### Recently Used Tools
Automatically tracks user's recently used tools using localStorage

### Related Tools
Shows 4 related tools on each tool page

### Smart Search
Search across tool names and descriptions

### Category Navigation
Dropdown menu in navbar for quick category access

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Icons:** Emoji (no dependencies)

## 📝 License

MIT License - Free for personal and commercial use

## 🤝 Contributing

Feel free to add more tools by following the "Adding New Tools" guide above.

---

Built with ❤️ for developers
