import type React from "react"
import { Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers and learn how to use LIONO</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for help articles..."
          className="w-full pl-8 py-2 pr-4 border rounded-md bg-background"
        />
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is LIONO?</AccordionTrigger>
                  <AccordionContent>
                    LIONO is a comprehensive knowledge management system designed to help organizations store, organize, and visualize relationships between people, companies, projects, documents, and locations. It provides powerful search capabilities and a visual knowledge graph to help you discover insights and connections in your data.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I add new entities to LIONO?</AccordionTrigger>
                  <AccordionContent>
                    You can add new entities (people, companies, projects, etc.) by navigating to the respective section in the sidebar and clicking the "Add New" button. Fill in the required information in the form and click "Save" to create the new entity. You can also establish relationships between entities during this process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I import data from other systems?</AccordionTrigger>
                  <AccordionContent>
                    Yes, LIONO supports importing data from various formats including CSV, JSON, and XML. You can also connect to external systems through our API or use our built-in integrations with platforms like Google Workspace, Microsoft 365, and more. To get started with importing, go to Settings → Integrations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How does the knowledge graph work?</AccordionTrigger>
                  <AccordionContent>
                    The knowledge graph is a visual representation of entities and their relationships in your knowledge base. Entities are displayed as nodes, and relationships between them are shown as connecting lines. You can zoom, pan, and click on entities to explore their connections and details. The graph automatically updates as you add or modify entities in your knowledge base.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I back up my data?</AccordionTrigger>
                  <AccordionContent>
                    LIONO provides both automatic and manual backup options. You can configure automatic backups in Settings → General → Automatic Backups. For manual backups, go to Settings → General and click the "Create Backup" button. Backups can be stored locally or in cloud storage services like AWS S3, Google Cloud Storage, or Azure Blob Storage.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>What are the system requirements for LIONO?</AccordionTrigger>
                  <AccordionContent>
                    LIONO is a web-based application that runs in modern browsers including Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend at least 8GB of RAM and a recent processor. If you're hosting LIONO on-premises, you'll need a server with sufficient resources based on your expected data volume and number of users.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle>User Guides</CardTitle>
              <CardDescription>Comprehensive documentation for using LIONO</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Getting Started</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">A complete introduction to LIONO and its features</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>System overview</li>
                      <li>Setting up your account</li>
                      <li>Importing your first data</li>
                      <li>Navigating the interface</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Managing Entities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Learn how to work with various entity types</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>People and organizations</li>
                      <li>Projects and documents</li>
                      <li>Locations and events</li>
                      <li>Creating relationships</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Using the Knowledge Graph</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Visualize and explore data connections</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Graph navigation</li>
                      <li>Filtering and search</li>
                      <li>Analyzing connections</li>
                      <li>Sharing graph views</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Advanced Search Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Master LIONO's powerful search capabilities</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Boolean search operators</li>
                      <li>Filtering by entity type</li>
                      <li>Using natural language</li>
                      <li>Saving search queries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tutorials">
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch step-by-step demonstrations of LIONO features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "LIONO Basics", duration: "5:32", thumbnail: "/placeholder.jpg" },
                  { title: "Setting Up Your Knowledge Base", duration: "12:45", thumbnail: "/placeholder.jpg" },
                  { title: "Working with Entities", duration: "8:17", thumbnail: "/placeholder.jpg" },
                  { title: "Advanced Search Techniques", duration: "15:03", thumbnail: "/placeholder.jpg" },
                  { title: "Exploring the Knowledge Graph", duration: "10:21", thumbnail: "/placeholder.jpg" },
                  { title: "Customizing Your Dashboard", duration: "7:55", thumbnail: "/placeholder.jpg" },
                ].map((video, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative bg-muted">
                      <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5.13802L18 12L8 18.862L8 5.13802Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Support Options</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Email Support</h4>
                    <p className="text-sm text-muted-foreground mb-3">Send us a message and we'll respond within 24 hours</p>
                    <p className="text-sm">support@liono.example.com</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Live Chat</h4>
                    <p className="text-sm text-muted-foreground mb-3">Chat with our support agents in real-time</p>
                    <button className="text-sm font-medium text-primary">Start Chat</button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Phone Support</h4>
                    <p className="text-sm text-muted-foreground mb-3">Available Monday-Friday, 9am-5pm ET</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Community Resources</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Community Forum</h4>
                    <p className="text-sm text-muted-foreground mb-3">Connect with other LIONO users and share knowledge</p>
                    <button className="text-sm font-medium text-primary">Visit Forum</button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Feature Requests</h4>
                    <p className="text-sm text-muted-foreground mb-3">Suggest new features and vote on existing ideas</p>
                    <button className="text-sm font-medium text-primary">Submit Request</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 