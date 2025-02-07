"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DatePicker>

function Calendar({
  className,
  ...props
}: CalendarProps) {
  return (
    <DatePicker
      className={cn("p-3", className)}
      dateFormat="MMMM d, yyyy"
      previousMonthButtonLabel={<ChevronLeft className="h-4 w-4" />}
      nextMonthButtonLabel={<ChevronRight className="h-4 w-4" />}
      wrapperClassName="w-full"
      calendarClassName={cn(
        "bg-background border rounded-md shadow-md",
        "font-normal text-sm",
        "space-y-1"
      )}
      dayClassName={date => cn(
        buttonVariants({ variant: "ghost" }),
        "h-8 w-8 p-0 font-normal",
        {
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground": 
            date.toDateString() === new Date().toDateString(),
        }
      )}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
