"use client"

import React, { useEffect, useRef, useState } from "react"
import { Search, ZoomIn, ZoomOut, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

interface Node {
  id: string
  group: string
  label: string
  size: number
}

interface Link {
  source: string
  target: string
  type: string
  value: number
}

interface GraphData {
  nodes: Node[]
  links: Link[]
}

// Sample graph data
const sampleGraphData: GraphData = {
  nodes: [
    { id: "acme", group: "company", label: "Acme Inc", size: 25 },
    { id: "john", group: "person", label: "John Smith", size: 20 },
    { id: "sarah", group: "person", label: "Sarah Johnson", size: 20 },
    { id: "project_alpha", group: "project", label: "Project Alpha", size: 22 },
    { id: "project_beta", group: "project", label: "Project Beta", size: 22 },
    { id: "contract123", group: "document", label: "Contract #123", size: 18 },
    { id: "meeting456", group: "document", label: "Meeting Notes #456", size: 16 },
    { id: "globex", group: "company", label: "Globex Corp", size: 23 },
    { id: "stark", group: "company", label: "Stark Industries", size: 24 },
    { id: "robert", group: "person", label: "Robert Chen", size: 18 },
    { id: "james", group: "person", label: "James Wilson", size: 19 },
    { id: "project_gamma", group: "project", label: "Project Gamma", size: 21 }
  ],
  links: [
    { source: "john", target: "acme", type: "works_at", value: 5 },
    { source: "sarah", target: "acme", type: "works_at", value: 5 },
    { source: "john", target: "project_alpha", type: "leads", value: 8 },
    { source: "sarah", target: "project_alpha", type: "contributes", value: 6 },
    { source: "sarah", target: "project_beta", type: "leads", value: 8 },
    { source: "acme", target: "project_alpha", type: "owns", value: 10 },
    { source: "acme", target: "project_beta", type: "owns", value: 10 },
    { source: "project_alpha", target: "contract123", type: "contains", value: 4 },
    { source: "john", target: "meeting456", type: "attended", value: 3 },
    { source: "sarah", target: "meeting456", type: "attended", value: 3 },
    { source: "robert", target: "globex", type: "works_at", value: 5 },
    { source: "robert", target: "project_beta", type: "contributes", value: 7 },
    { source: "james", target: "stark", type: "works_at", value: 5 },
    { source: "james", target: "project_gamma", type: "leads", value: 8 },
    { source: "stark", target: "project_gamma", type: "owns", value: 10 },
    { source: "globex", target: "project_beta", type: "collaborates", value: 6 },
    { source: "globex", target: "stark", type: "partner", value: 7 },
  ]
};

// Get color based on node group
function getNodeColor(group: string): string {
  switch (group) {
    case "company": return "#3b82f6";  // blue
    case "person": return "#10b981";   // green
    case "project": return "#f59e0b";  // amber
    case "document": return "#8b5cf6"; // purple
    default: return "#6b7280";         // gray
  }
}

export function EnhancedGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoom, setZoom] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Simulate force-directed layout positioning without actual force simulation
  const graphData = React.useMemo(() => {
    const width = 800;
    const height = 600;
    const center = { x: width / 2, y: height / 2 };
    const radius = Math.min(width, height) * 0.4;
    
    // Position nodes in a circle
    const positionedNodes = sampleGraphData.nodes.map((node, i) => {
      const angle = (i / sampleGraphData.nodes.length) * 2 * Math.PI;
      const x = center.x + radius * Math.cos(angle);
      const y = center.y + radius * Math.sin(angle);
      return { ...node, x, y };
    });
    
    // Filter nodes if search term or filter is applied
    const filteredNodes = positionedNodes.filter(node => {
      const matchesSearch = !searchTerm || 
        node.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === "all" || node.group === filterType;
      return matchesSearch && matchesFilter;
    });
    
    // Only include links where both source and target nodes are included
    const nodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredLinks = sampleGraphData.links.filter(link => 
      nodeIds.has(link.source) && nodeIds.has(link.target)
    );
    
    return { nodes: filteredNodes, links: filteredLinks };
  }, [searchTerm, filterType]);

  // Handle node click
  const handleNodeClick = (node: Node) => {
    setSelectedNode(node === selectedNode ? null : node);
  };

  return (
    <div className="border rounded-lg p-4 h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search entities..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="person">People</SelectItem>
            <SelectItem value="company">Companies</SelectItem>
            <SelectItem value="project">Projects</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider 
            className="w-20" 
            value={[zoom]} 
            min={0.5} 
            max={2} 
            step={0.1} 
            onValueChange={([value]) => setZoom(value)} 
          />
          <Button variant="outline" size="icon" onClick={() => setZoom(z => Math.min(2, z + 0.1))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative flex-1 border rounded-lg overflow-hidden bg-background/50">
        <svg 
          ref={svgRef} 
          width="100%" 
          height="100%" 
          viewBox="0 0 800 600" 
          className="w-full h-full"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
        >
          <g>
            {/* Draw Links */}
            {graphData.links.map((link, i) => {
              const source = graphData.nodes.find(n => n.id === link.source);
              const target = graphData.nodes.find(n => n.id === link.target);
              if (!source || !target) return null;
              
              // Highlight links connected to selected node
              const isHighlighted = selectedNode && 
                (link.source === selectedNode.id || link.target === selectedNode.id);
              
              return (
                <line 
                  key={`link-${i}`}
                  x1={source.x} 
                  y1={source.y} 
                  x2={target.x} 
                  y2={target.y} 
                  stroke={isHighlighted ? "#000" : "#94a3b8"} 
                  strokeWidth={isHighlighted ? 2 : 1.5} 
                  opacity={selectedNode && !isHighlighted ? 0.3 : 0.7}
                />
              );
            })}
            
            {/* Draw Nodes */}
            {graphData.nodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              const isConnected = selectedNode && graphData.links.some(
                link => (link.source === selectedNode.id && link.target === node.id) || 
                       (link.target === selectedNode.id && link.source === node.id)
              );
              const opacity = selectedNode && !isSelected && !isConnected ? 0.4 : 1;
              
              return (
                <g 
                  key={node.id} 
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleNodeClick(node)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle 
                    r={node.size} 
                    fill={getNodeColor(node.group)} 
                    stroke={isSelected ? "#000" : "none"}
                    strokeWidth={2}
                    opacity={opacity}
                  />
                  <text 
                    textAnchor="middle" 
                    dy="30" 
                    fontSize="12"
                    opacity={opacity}
                    fontWeight={isSelected ? "bold" : "normal"}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        
        {selectedNode && (
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-lg max-w-xs">
            <h3 className="font-semibold text-lg">{selectedNode.label}</h3>
            <p className="text-xs text-muted-foreground capitalize mb-2">{selectedNode.group}</p>
            <div className="text-sm">
              <p><span className="font-medium">Connections:</span> {graphData.links.filter(
                link => link.source === selectedNode.id || link.target === selectedNode.id
              ).length}</p>
              <div className="mt-2">
                <h4 className="text-xs font-semibold mb-1">Related Entities:</h4>
                <ul className="text-xs space-y-1">
                  {graphData.links
                    .filter(link => link.source === selectedNode.id || link.target === selectedNode.id)
                    .map((link, i) => {
                      const relatedNode = link.source === selectedNode.id 
                        ? graphData.nodes.find(n => n.id === link.target)
                        : graphData.nodes.find(n => n.id === link.source);
                      if (!relatedNode) return null;
                      
                      return (
                        <li key={i} className="flex items-center justify-between">
                          <span>{relatedNode.label}</span>
                          <span className="text-muted-foreground">{link.type}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3"
              onClick={() => setSelectedNode(null)}
            >
              Close
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-2 flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#10b981] mr-1"></div>
            <span>People</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#3b82f6] mr-1"></div>
            <span>Companies</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b] mr-1"></div>
            <span>Projects</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6] mr-1"></div>
            <span>Documents</span>
          </div>
        </div>
        <div>
          {graphData.nodes.length} entities, {graphData.links.length} connections
        </div>
      </div>
    </div>
  );
} 