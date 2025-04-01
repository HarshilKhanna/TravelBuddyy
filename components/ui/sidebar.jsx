"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Car, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button.jsx"
import { ScrollArea } from "@/components/ui/scroll-area.jsx"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx"
import { Menu } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
  },
  {
    title: "My Rides",
    href: "/dashboard/my-rides",
  },
  {
    title: "Requests",
    href: "/dashboard/requests",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
]

export function Sidebar({ className }) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[280px]">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
} 