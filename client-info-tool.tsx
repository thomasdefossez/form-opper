"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, User, Building, DollarSign, Clock, FileText, Phone, Mail } from "lucide-react"
import { format } from "date-fns"

interface ClientInfo {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string

  // Project Information
  projectType: string
  projectDescription: string
  budget: string
  timeline: string
  startDate: Date | undefined

  // Additional Information
  referralSource: string
  previousWork: string
  specialRequirements: string
  communicationPreference: string
}

export default function Component() {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    projectType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    startDate: undefined,
    referralSource: "",
    previousWork: "",
    specialRequirements: "",
    communicationPreference: "",
  })

  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof ClientInfo, value: string | Date | undefined) => {
    setClientInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const resetForm = () => {
    setClientInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      projectType: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      startDate: undefined,
      referralSource: "",
      previousWork: "",
      specialRequirements: "",
      communicationPreference: "",
    })
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Client Information Summary</h1>
          <Button onClick={resetForm} variant="outline">
            New Client
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                <p className="text-lg font-semibold">
                  {clientInfo.firstName} {clientInfo.lastName}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{clientInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{clientInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span>
                  {clientInfo.company} - {clientInfo.position}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Project Type</Label>
                <Badge variant="secondary" className="mt-1">
                  {clientInfo.projectType}
                </Badge>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                <p className="text-sm">{clientInfo.projectDescription}</p>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="font-semibold">{clientInfo.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{clientInfo.timeline}</span>
              </div>
              {clientInfo.startDate && (
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>Start Date: {format(clientInfo.startDate, "PPP")}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Referral Source</Label>
                  <p>{clientInfo.referralSource}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Communication Preference</Label>
                  <p>{clientInfo.communicationPreference}</p>
                </div>
              </div>
              {clientInfo.previousWork && (
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Previous Work Experience</Label>
                  <p className="text-sm">{clientInfo.previousWork}</p>
                </div>
              )}
              {clientInfo.specialRequirements && (
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Special Requirements</Label>
                  <p className="text-sm">{clientInfo.specialRequirements}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Client Information Form</CardTitle>
          <CardDescription>
            Collect comprehensive information about your client and their project requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={clientInfo.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={clientInfo.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={clientInfo.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input
                    id="position"
                    value={clientInfo.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Project Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Project Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile App</SelectItem>
                      <SelectItem value="design">Design Services</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-plus-months">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {clientInfo.startDate ? format(clientInfo.startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={clientInfo.startDate}
                        onSelect={(date) => handleInputChange("startDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="projectDescription">Project Description *</Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Please describe your project in detail..."
                  value={clientInfo.projectDescription}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  required
                  rows={4}
                />
              </div>
            </div>

            <Separator />

            {/* Additional Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="referralSource">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange("referralSource", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select referral source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communicationPreference">Preferred Communication</Label>
                  <Select onValueChange={(value) => handleInputChange("communicationPreference", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="video-call">Video Call</SelectItem>
                      <SelectItem value="in-person">In Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="previousWork">Previous Work Experience</Label>
                <Textarea
                  id="previousWork"
                  placeholder="Tell us about any previous similar projects or relevant experience..."
                  value={clientInfo.previousWork}
                  onChange={(e) => handleInputChange("previousWork", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="specialRequirements">Special Requirements or Notes</Label>
                <Textarea
                  id="specialRequirements"
                  placeholder="Any special requirements, constraints, or additional information..."
                  value={clientInfo.specialRequirements}
                  onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Generate Client Summary
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Reset Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
