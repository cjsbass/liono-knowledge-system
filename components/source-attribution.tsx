"use client"

import React from "react"
import { ArrowUpRight, FileText, Mail, Calendar, MessageSquare, Globe, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface Source {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  origin: string;
  type: "email" | "document" | "meeting" | "web" | "chat";
  confidence: number;
  url?: string;
}

interface SourceAttributionProps {
  entityName: string;
  entityType: string;
  sources: Source[];
}

function getSourceIcon(type: Source["type"]) {
  switch (type) {
    case "email": return <Mail className="h-4 w-4" />;
    case "document": return <FileText className="h-4 w-4" />;
    case "meeting": return <Calendar className="h-4 w-4" />;
    case "chat": return <MessageSquare className="h-4 w-4" />;
    case "web": return <Globe className="h-4 w-4" />;
  }
}

function getSourceBadge(type: Source["type"]) {
  const variants = {
    email: { bg: "bg-blue-100", text: "text-blue-800" },
    document: { bg: "bg-purple-100", text: "text-purple-800" },
    meeting: { bg: "bg-green-100", text: "text-green-800" },
    web: { bg: "bg-amber-100", text: "text-amber-800" },
    chat: { bg: "bg-pink-100", text: "text-pink-800" }
  };
  
  const { bg, text } = variants[type];
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <Badge variant="outline" className={`${bg} ${text} border-0`}>
      <div className="flex items-center gap-1">
        {getSourceIcon(type)}
        <span>{label}</span>
      </div>
    </Badge>
  );
}

function formatConfidence(confidence: number) {
  const percentage = Math.round(confidence * 100);
  let color = "text-red-600";
  
  if (percentage >= 90) {
    color = "text-green-600";
  } else if (percentage >= 70) {
    color = "text-amber-600";
  }
  
  return <span className={`font-medium ${color}`}>{percentage}%</span>;
}

const sampleSources: Source[] = [
  {
    id: "src-1",
    title: "Contract #1001 - Acme Inc",
    excerpt: "John Smith (hereafter \"Client\") agrees to provide consulting services to Acme Inc...",
    date: "January 15, 2025",
    origin: "Google Drive",
    type: "document",
    confidence: 0.95
  },
  {
    id: "src-2",
    title: "RE: Project Alpha kickoff",
    excerpt: "Hi team, As discussed, John will be leading the technical implementation for Project Alpha starting next month...",
    date: "February 3, 2025",
    origin: "Email from Sarah Johnson",
    type: "email",
    confidence: 0.87
  },
  {
    id: "src-3",
    title: "Weekly Status Meeting",
    excerpt: "John presented the implementation plan for the machine learning components of Project Alpha...",
    date: "February 10, 2025",
    origin: "Meeting Notes",
    type: "meeting",
    confidence: 0.78
  },
  {
    id: "src-4",
    title: "Acme Inc - Team Directory",
    excerpt: "John Smith - Senior ML Engineer - j.smith@acmeinc.example.com",
    date: "March 1, 2025",
    origin: "acmeinc.example.com",
    type: "web",
    confidence: 0.92,
    url: "https://www.acmeinc.example.com/team"
  }
];

export function SourceAttribution({ 
  entityName = "John Smith", 
  entityType = "Person",
  sources = sampleSources 
}: Partial<SourceAttributionProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Source Attribution</span>
          <Badge variant="outline" className="ml-2">
            {sources.length} sources
          </Badge>
        </CardTitle>
        <CardDescription>
          Original sources where information about {entityName} was found
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sources.map((source) => (
            <div key={source.id}>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {getSourceIcon(source.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{source.title}</p>
                    {getSourceBadge(source.type)}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground gap-2">
                    <span>{source.date}</span>
                    <span>•</span>
                    <span>{source.origin}</span>
                    <span>•</span>
                    <span>Confidence: {formatConfidence(source.confidence)}</span>
                  </div>
                  <div className="text-sm mt-2 italic text-muted-foreground border-l-2 border-muted pl-3 py-1">
                    "{source.excerpt}"
                  </div>
                  
                  {source.url && (
                    <Button variant="link" size="sm" className="h-auto p-0 mt-1 flex items-center gap-1" asChild>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        View source <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <Separator className="mt-3" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 