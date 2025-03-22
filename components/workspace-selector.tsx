"use client";

import { useState, useEffect } from "react";
import { useApiContext } from "@/contexts/api-context";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function WorkspaceSelector() {
  const { workspacesList, currentWorkspace, setCurrentWorkspace, isLoadingWorkspaces, refreshWorkspaces } = useApiContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!workspacesList) {
      refreshWorkspaces();
    }
  }, [workspacesList, refreshWorkspaces]);

  if (isLoadingWorkspaces) {
    return (
      <Button variant="outline" className="w-[200px] justify-start">
        <span className="animate-pulse">Loading workspaces...</span>
      </Button>
    );
  }

  if (!workspacesList || workspacesList.length === 0) {
    return (
      <Button variant="outline" className="w-[200px] justify-start">
        No workspaces available
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {currentWorkspace ? currentWorkspace.name : "Select workspace..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search workspaces..." />
          <CommandEmpty>No workspace found.</CommandEmpty>
          <CommandGroup>
            {workspacesList.map((workspace) => (
              <CommandItem
                key={workspace.id}
                value={workspace.id}
                onSelect={() => {
                  setCurrentWorkspace(workspace);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentWorkspace?.id === workspace.id
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {workspace.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 