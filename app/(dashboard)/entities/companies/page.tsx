import type React from "react"
import { Search } from "lucide-react"

export default function CompaniesPage() {
  // Sample companies data
  const companies = [
    {
      id: 1,
      name: "Acme Corporation",
      industry: "Technology",
      location: "San Francisco, CA",
      employees: 1200,
      projects: ["Project Alpha", "Project Delta"],
      contacts: ["John Smith", "Sarah Johnson"]
    },
    {
      id: 2,
      name: "Globex Industries",
      industry: "Manufacturing",
      location: "Chicago, IL",
      employees: 850,
      projects: ["Project Beta"],
      contacts: ["Robert Chen", "Maria Rodriguez"]
    },
    {
      id: 3,
      name: "Stark Enterprises",
      industry: "Research & Development",
      location: "New York, NY",
      employees: 2100,
      projects: ["Project Gamma", "Project Epsilon"],
      contacts: ["Alex Taylor", "James Wilson"]
    },
    {
      id: 4,
      name: "Umbrella Corp",
      industry: "Pharmaceuticals",
      location: "Boston, MA",
      employees: 920,
      projects: ["Project Zeta"],
      contacts: ["Patricia Lee", "Michael Brown"]
    },
    {
      id: 5,
      name: "Wayne Enterprises",
      industry: "Conglomerate",
      location: "Gotham City",
      employees: 3500,
      projects: ["Project Omega", "Project Sigma"],
      contacts: ["Bruce Thomas", "Diana Prince"]
    },
    {
      id: 6,
      name: "Oscorp Industries",
      industry: "Biotechnology",
      location: "Portland, OR",
      employees: 750,
      projects: ["Project Theta"],
      contacts: ["Norman Oswald", "Peter Parker"]
    }
  ]

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Companies</h1>
        <p className="text-muted-foreground">Organizations in your knowledge base</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search companies..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <div key={company.id} className="border rounded-lg">
            <div className="p-4 pb-2">
              <div className="font-medium">{company.name}</div>
              <div className="text-sm text-muted-foreground">{company.industry}</div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Location:</span>
                  <span className="text-sm">{company.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Employees:</span>
                  <span className="text-sm">{company.employees}</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Projects:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {company.projects.map((project, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium">Key Contacts:</span>
                  <div className="text-sm mt-1">
                    {company.contacts.join(", ")}
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