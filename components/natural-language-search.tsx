"use client"

import React, { useState } from "react"
import { Search, Send, Sparkles, X, Clock, FileText, Calendar, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

interface SearchExample {
  query: string
  description: string
  icon: React.ReactNode
}

const searchExamples: SearchExample[] = [
  {
    query: "Show all contracts with Acme Inc from last year",
    description: "Find documents by company and date",
    icon: <FileText className="h-4 w-4" />
  },
  {
    query: "Who is John Smith and what projects is he working on?",
    description: "Get information about people and their connections",
    icon: <Users className="h-4 w-4" />
  },
  {
    query: "Find meetings about Project Alpha scheduled for next week",
    description: "Search calendar and events",
    icon: <Calendar className="h-4 w-4" />
  },
  {
    query: "List all emails between John Smith and Acme Inc in the last 30 days",
    description: "Search communications by participants and timeframe",
    icon: <Mail className="h-4 w-4" />
  }
];

interface SearchHistory {
  id: number;
  query: string;
  timestamp: string;
}

const recentSearches: SearchHistory[] = [
  { id: 1, query: "Project Alpha budget documents", timestamp: "Yesterday, 3:45 PM" },
  { id: 2, query: "Emails from Sarah Johnson about quarterly review", timestamp: "March 19, 11:20 AM" },
  { id: 3, query: "Contract termination clauses with Globex Corp", timestamp: "March 15, 9:30 AM" }
];

export function NaturalLanguageSearch() {
  const [query, setQuery] = useState("");
  const [showExamples, setShowExamples] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate search process
    setTimeout(() => {
      setIsLoading(false);
      // In a real implementation, this would trigger a search and display results
      console.log("Searching for:", searchQuery);
    }, 1500);
  };
  
  const applyExample = (example: SearchExample) => {
    setQuery(example.query);
    setShowExamples(false);
  };
  
  return (
    <div className="mb-6">
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Ask a question about your data..."
            className="w-full pl-10 pr-20 py-3 border rounded-md bg-background text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          {query && (
            <button 
              className="absolute right-16 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setQuery("")}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setShowExamples(true)}
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search examples</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setShowHistory(true)}
                >
                  <Clock className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Recent searches</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button 
            size="icon" 
            onClick={() => handleSearch()} 
            disabled={isLoading || !query.trim()}
          >
            {isLoading ? (
              <div className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="flex items-center mt-2 text-xs text-muted-foreground">
        <Sparkles className="h-3 w-3 mr-1 text-amber-500" />
        <span>Try asking: "Show all emails from John about Project Alpha" or "Find contracts expiring this month"</span>
      </div>
      
      {/* Examples Dialog */}
      <Dialog open={showExamples} onOpenChange={setShowExamples}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Examples</DialogTitle>
            <DialogDescription>
              Try these examples to see how you can query your knowledge base
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            {searchExamples.map((example, i) => (
              <Card 
                key={i} 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => applyExample(example)}
              >
                <CardContent className="p-3 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {example.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{example.query}</p>
                    <p className="text-xs text-muted-foreground">{example.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* History Dialog */}
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recent Searches</DialogTitle>
            <DialogDescription>
              Your recent search queries
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-4">
            {recentSearches.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
                onClick={() => {
                  setQuery(item.query);
                  setShowHistory(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{item.query}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.timestamp}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 