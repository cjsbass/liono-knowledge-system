"use client"

import { Search, User, Briefcase, Building } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PeoplePage() {
  // State for view type (grid or list)
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  
  // Sample people data
  const people = [
    {
      id: 1,
      name: "John Smith",
      role: "Project Manager",
      company: "Acme Inc",
      projects: ["Project Alpha", "Project Beta"],
      email: "john@acmeinc.example.com",
      phone: "+1 (555) 123-4567",
      department: "Engineering",
    },
    { 
      id: 2, 
      name: "Sarah Johnson", 
      role: "Legal Counsel", 
      company: "Acme Inc", 
      projects: ["Project Alpha"],
      email: "sarah@acmeinc.example.com",
      phone: "+1 (555) 234-5678",
      department: "Legal",
    },
    { 
      id: 3, 
      name: "Michael Chen", 
      role: "Developer", 
      company: "TechCorp", 
      projects: ["Project Gamma"],
      email: "michael@techcorp.example.com",
      phone: "+1 (555) 345-6789",
      department: "Product",
    },
    { 
      id: 4, 
      name: "Jessica Miller", 
      role: "UX Designer", 
      company: "Acme Inc", 
      projects: ["Project Alpha", "Project Gamma"],
      email: "jessica@acmeinc.example.com",
      phone: "+1 (555) 456-7890",
      department: "Design",
    },
    { 
      id: 5, 
      name: "Robert Wilson", 
      role: "CTO", 
      company: "TechCorp", 
      projects: ["Project Beta", "Project Gamma"],
      email: "robert@techcorp.example.com",
      phone: "+1 (555) 567-8901",
      department: "Executive",
    },
  ]

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">People</h1>
        <p className="text-muted-foreground">Explore people entities in your knowledge base</p>
      </header>

      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search people..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <div className="mb-4 flex space-x-1 rounded-md bg-muted p-1">
        <Button 
          variant={viewType === "grid" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setViewType("grid")}
          className="px-3 py-1.5"
        >
          Grid View
        </Button>
        <Button 
          variant={viewType === "list" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setViewType("list")}
          className="px-3 py-1.5"
        >
          List View
        </Button>
      </div>

      {viewType === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person) => (
            <div key={person.id} className="border rounded-lg">
              <div className="p-4 pb-2">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-muted-foreground">{person.role}</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Company:</span>
                    <span className="text-sm">{person.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Department:</span>
                    <span className="text-sm">{person.department}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Projects:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {person.projects.map((project, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Role</th>
                <th className="p-3 text-left font-medium hidden md:table-cell">Company</th>
                <th className="p-3 text-left font-medium hidden lg:table-cell">Email</th>
                <th className="p-3 text-left font-medium hidden xl:table-cell">Projects</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id} className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{getInitials(person.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{person.name}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{person.role}</span>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <div className="flex items-center gap-1">
                      <Building className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{person.company}</span>
                    </div>
                  </td>
                  <td className="p-3 hidden lg:table-cell">
                    <span className="text-sm">{person.email}</span>
                  </td>
                  <td className="p-3 hidden xl:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {person.projects.map((project, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

