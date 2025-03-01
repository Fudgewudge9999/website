"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "KS3 Support",
    price: "£35",
    duration: "per hour",
    description: "Build strong foundations in mathematics",
    features: [
      "1-on-1 personalized tutoring",
      "Key Stage 3 curriculum coverage",
      "Topic-specific worksheets",
      "Regular progress updates",
      "Homework support",
      "WhatsApp support between sessions"
    ]
  },
  {
    name: "GCSE Excellence",
    price: "£40",
    duration: "per hour",
    description: "Comprehensive GCSE preparation",
    popular: true,
    features: [
      "1-on-1 expert GCSE tutoring",
      "Past paper practice",
      "Exam technique coaching",
      "Topic-specific revision materials",
      "Mock exam preparation",
      "Grade tracking and feedback",
      "WhatsApp support between sessions"
    ]
  },
  {
    name: "Advanced Studies",
    price: "Contact",
    duration: "for pricing",
    description: "11+ and A-Level preparation",
    features: [
      "Specialized 11+ preparation",
      "A-Level mathematics support",
      "Customized study plans",
      "Intensive exam preparation",
      "Advanced topic coverage",
      "Regular progress reports",
      "Flexible scheduling"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="container py-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tutoring Packages</h1>
        <p className="text-xl text-muted-foreground">
          Expert mathematics tutoring tailored to your educational level
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "border-2 border-primary shadow-lg"
                : "border border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.duration}</span>
              </div>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full bg-black hover:bg-gray-800 text-white" 
              variant={plan.popular ? "default" : "outline"}
              asChild
            >
              <Link href="/contact" className="text-white">
                {plan.name === "Advanced Studies" ? "Enquire Now" : "Book Session"}
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why Choose MathsWithJosef?</h2>
          <p className="text-muted-foreground mb-6">
            With years of experience in mathematics education, I provide personalized tutoring that helps students not just pass their exams, but truly understand and enjoy mathematics.
          </p>
          <p className="text-muted-foreground">
            Need a custom tutoring plan? <Link href="/contact" className="text-black hover:text-gray-800 hover:underline">Contact me</Link> to discuss your specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
} 