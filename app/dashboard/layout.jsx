"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Car, Home, Menu, Settings, User, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { MainNav } from "@/TravelBuddyy/components/main-nav.jsx"
import { ThemeToggle } from "@/TravelBuddyy/components/theme-toggle.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/TravelBuddyy/components/ui/avatar.jsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/TravelBuddyy/components/ui/dropdown-menu.jsx"
import { Sidebar } from "@/TravelBuddyy/components/ui/sidebar.jsx"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex-1 flex">
        <div className="hidden md:flex w-64 flex-col border-r">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 