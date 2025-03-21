import type React from "react"
import { Search, Building, Users, Briefcase } from "lucide-react"

export default function LocationsPage() {
  // Sample locations data
  const locations = [
    {
      id: 1,
      name: "San Francisco Office",
      address: "123 Tech Avenue, San Francisco, CA 94105",
      type: "Office",
      companies: ["Acme Corporation"],
      people: ["John Smith", "Sarah Johnson"],
      projects: ["Project Alpha", "Project Delta"]
    },
    {
      id: 2,
      name: "Chicago Manufacturing Plant",
      address: "456 Industrial Blvd, Chicago, IL 60607",
      type: "Manufacturing",
      companies: ["Globex Industries"],
      people: ["Robert Chen", "Maria Rodriguez"],
      projects: ["Project Beta"]
    },
    {
      id: 3,
      name: "New York Research Center",
      address: "789 Innovation Way, New York, NY 10012",
      type: "Research",
      companies: ["Stark Enterprises"],
      people: ["Alex Taylor", "James Wilson", "Diana Prince"],
      projects: ["Project Gamma", "Project Epsilon"]
    },
    {
      id: 4,
      name: "Boston Laboratory",
      address: "101 Science Park, Boston, MA 02110",
      type: "Laboratory",
      companies: ["Umbrella Corp"],
      people: ["Patricia Lee", "Michael Brown"],
      projects: ["Project Zeta"]
    },
    {
      id: 5,
      name: "Gotham City Headquarters",
      address: "999 Enterprise Tower, Gotham City, NJ 07001",
      type: "Headquarters",
      companies: ["Wayne Enterprises"],
      people: ["Bruce Thomas", "Diana Prince"],
      projects: ["Project Omega", "Project Sigma"]
    },
    {
      id: 6,
      name: "Portland Research Facility",
      address: "555 Technology Drive, Portland, OR 97201",
      type: "Research",
      companies: ["Oscorp Industries"],
      people: ["Norman Oswald", "Peter Parker"],
      projects: ["Project Theta"]
    }
  ]

  function getLocationType(type: string): string {
    switch (type) {
      case "Office":
        return "bg-blue-100 text-blue-800";
      case "Manufacturing":
        return "bg-amber-100 text-amber-800";
      case "Research":
        return "bg-purple-100 text-purple-800";
      case "Laboratory":
        return "bg-green-100 text-green-800";
      case "Headquarters":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Locations</h1>
        <p className="text-muted-foreground">Physical locations in your knowledge base</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search locations..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location) => (
          <div key={location.id} className="border rounded-lg">
            <div className="p-4 pb-2">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium">{location.name}</div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${getLocationType(location.type)}`}>
                  {location.type}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{location.address}</div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <Building className="h-3 w-3" />
                    <span>Companies:</span>
                  </div>
                  <div className="text-sm mt-1">
                    {location.companies.join(", ")}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <Users className="h-3 w-3" />
                    <span>People:</span>
                  </div>
                  <div className="text-sm mt-1">
                    {location.people.join(", ")}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <Briefcase className="h-3 w-3" />
                    <span>Projects:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.projects.map((project, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground"
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
    </div>
  )
} 