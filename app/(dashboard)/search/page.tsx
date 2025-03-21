import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function SearchPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Search</h1>
        <p className="text-muted-foreground">Ask questions about your data</p>
      </header>

      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Ask a question or search for entities..." className="pl-8" />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Suggested Questions</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Show all contracts with Acme Inc
          </Button>
          <Button variant="outline" size="sm">
            Who is John Smith?
          </Button>
          <Button variant="outline" size="sm">
            What projects is Sarah Johnson working on?
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          <CardDescription>Results for "Show all contracts with Acme Inc"</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none dark:prose-invert">
            <p>I found 3 contracts associated with Acme Inc:</p>
            <ul>
              <li>
                <strong>Contract #1001</strong> - Service Agreement for Project Alpha
                <div className="text-sm text-muted-foreground">Signed on Jan 15, 2023</div>
              </li>
              <li>
                <strong>Contract #1002</strong> - License Agreement for Software Products
                <div className="text-sm text-muted-foreground">Signed on Mar 22, 2023</div>
              </li>
              <li>
                <strong>Contract #1003</strong> - Non-Disclosure Agreement
                <div className="text-sm text-muted-foreground">Signed on Jun 10, 2023</div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold mb-4">Related Entities</h2>
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Acme Inc</CardTitle>
                <CardDescription>Company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Technology company with 3 active projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Project Alpha</CardTitle>
                <CardDescription>Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Active project with 2 related contracts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">John Smith</CardTitle>
                <CardDescription>Person</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Project Manager at Acme Inc</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{/* Document cards would go here */}</div>
        </TabsContent>

        <TabsContent value="people">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{/* People cards would go here */}</div>
        </TabsContent>

        <TabsContent value="companies">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{/* Company cards would go here */}</div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{/* Project cards would go here */}</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

