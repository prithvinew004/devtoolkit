import { Metadata } from 'next'
import { getCategoryBySlug } from '@/data/tools'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} - Free Online Tools | DevToolkit`,
    description: `${category.description}. Browse our collection of free ${category.name.toLowerCase()}.`,
    keywords: `${category.name}, online tools, free tools, developer tools`,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
