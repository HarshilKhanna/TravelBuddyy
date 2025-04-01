"use client"

import React from "react"
import { User, Mail, Phone, Car } from "lucide-react"
import { Button } from "@/components/ui/button.jsx"
import { Card, CardContent, CardHeader } from "@/components/ui/card.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx"
import { Badge } from "@/components/ui/badge.jsx"

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button>
          <User className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Account Information</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Profile Picture</p>
                  <p className="text-sm text-muted-foreground">Update your profile picture</p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-sm text-muted-foreground">Harshil Khanna</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">harshil.khanna@gmail.com</p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground"> +91 8178825433</p>
                </div>
                <Button variant="outline">Change</Button>
              </div>

            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SettingsPage 