"use client"

import { Bell } from "lucide-react"

import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/TravelBuddyy/components/ui/card.jsx"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Example notification */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border">
                <div className="flex-1">
                  <p className="font-medium">New Ride Request</p>
                  <p className="text-sm text-gray-500">Harshil Khanna requested a ride to Bangalore</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>

              {/* Another example notification */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border">
                <div className="flex-1">
                  <p className="font-medium">Ride Confirmed</p>
                  <p className="text-sm text-gray-500">Your ride to Bangalore has been confirmed</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>

              {/* Empty state */}
              <div className="text-center py-8 text-gray-500">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No new notifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 