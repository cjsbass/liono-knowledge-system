"use client"

import type React from "react"
import Link from "next/link"
import { 
  Users, Building, Briefcase, FileText, Search, 
  RefreshCw, BarChart, Clock, Send
} from "lucide-react"
import { EnhancedStatCard } from "@/components/enhanced-stat-card"
import { NaturalLanguageSearch } from "@/components/natural-language-search"
import { ActivityStream } from "@/components/activity-stream"
import { EntityVerification } from "@/components/entity-verification"
import { LIONOAssistant } from "@/components/liono-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">LIONO Dashboard</h1>
        <p className="text-muted-foreground">Overview of your knowledge management system</p>
      </header>

      {/* Enhanced Natural Language Search */}
      <NaturalLanguageSearch />

      {/* Data Processing Insights */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <EnhancedStatCard
          title="Processed Files"
          value="1,246"
          icon={<FileText className="h-4 w-4" />}
          description="Documents, emails, and attachments"
          trend="+128 since yesterday"
          trendUp={true}
        />
        <EnhancedStatCard
          title="Last Sync"
          value="4m ago"
          icon={<RefreshCw className="h-4 w-4" />}
          description="Google Drive, Gmail, Calendar"
          trend="Next sync in ~26m"
        />
        <EnhancedStatCard
          title="Entities Found"
          value="843"
          icon={<Users className="h-4 w-4" />}
          description="People, companies, projects, etc."
          trend="+35 new entities this week"
          trendUp={true}
        />
        <EnhancedStatCard
          title="Confidence Score"
          value="92%"
          icon={<BarChart className="h-4 w-4" />}
          description="Entity recognition accuracy"
          trend="+3% from previous week"
          trendUp={true}
        />
      </div>

      {/* Main Dashboard Content in Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Activity Stream */}
          <ActivityStream />
          
          {/* Entity Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Entity Statistics</CardTitle>
              <CardDescription>Breakdown of entities in your knowledge base</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">People</p>
                      <p className="text-sm text-muted-foreground">28 identified</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Building className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Companies</p>
                      <p className="text-sm text-muted-foreground">12 identified</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Projects</p>
                      <p className="text-sm text-muted-foreground">15 inferred</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Documents</p>
                      <p className="text-sm text-muted-foreground">342 processed</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* LIONO Assistant */}
          <LIONOAssistant />
          
          {/* Entity Verification */}
          <EntityVerification />
        </div>
      </div>
      
      {/* Knowledge Graph Preview */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Knowledge Graph Preview</CardTitle>
              <CardDescription>Visual representation of entity relationships</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link href="/graph">View Full Graph</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-[300px] p-0">
          <div className="bg-muted/20 border border-dashed rounded-lg h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Interactive preview coming soon</p>
              <Button asChild>
                <Link href="/graph">Explore Knowledge Graph</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 justify-center" asChild>
              <Link href="/search">
                <Search className="h-5 w-5 mb-1" />
                <span>Advanced Search</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 justify-center">
              <FileText className="h-5 w-5 mb-1" />
              <span>Upload Documents</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 justify-center" asChild>
              <Link href="/entities/people">
                <Users className="h-5 w-5 mb-1" />
                <span>Manage People</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 justify-center">
              <Clock className="h-5 w-5 mb-1" />
              <span>View Timeline</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

