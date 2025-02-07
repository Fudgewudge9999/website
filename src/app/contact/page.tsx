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
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [subject, setSubject] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: (e.target as HTMLFormElement).phone.value,
          subject: (e.target as HTMLFormElement).subject.value,
          message,
          preferredDate: date ? format(date, "PPP") : undefined,
          preferredTime: time,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      setDate(null);
      setTime(undefined);
      (e.target as HTMLFormElement).reset(); // Reset other form fields
      setIsLoading(false);
      setShowSuccess(true);

    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setShowError(true);
    }
  };

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
          <Input type="text" id="name" name="name" required className="mt-1" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input type="email" id="email" name="email" required className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} />
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
          <Select name="subject" value={subject} onValueChange={setSubject}>
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
          <Textarea id="message" name="message" rows={4} className="mt-1" value={message} onChange={(e) => setMessage(e.target.value)} />
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
                onChange={(date: Date | null) => setDate(date)}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                placeholderText="Select a date"
                className="border-none"
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}

