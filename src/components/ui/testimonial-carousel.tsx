"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-lg italic text-gray-700">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
        <p className="text-right font-semibold mt-2">
          - {testimonials[currentIndex].author}, {testimonials[currentIndex].role}
        </p>
      </div>
      
      <div className="flex justify-between mt-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevTestimonial}
          className="rounded-full bg-white hover:bg-blue-100"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextTestimonial}
          className="rounded-full bg-white hover:bg-blue-100"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  );
} 