import Link from "next/link"
import {
  LayoutDashboard,
  Network,
  Users,
  Building,
  Briefcase,
  FileText,
  MapPin,
  Clock,
  Settings,
  HelpCircle,
  Search,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LionIcon } from "@/components/lion-icon"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Knowledge Graph",
    href: "/graph",
    icon: <Network className="mr-2 h-4 w-4" />,
  },
  {
    title: "Search",
    href: "/search",
    icon: <Search className="mr-2 h-4 w-4" />,
  },
  {
    title: "Timeline",
    href: "/timeline",
    icon: <Clock className="mr-2 h-4 w-4" />,
  },
  {
    title: "Entities",
    isHeader: true,
  },
  {
    title: "People",
    href: "/entities/people",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Companies",
    href: "/entities/companies",
    icon: <Building className="mr-2 h-4 w-4" />,
  },
  {
    title: "Projects",
    href: "/entities/projects",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
  },
  {
    title: "Documents",
    href: "/entities/documents",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Locations",
    href: "/entities/locations",
    icon: <MapPin className="mr-2 h-4 w-4" />,
  },
  {
    title: "System",
    isHeader: true,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
  {
    title: "Help",
    href: "/help",
    icon: <HelpCircle className="mr-2 h-4 w-4" />,
  },
]

export function SidebarNav() {
  return (
    <div className="w-64 border-r bg-background min-h-screen">
      <div className="py-4 px-3">
        <div className="flex items-center justify-between px-2 mb-6">
          <div className="flex items-center">
            <LionIcon className="h-6 w-6 mr-2 text-amber-500" />
            <h2 className="text-lg font-semibold">LIONO</h2>
          </div>
        </div>
        
        {/* Account Section */}
        <div className="px-2 mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">John Smith</span>
                  <span className="text-xs text-muted-foreground">Administrator</span>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="space-y-1">
          {navItems.map((item, index) => {
            if (item.isHeader) {
              return (
                <h3 key={`header-${index}`} className="mb-2 mt-4 px-2 text-xs font-semibold text-muted-foreground">
                  {item.title}
                </h3>
              )
            }

            return (
              <Link
                key={`item-${index}`}
                href={item.href || "#"}
                className="flex items-center w-full px-2 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                {item.icon}
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

