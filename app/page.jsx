import Link from "next/link"
import { Building2, Calendar, Car, ChevronDown, MapPin, Search, User } from "lucide-react"

import { MainNav } from "@/components/main-nav.jsx"
import { SiteFooter } from "@/components/site-footer.jsx"
import { Button } from "@/components/ui/button.jsx"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Travel Companion
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with fellow VIT Vellore students for shared rides to airports, cities, and more. Save money,
                    make friends, and travel sustainably.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12" asChild>
                    <Link href="/find-ride">Find a Ride</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12" asChild>
                    <Link href="/offer-ride">Offer a Ride</Link>
                  </Button>
                </div>
                <div className="flex justify-center pt-8 md:justify-start">
                  <Button variant="ghost" size="icon" className="animate-bounce">
                    <ChevronDown className="h-6 w-6" />
                    <span className="sr-only">Scroll Down</span>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg opacity-20 blur-xl" />
                  <div className="relative rounded-lg border bg-card p-8 shadow-lg">
                    <div className="space-y-2 mb-6">
                      <h3 className="text-2xl font-bold">Popular Destinations</h3>
                      <p className="text-sm text-muted-foreground">Most frequent travel routes from VIT Vellore</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Chennai Airport</div>
                          <div className="text-sm text-muted-foreground">3 hours drive</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Bangalore City</div>
                          <div className="text-sm text-muted-foreground">4 hours drive</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Chennai City</div>
                          <div className="text-sm text-muted-foreground">2.5 hours drive</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow students for shared rides in just a few simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Find a Ride</h3>
                <p className="text-center text-muted-foreground">
                  Search for available rides based on your destination and travel date
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-center text-muted-foreground">
                  Request to join a ride and connect with the driver through our secure platform
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Travel Together</h3>
                <p className="text-center text-muted-foreground">
                  Share the journey, split the costs, and make new friends along the way
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 