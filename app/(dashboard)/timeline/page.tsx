import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Building, Briefcase, Calendar } from "lucide-react"

export default function TimelinePage() {
  // Sample timeline events
  const events = [
    {
      id: 1,
      date: "2023-06-15",
      type: "document",
      title: "Contract #1001 Added",
      description: "Service Agreement for Project Alpha was processed",
      icon: <FileText className="h-4 w-4" />,
      entities: ["Acme Inc", "Project Alpha"],
    },
    {
      id: 2,
      date: "2023-06-10",
      type: "person",
      title: "New Person Identified",
      description: "Sarah Johnson was identified as Legal Counsel",
      icon: <Users className="h-4 w-4" />,
      entities: ["Sarah Johnson", "Acme Inc"],
    },
    {
      id: 3,
      date: "2023-06-05",
      type: "project",
      title: "Project Created",
      description: "Project Alpha was created and linked to Acme Inc",
      icon: <Briefcase className="h-4 w-4" />,
      entities: ["Project Alpha", "Acme Inc"],
    },
    {
      id: 4,
      date: "2023-06-01",
      type: "company",
      title: "Company Added",
      description: "Acme Inc was added to the knowledge base",
      icon: <Building className="h-4 w-4" />,
      entities: ["Acme Inc"],
    },
  ]

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Timeline</h1>
        <p className="text-muted-foreground">Chronological view of events and discoveries</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>Chronological record of events in your knowledge base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative border-l pl-6 ml-3 space-y-8">
            {events.map((event) => (
              <div key={event.id} className="relative">
                <div className="absolute -left-10 p-1 rounded-full bg-background border">{event.icon}</div>
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <time className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {event.entities.map((entity, i) => (
                    <Badge key={i} variant="outline">
                      {entity}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

