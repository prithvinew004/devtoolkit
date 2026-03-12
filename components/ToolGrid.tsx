'use client'

import { Tool } from '@/data/tools'
import ToolCard from './ToolCard'

interface ToolGridProps {
  tools: Tool[]
  emptyMessage?: string
}

export default function ToolGrid({ tools, emptyMessage = 'No tools found' }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tools.map((tool, index) => (
        <ToolCard key={tool.slug} tool={tool} index={index} />
      ))}
    </div>
  )
}
