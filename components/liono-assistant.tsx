"use client"

import React from "react"
import { Sparkles, CheckCircle, LightbulbIcon, FileUp, Zap, AlertCircle, ArrowRight, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Suggestion {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  action: string;
  icon: React.ReactNode;
  completed?: boolean;
}

const suggestions: Suggestion[] = [
  {
    id: "sug-1",
    title: "Connect Microsoft 365",
    description: "Import 230+ additional documents and emails from your Microsoft 365 account",
    priority: "high",
    action: "Connect now",
    icon: <FileUp className="h-4 w-4" />
  },
  {
    id: "sug-2",
    title: "Review potential duplicates",
    description: "5 potential duplicate entities have been identified",
    priority: "medium",
    action: "Review entities",
    icon: <AlertCircle className="h-4 w-4" />
  },
  {
    id: "sug-3",
    title: "Set up weekly reports",
    description: "Receive automated insights for Project Alpha every Monday",
    priority: "low",
    action: "Configure reports",
    icon: <LightbulbIcon className="h-4 w-4" />
  },
  {
    id: "sug-4",
    title: "Complete your profile",
    description: "Add your role and contact information to personalize your experience",
    priority: "medium",
    action: "Complete profile",
    icon: <User className="h-4 w-4" />,
    completed: true
  }
];

const insights = [
  {
    id: "insight-1",
    title: "Communication patterns detected",
    description: "Increased email frequency between John Smith and Acme Inc in the last 2 weeks",
    category: "communication"
  },
  {
    id: "insight-2",
    title: "Potential new project",
    description: "Several documents mention 'Project Omega' which isn't in your knowledge base yet",
    category: "project"
  },
  {
    id: "insight-3",
    title: "Contract expiration alert",
    description: "3 contracts with Globex Corp are set to expire within 30 days",
    category: "contract"
  }
];

export function LIONOAssistant() {
  const [activeSuggestions, setActiveSuggestions] = React.useState(suggestions);
  const completedCount = activeSuggestions.filter(s => s.completed).length;
  const progress = (completedCount / activeSuggestions.length) * 100;
  
  const markCompleted = (id: string) => {
    setActiveSuggestions(prev => 
      prev.map(s => s.id === id ? { ...s, completed: true } : s)
    );
  };
  
  const getPriorityColor = (priority: Suggestion["priority"]) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-amber-500";
      case "low": return "text-blue-500";
      default: return "text-muted-foreground";
    }
  };
  
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-primary" />
          LIONO Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="suggestions" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="suggestions" className="flex-1">
              Suggestions
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                {activeSuggestions.length - completedCount}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex-1">
              Insights
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                {insights.length}
              </Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="suggestions">
            <div className="mb-4">
              <div className="flex justify-between items-center text-sm mb-1">
                <span>Setup progress</span>
                <span className="font-medium">{completedCount}/{activeSuggestions.length} completed</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="space-y-3">
              {activeSuggestions.map((suggestion) => (
                <div 
                  key={suggestion.id} 
                  className={`p-3 rounded-lg border ${suggestion.completed ? 'bg-muted/50' : 'hover:border-primary/50 transition-colors'}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`mt-0.5 ${suggestion.completed ? 'text-green-500' : getPriorityColor(suggestion.priority)}`}>
                      {suggestion.completed ? <CheckCircle className="h-5 w-5" /> : suggestion.icon}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center">
                        <h3 className={`font-medium ${suggestion.completed ? 'text-muted-foreground line-through' : ''}`}>
                          {suggestion.title}
                        </h3>
                        {!suggestion.completed && (
                          <Badge variant="outline" className={`ml-2 ${getPriorityColor(suggestion.priority)} border-current/30 bg-current/10`}>
                            {suggestion.priority} priority
                          </Badge>
                        )}
                      </div>
                      <p className={`text-sm ${suggestion.completed ? 'text-muted-foreground' : ''}`}>
                        {suggestion.description}
                      </p>
                      
                      {!suggestion.completed && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2"
                          onClick={() => markCompleted(suggestion.id)}
                        >
                          {suggestion.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="insights">
            <div className="space-y-3">
              {insights.map((insight) => (
                <div key={insight.id} className="p-3 rounded-lg border hover:border-primary/50 transition-colors">
                  <h3 className="font-medium flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-amber-500" />
                    {insight.title}
                  </h3>
                  <p className="text-sm mt-1">{insight.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      {insight.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      Explore <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 