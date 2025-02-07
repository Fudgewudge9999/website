"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log("Form submitted", { date, time })
  }

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ]

  return (
    <div className="max-w-2xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input type="text" id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input type="email" id="email" name="email" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input type="tel" id="phone" name="phone" className="mt-1" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <Select name="subject">
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ks2">KS2 Maths</SelectItem>
              <SelectItem value="ks3">KS3 Maths</SelectItem>
              <SelectItem value="gcse">GCSE Maths</SelectItem>
              <SelectItem value="11plus">11+ Maths & NVR</SelectItem>
              <SelectItem value="alevel">A-Level Maths</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" name="message" rows={4} className="mt-1" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium text-gray-700">Preferred Date for Introductory Session</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-auto p-0" 
              align="start" 
              sideOffset={-165}
            >
              <Calendar 
                selected={date}
                onChange={(date: Date) => setDate(date)}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                placeholderText="Select a date"
                className="border-none"
                showPreviousMonthButton={false}
                showNextMonthButton={false}
                previousMonthButtonLabel={<ChevronLeft className="h-4 w-4" />}
                nextMonthButtonLabel={<ChevronRight className="h-4 w-4" />}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !time && "text-muted-foreground")}
              >
                <Clock className="mr-2 h-4 w-4" />
                {time || <span>Pick a time</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <div className="grid grid-cols-3 gap-2 p-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    onClick={() => setTime(slot)}
                    variant={time === slot ? "default" : "outline"}
                    className="text-xs"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}

