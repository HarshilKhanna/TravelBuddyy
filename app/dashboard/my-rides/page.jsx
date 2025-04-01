"use client"

import Link from "next/link"
import { Car, Plus } from "lucide-react"

import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { Card, CardContent, CardFooter, CardHeader } from "@/TravelBuddyy/components/ui/card.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/TravelBuddyy/components/ui/tabs.jsx"
import { Badge } from "@/TravelBuddyy/components/ui/badge.jsx"

export default function MyRidesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Rides</h1>
        <Button asChild>
          <Link href="/offer-ride">
            <Plus className="mr-2 h-4 w-4" />
            Offer a Ride
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="offered" className="space-y-4">
        <TabsList>
          <TabsTrigger value="offered">Rides Offered</TabsTrigger>
          <TabsTrigger value="booked">Rides Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="offered" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Rides You've Offered</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage the rides you're offering to others
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
                      <Badge variant="secondary">3 seats left</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 15, 2024 - 9:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="destructive">Cancel</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Chennai Airport to VIT</p>
                      <Badge variant="secondary">2 seats left</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 18, 2024 - 2:00 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="destructive">Cancel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booked" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Rides You've Booked</h2>
                  <p className="text-sm text-muted-foreground">
                    View and manage your booked rides
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
                      <Badge>Confirmed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 20, 2024 - 11:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button variant="destructive">Cancel</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Chennai Airport to VIT</p>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">March 22, 2024 - 3:00 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button variant="destructive">Cancel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Completed Rides</h2>
                  <p className="text-sm text-muted-foreground">
                    View your ride history
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
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">VIT to Chennai Airport</p>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">February 28, 2024 - 1:00 PM</p>
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