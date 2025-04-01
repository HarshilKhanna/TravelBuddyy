"use client"

import { User, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button.jsx"
import { Card, CardContent, CardHeader } from "@/components/ui/card.jsx"
import { Badge } from "@/components/ui/badge.jsx"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button>
          <User className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <User className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Harshil Khanna</h2>
                <p className="text-sm text-muted-foreground">Member since 2024</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>harshil.khanna@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+91 8178825433</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Verified User</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Account Statistics</h2>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Rides</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Completed Rides</span>
                <span className="font-medium">20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rating</span>
                <span className="font-medium">4.8/5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 