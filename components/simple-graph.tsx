"use client"

import React from "react"

// Create a much simpler SVG-based graph component
export default function SimpleGraph() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything on the server
  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/20 border border-dashed rounded-lg">
        <p className="text-muted-foreground">Loading graph visualization...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      <svg width="100%" height="100%" viewBox="0 0 800 600" className="w-full h-full">
        {/* Connections */}
        <line x1="400" y1="300" x2="300" y2="400" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="400" y1="300" x2="500" y2="400" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="300" y2="400" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="600" y1="200" x2="300" y2="400" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="600" y1="200" x2="500" y2="400" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="300" y1="400" x2="350" y2="500" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Nodes */}
        <g>
          <circle cx="400" cy="300" r="15" fill="#3b82f6" />
          <text x="400" cy="330" textAnchor="middle" fontSize="12">
            Acme Inc
          </text>
        </g>
        <g>
          <circle cx="200" cy="200" r="15" fill="#10b981" />
          <text x="200" cy="230" textAnchor="middle" fontSize="12">
            John Smith
          </text>
        </g>
        <g>
          <circle cx="600" cy="200" r="15" fill="#10b981" />
          <text x="600" cy="230" textAnchor="middle" fontSize="12">
            Sarah Johnson
          </text>
        </g>
        <g>
          <circle cx="300" cy="400" r="15" fill="#f59e0b" />
          <text x="300" cy="430" textAnchor="middle" fontSize="12">
            Project Alpha
          </text>
        </g>
        <g>
          <circle cx="500" cy="400" r="15" fill="#f59e0b" />
          <text x="500" cy="430" textAnchor="middle" fontSize="12">
            Project Beta
          </text>
        </g>
        <g>
          <circle cx="350" cy="500" r="15" fill="#8b5cf6" />
          <text x="350" cy="530" textAnchor="middle" fontSize="12">
            Contract #123
          </text>
        </g>
      </svg>
    </div>
  )
}

// Also export as named export for compatibility
export { SimpleGraph }

