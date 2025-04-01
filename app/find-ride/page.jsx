import Link from "next/link"
import { Search } from "lucide-react"
import { MainNav } from "@/TravelBuddyy/components/main-nav.jsx"
import { SiteFooter } from "@/TravelBuddyy/components/site-footer.jsx"
import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/TravelBuddyy/components/ui/card.jsx"
import { Input } from "@/TravelBuddyy/components/ui/input.jsx"
import { Separator } from "@/TravelBuddyy/components/ui/separator.jsx"
import { Badge } from "@/TravelBuddyy/components/ui/badge.jsx"

export default function FindRidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Perfect Ride
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Search for rides to your destination or offer a ride to others.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle>Search for Rides</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">From</label>
                        <Input placeholder="Enter departure city" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">To</label>
                        <Input placeholder="Enter destination city" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date</label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Seats</label>
                        <Input type="number" min="1" placeholder="Number of seats" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search Rides
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Available Rides
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Browse through available rides that match your criteria.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Example ride card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>VIT to Chennai Airport</CardTitle>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Departure: May 15, 2025
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Available Seats: 3
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Price: Rs.390 per seat
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 