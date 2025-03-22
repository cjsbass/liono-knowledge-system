"use client"

import React, { useState } from "react"
import { AlertCircle, Check, X, Users, Building, FileText, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface EntityAmbiguity {
  id: string;
  type: "duplicate" | "relation" | "classification";
  question: string;
  description: string;
  options: {
    id: string;
    label: string;
    detail?: string;
  }[];
  entityType: "person" | "organization" | "document" | "project";
}

const sampleAmbiguities: EntityAmbiguity[] = [
  {
    id: "amb-1",
    type: "duplicate",
    question: "Are these the same person?",
    description: `"John Smith" in Project Alpha documents and "J. Smith" in Contract #1001`,
    options: [
      { id: "yes", label: "Yes, same person" },
      { id: "no", label: "No, different people" },
      { id: "unsure", label: "Not sure" }
    ],
    entityType: "person"
  },
  {
    id: "amb-2",
    type: "relation",
    question: "What is the relationship between Sarah Johnson and Project Beta?",
    description: "Based on email communications and meeting notes",
    options: [
      { id: "lead", label: "Project Lead", detail: "Main responsibility for the project" },
      { id: "contributor", label: "Contributor", detail: "Works on the project but not leading" },
      { id: "stakeholder", label: "Stakeholder", detail: "Interested party but not directly working on it" },
      { id: "unrelated", label: "Unrelated", detail: "No direct relationship" }
    ],
    entityType: "person"
  },
  {
    id: "amb-3",
    type: "classification",
    question: "How should we classify this document?",
    description: "\"Quarterly Review.docx\" found in Project Alpha folder",
    options: [
      { id: "report", label: "Report" },
      { id: "minutes", label: "Meeting Minutes" },
      { id: "contract", label: "Contract" },
      { id: "other", label: "Other" }
    ],
    entityType: "document"
  }
];

function getEntityIcon(type: EntityAmbiguity["entityType"]) {
  switch (type) {
    case "person": return <Users className="h-4 w-4" />;
    case "organization": return <Building className="h-4 w-4" />;
    case "document": return <FileText className="h-4 w-4" />;
    case "project": return <Briefcase className="h-4 w-4" />;
  }
}

function getEntityTypeBadge(type: EntityAmbiguity["entityType"]) {
  const variants: Record<EntityAmbiguity["entityType"], { bg: string, text: string }> = {
    person: { bg: "bg-green-100", text: "text-green-800" },
    organization: { bg: "bg-blue-100", text: "text-blue-800" },
    document: { bg: "bg-purple-100", text: "text-purple-800" },
    project: { bg: "bg-amber-100", text: "text-amber-800" }
  };
  
  const { bg, text } = variants[type];
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <Badge variant="outline" className={`${bg} ${text} border-0`}>
      <div className="flex items-center gap-1">
        {getEntityIcon(type)}
        <span>{label}</span>
      </div>
    </Badge>
  );
}

export function EntityVerification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleResponse = (ambiguityId: string, optionId: string) => {
    setResponses(prev => ({ ...prev, [ambiguityId]: optionId }));
    
    // Move to next ambiguity or show thank you message if done
    if (currentIndex < sampleAmbiguities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowThankYou(true);
    }
  };
  
  const skipCurrent = () => {
    if (currentIndex < sampleAmbiguities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowThankYou(true);
    }
  };
  
  const resetState = () => {
    setCurrentIndex(0);
    setResponses({});
    setShowThankYou(false);
  };
  
  const currentAmbiguity = sampleAmbiguities[currentIndex];
  const progress = (Object.keys(responses).length / sampleAmbiguities.length) * 100;
  
  if (showThankYou) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            Thank You!
          </CardTitle>
          <CardDescription>
            Your feedback helps improve the accuracy of the knowledge base
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You've helped resolve {Object.keys(responses).length} out of {sampleAmbiguities.length} ambiguities.</p>
          <Button onClick={resetState}>Review More</Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
            Entity Verification
          </CardTitle>
          {getEntityTypeBadge(currentAmbiguity.entityType)}
        </div>
        <CardDescription>
          Help improve your knowledge base by resolving these ambiguities
        </CardDescription>
        <Progress value={progress} className="h-1 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-1">{currentAmbiguity.question}</h3>
            <p className="text-sm text-muted-foreground">{currentAmbiguity.description}</p>
          </div>
          
          <div className="grid gap-2">
            {currentAmbiguity.options.map((option) => (
              <Button 
                key={option.id} 
                variant="outline" 
                className="justify-start h-auto py-3 px-4"
                onClick={() => handleResponse(currentAmbiguity.id, option.id)}
              >
                <div className="text-left">
                  <div className="font-medium">{option.label}</div>
                  {option.detail && (
                    <div className="text-xs text-muted-foreground mt-0.5">{option.detail}</div>
                  )}
                </div>
              </Button>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-2 border-t">
            <Button variant="ghost" size="sm" onClick={skipCurrent}>
              Skip this question
            </Button>
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} of {sampleAmbiguities.length}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 