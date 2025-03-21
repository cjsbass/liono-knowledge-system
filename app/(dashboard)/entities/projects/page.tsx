import type React from "react"
import { Search, Calendar, Users } from "lucide-react"

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      status: "In Progress",
      company: "Acme Corporation",
      startDate: "2025-01-15",
      endDate: "2025-06-30",
      team: ["John Smith", "Sarah Johnson", "Michael Brown"],
      description: "Development of next-generation AI assistant technology"
    },
    {
      id: 2,
      name: "Project Beta",
      status: "Planning",
      company: "Globex Industries",
      startDate: "2025-04-01",
      endDate: "2025-09-15",
      team: ["Robert Chen", "Maria Rodriguez"],
      description: "Manufacturing process optimization and automation"
    },
    {
      id: 3,
      name: "Project Gamma",
      status: "Completed",
      company: "Stark Enterprises",
      startDate: "2024-10-10",
      endDate: "2025-02-28",
      team: ["Alex Taylor", "James Wilson", "Diana Prince"],
      description: "Quantum computing research initiative"
    },
    {
      id: 4,
      name: "Project Delta",
      status: "On Hold",
      company: "Acme Corporation",
      startDate: "2024-12-01",
      endDate: "2025-05-15",
      team: ["Patricia Lee", "Norman Oswald"],
      description: "Development of sustainable packaging solutions"
    },
    {
      id: 5,
      name: "Project Epsilon",
      status: "In Progress",
      company: "Stark Enterprises",
      startDate: "2025-02-15",
      endDate: "2025-08-30",
      team: ["Bruce Thomas", "Peter Parker"],
      description: "Advanced materials research for aerospace applications"
    },
    {
      id: 6,
      name: "Project Zeta",
      status: "In Progress",
      company: "Umbrella Corp",
      startDate: "2025-01-20",
      endDate: "2025-07-15",
      team: ["Patricia Lee", "Michael Brown", "Sarah Johnson"],
      description: "Development of novel therapeutic compounds"
    }
  ]

  function getStatusColor(status: string): string {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "On Hold":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Active and completed projects</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg">
            <div className="p-4 pb-2">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium">{project.name}</div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{project.company}</div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div className="text-sm">{project.description}</div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <Users className="h-3 w-3" />
                    <span>Team Members:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.team.map((member, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
                      >
                        {member}
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