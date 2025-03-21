import type React from "react"
import { Search, FileText, Calendar, Tag } from "lucide-react"

export default function DocumentsPage() {
  // Sample documents data
  const documents = [
    {
      id: 1,
      title: "Contract #1001",
      type: "Legal",
      company: "Acme Corporation",
      date: "2025-01-15",
      tags: ["Contract", "Legal", "Confidential"],
      summary: "Service agreement for Project Alpha development services"
    },
    {
      id: 2,
      title: "Research Proposal",
      type: "Research",
      company: "Stark Enterprises",
      date: "2024-11-20",
      tags: ["Research", "Proposal", "Quantum Computing"],
      summary: "Detailed research proposal for Project Gamma quantum computing initiative"
    },
    {
      id: 3,
      title: "Meeting Minutes #42",
      type: "Internal",
      company: "Globex Industries",
      date: "2025-02-03",
      tags: ["Meeting", "Project Beta", "Planning"],
      summary: "Minutes from Project Beta kickoff meeting with key stakeholders"
    },
    {
      id: 4,
      title: "Patent Application",
      type: "Legal",
      company: "Umbrella Corp",
      date: "2024-12-12",
      tags: ["Patent", "Legal", "Project Zeta"],
      summary: "Patent application for novel therapeutic compound developed in Project Zeta"
    },
    {
      id: 5,
      title: "Financial Report Q1",
      type: "Financial",
      company: "Wayne Enterprises",
      date: "2025-03-31",
      tags: ["Financial", "Quarterly", "Confidential"],
      summary: "Quarterly financial performance report for projects Omega and Sigma"
    },
    {
      id: 6,
      title: "Technical Documentation",
      type: "Technical",
      company: "Oscorp Industries",
      date: "2025-01-28",
      tags: ["Technical", "Documentation", "Project Theta"],
      summary: "Technical specifications and architecture for Project Theta implementation"
    }
  ]

  function getDocumentTypeColor(type: string): string {
    switch (type) {
      case "Legal":
        return "bg-purple-100 text-purple-800";
      case "Research":
        return "bg-blue-100 text-blue-800";
      case "Internal":
        return "bg-gray-100 text-gray-800";
      case "Financial":
        return "bg-green-100 text-green-800";
      case "Technical":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <p className="text-muted-foreground">Documents stored in your knowledge base</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((document) => (
          <div key={document.id} className="border rounded-lg">
            <div className="p-4 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div className="font-medium">{document.title}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{document.company}</div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${getDocumentTypeColor(document.type)}`}>
                  {document.type}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div className="text-sm">{document.summary}</div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(document.date).toLocaleDateString()}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <Tag className="h-3 w-3" />
                    <span>Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {document.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 