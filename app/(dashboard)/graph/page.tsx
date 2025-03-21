"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { EnhancedGraph } from "@/components/enhanced-graph"
import { SourceAttribution } from "@/components/source-attribution"

export default function KnowledgeGraphPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Knowledge Graph</h1>
        <p className="text-muted-foreground">Visualize relationships between entities</p>
      </header>

      <Tabs defaultValue="graph">
        <TabsList className="mb-4">
          <TabsTrigger value="graph">Graph View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="sources">Source Attribution</TabsTrigger>
        </TabsList>

        <TabsContent value="graph">
          <EnhancedGraph />
        </TabsContent>

        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Entity Relationships</CardTitle>
              <CardDescription>Tabular view of entity connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2 text-left font-medium">Source Entity</th>
                      <th className="p-2 text-left font-medium">Relationship</th>
                      <th className="p-2 text-left font-medium">Target Entity</th>
                      <th className="p-2 text-left font-medium">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { source: "Acme Inc", relationship: "owns", target: "Project Alpha", confidence: "High" },
                      { source: "John Smith", relationship: "manages", target: "Project Alpha", confidence: "High" },
                      {
                        source: "Sarah Johnson",
                        relationship: "works on",
                        target: "Project Alpha",
                        confidence: "Medium",
                      },
                      {
                        source: "Contract #123",
                        relationship: "belongs to",
                        target: "Project Alpha",
                        confidence: "High",
                      },
                      {
                        source: "Globex Industries",
                        relationship: "partner of",
                        target: "Acme Inc",
                        confidence: "Medium",
                      },
                      {
                        source: "Robert Chen",
                        relationship: "works at",
                        target: "Globex Industries",
                        confidence: "High",
                      },
                      {
                        source: "Project Beta",
                        relationship: "assigned to",
                        target: "Sarah Johnson",
                        confidence: "High",
                      },
                      {
                        source: "Stark Industries",
                        relationship: "owns",
                        target: "Project Gamma",
                        confidence: "High",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-2">{row.source}</td>
                        <td className="p-2">{row.relationship}</td>
                        <td className="p-2">{row.target}</td>
                        <td className="p-2">{row.confidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sources">
          <SourceAttribution 
            entityName="Knowledge Graph" 
            entityType="System" 
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

