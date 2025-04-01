"use client"

import React from "react"
import Link from "next/link"
import { MainNav } from "@/TravelBuddyy/components/main-nav.jsx"
import { SiteFooter } from "@/TravelBuddyy/components/site-footer.jsx"
import { Button } from "@/TravelBuddyy/components/ui/button.jsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/TravelBuddyy/components/ui/card.jsx"
import { Input } from "@/TravelBuddyy/components/ui/input.jsx"
import { Textarea } from "@/TravelBuddyy/components/ui/textarea.jsx"
import { Separator } from "@/TravelBuddyy/components/ui/separator.jsx"

const OfferRidePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Offer a Ride
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Share your journey and help others reach their destination.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle>Ride Details</CardTitle>
                  <CardDescription>
                    Fill in the details about your ride to help others find you.
                  </CardDescription>
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
                        <label className="text-sm font-medium">Time</label>
                        <Input type="time" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Available Seats</label>
                        <Input type="number" min="1" placeholder="Number of seats" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Price per Seat</label>
                        <Input type="number" min="0" placeholder="Price in INR" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Additional Details</label>
                      <Textarea
                        placeholder="Enter any additional information about your ride (e.g., luggage space, stops, etc.)"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Post Ride</Button>
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

export default OfferRidePage 