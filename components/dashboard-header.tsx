"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { WorkspaceSelector } from "@/components/workspace-selector"
import { useApiContext } from "@/contexts/api-context"

export function DashboardHeader() {
  const { signOut, user } = useClerk();
  const router = useRouter();
  const { currentUserData } = useApiContext();
  
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
      <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
        <img src="/lion-snout.png" alt="LIONO" className="h-6 w-6" />
        <span>LIONO</span>
      </Link>
      <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
        <Link
          href="/dashboard"
          className="font-medium transition-colors hover:text-foreground/80"
        >
          Dashboard
        </Link>
        <Link
          href="/graph"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Graph
        </Link>
        <Link
          href="/entities/people"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          People
        </Link>
        <Link
          href="/entities/companies"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Companies
        </Link>
        <Link
          href="/entities/projects"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Projects
        </Link>
        <Link
          href="/entities/documents"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Documents
        </Link>
        <Link
          href="/entities/locations"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Locations
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <WorkspaceSelector />
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName || ""} />
                <AvatarFallback>{user?.firstName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.fullName || "User"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.primaryEmailAddress?.emailAddress || ""}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 