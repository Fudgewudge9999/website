"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [subject, setSubject] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (showSuccess || showError) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
        setShowError(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess, showError])

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
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      (e.target as HTMLFormElement).reset(); // Reset other form fields
      setIsLoading(false);
      setShowSuccess(true);

      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsLoading(false);
      setShowError(true);
      // Also scroll to top on error
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      
      {showSuccess && (
        <Alert className="mb-6 bg-green-50 text-green-700 border-green-200">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            Thank you for your message! I will get back to you soon.
          </AlertDescription>
        </Alert>
      )}
      
      {showError && (
        <Alert className="mb-6 bg-red-50 text-red-700 border-red-200">
          <XCircle className="h-4 w-4" />
          <AlertDescription>
            {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className={cn("mt-1", !name && "border-red-300 focus:border-red-500")}
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className={cn("mt-1", !email && "border-red-300 focus:border-red-500")}
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
          />
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
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea 
            id="message" 
            name="message" 
            rows={4} 
            required
            className="mt-1" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please write your message here..."
          />
          <p className="text-sm text-gray-500 mt-1">
            {message.length}/1000 characters
          </p>
        </div>
        <div className="text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our privacy policy. Your information will only be used to respond to your inquiry.
          </p>
        </div>
        <Button 
          type="submit" 
          className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  )
}

