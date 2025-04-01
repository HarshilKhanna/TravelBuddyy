"use client"

import Link from "next/link"
import { Bell, Plus } from "lucide-react"

import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { Card, CardContent, CardHeader } from "@/TravelBuddyy/components/ui/card.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/TravelBuddyy/components/ui/tabs.jsx"
import { Badge } from "@/TravelBuddyy/components/ui/badge.jsx"

export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ride Requests</h1>
        <Button asChild>
          <Link href="/find-ride">
            <Plus className="mr-2 h-4 w-4" />
            Find a Ride
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="incoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="incoming">Incoming Requests</TabsTrigger>
          <TabsTrigger value="sent">Sent Requests</TabsTrigger>
          <TabsTrigger value="history">Request History</TabsTrigger>
        </TabsList>

        <TabsContent value="incoming" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Incoming Requests</h2>
                  <p className="text-sm text-muted-foreground">
                    Review and respond to ride requests
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">VIT to Chennai Airport</p>
                      <Badge variant="secondary">2 seats requested</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 15, 2024 - 9:00 AM</p>
                    <p className="text-sm">From: Harshil Khanna</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button>Accept</Button>
                    <Button variant="outline">Decline</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Chennai Airport to VIT</p>
                      <Badge variant="secondary">1 seat requested</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 18, 2024 - 2:00 PM</p>
                    <p className="text-sm">From: Harshil Khanna</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button>Accept</Button>
                    <Button variant="outline">Decline</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Sent Requests</h2>
                  <p className="text-sm text-muted-foreground">
                    Track your ride requests
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">VIT to Chennai Airport</p>
                      <Badge>Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 20, 2024 - 11:00 AM</p>
                    <p className="text-sm">To: Harshil Khanna</p>
                  </div>
                  <Button variant="destructive">Cancel</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Chennai Airport to VIT</p>
                      <Badge variant="secondary">Awaiting Response</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 22, 2024 - 3:00 PM</p>
                    <p className="text-sm">To: Harshil Khanna</p>
                  </div>
                  <Button variant="destructive">Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Request History</h2>
                  <p className="text-sm text-muted-foreground">
                    View your past ride requests
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Chennai Airport to VIT</p>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 1, 2024 - 10:00 AM</p>
                    <p className="text-sm">With: Harshil Khanna</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">VIT to Chennai Airport</p>
                      <Badge variant="destructive">Declined</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">February 28, 2024 - 1:00 PM</p>
                    <p className="text-sm">To: Harshil Khanna</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 