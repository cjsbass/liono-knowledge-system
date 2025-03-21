"use client"

import React from "react"
import { 
  Activity, FileText, Users, Building, Briefcase, 
  AlertCircle, ArrowRight, BarChart, Clock, FileCheck, Link as LinkIcon, Trash
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ActivityItem {
  id: number
  type: "add" | "update" | "connect" | "delete" | "analyze"
  title: string
  description: string
  time: string
  entityType?: "document" | "person" | "company" | "project"
  changes?: string
  entityId?: string
  icon?: React.ReactNode
}

const sampleActivities: ActivityItem[] = [
  {
    id: 1,
    type: "add",
    title: "New document detected",
    description: "Contract #1005 with Acme Inc",
    time: "10 minutes ago",
    entityType: "document",
    entityId: "doc-1005",
    icon: <FileText className="h-4 w-4" />
  },
  {
    id: 2,
    type: "connect",
    title: "New relationship identified",
    description: "John Smith and Sarah Johnson are working on Project Alpha",
    time: "1 hour ago",
    changes: "Connected John Smith and Sarah Johnson to Project Alpha with relationship type 'contributor'",
    icon: <LinkIcon className="h-4 w-4" />
  },
  {
    id: 3,
    type: "update",
    title: "Entity information updated",
    description: "Updated contact information for Acme Inc",
    time: "3 hours ago",
    entityType: "company",
    changes: "Phone: (555) 123-4567 → (555) 987-6543\nAddress: 123 Main St → 456 Corporate Ave",
    entityId: "company-acme",
    icon: <Building className="h-4 w-4" />
  },
  {
    id: 4,
    type: "analyze",
    title: "Sentiment analysis completed",
    description: "Analyzed 28 emails from Project Beta",
    time: "Yesterday",
    changes: "Overall sentiment: Positive (0.78)\nKey topics: Timeline, Budget, Resources",
    icon: <BarChart className="h-4 w-4" />
  },
  {
    id: 5,
    type: "delete",
    title: "Duplicate entity removed",
    description: "Merged duplicate entries for James Wilson",
    time: "Yesterday",
    entityType: "person",
    entityId: "person-james-2",
    icon: <Trash className="h-4 w-4" />
  },
  {
    id: 6,
    type: "add",
    title: "New project detected",
    description: "Project Gamma created by Stark Industries",
    time: "3 days ago",
    entityType: "project",
    entityId: "project-gamma",
    icon: <Briefcase className="h-4 w-4" />
  }
];

function getActivityIcon(activity: ActivityItem) {
  if (activity.icon) return activity.icon;
  
  switch (activity.type) {
    case "add":
      return activity.entityType === "document" ? <FileText className="h-4 w-4" /> : 
             activity.entityType === "person" ? <Users className="h-4 w-4" /> :
             activity.entityType === "company" ? <Building className="h-4 w-4" /> :
             activity.entityType === "project" ? <Briefcase className="h-4 w-4" /> :
             <FileCheck className="h-4 w-4" />;
    case "update":
      return <FileCheck className="h-4 w-4" />;
    case "connect":
      return <LinkIcon className="h-4 w-4" />;
    case "delete":
      return <Trash className="h-4 w-4" />;
    case "analyze":
      return <BarChart className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
}

function getActivityIconColor(activity: ActivityItem) {
  switch (activity.type) {
    case "add": return "bg-green-100 text-green-600";
    case "update": return "bg-blue-100 text-blue-600";
    case "connect": return "bg-purple-100 text-purple-600";
    case "delete": return "bg-red-100 text-red-600";
    case "analyze": return "bg-amber-100 text-amber-600";
    default: return "bg-slate-100 text-slate-600";
  }
}

function getActivityTypeBadge(type: ActivityItem["type"]) {
  const variants: Record<ActivityItem["type"], { bg: string, text: string }> = {
    add: { bg: "bg-green-100", text: "text-green-800" },
    update: { bg: "bg-blue-100", text: "text-blue-800" },
    connect: { bg: "bg-purple-100", text: "text-purple-800" },
    delete: { bg: "bg-red-100", text: "text-red-800" },
    analyze: { bg: "bg-amber-100", text: "text-amber-800" }
  };
  
  const { bg, text } = variants[type];
  
  return (
    <Badge variant="outline" className={`${bg} ${text} border-0`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Badge>
  );
}

export function ActivityStream() {
  const [viewAll, setViewAll] = React.useState(false);
  const displayedActivities = viewAll ? sampleActivities : sampleActivities.slice(0, 4);
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="mr-2 h-5 w-5 text-primary" />
            <CardTitle>Activity Stream</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <Clock className="h-4 w-4" />
            <span>Last 7 days</span>
          </Button>
        </div>
        <CardDescription>Recent changes to your knowledge base</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute h-full w-px bg-border left-6 top-0"></div>
          <ol className="space-y-6">
            {displayedActivities.map((activity) => (
              <li key={activity.id} className="flex gap-4 relative pl-12">
                <div className={`absolute left-4 w-5 h-5 rounded-full ${getActivityIconColor(activity)} flex items-center justify-center text-white text-xs`}>
                  {getActivityIcon(activity)}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium leading-none">{activity.title}</p>
                    {getActivityTypeBadge(activity.type)}
                  </div>
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                  {activity.changes && (
                    <div className="text-xs bg-muted p-2 rounded-md mt-2 whitespace-pre-line font-mono">
                      {activity.changes}
                    </div>
                  )}
                  {activity.entityId && (
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs mt-1">
                      View details <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "View All Activity"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 