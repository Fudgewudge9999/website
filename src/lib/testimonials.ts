export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Josef's tutoring transformed my understanding of GCSE maths. His patient approach and clear explanations helped me achieve an 8 when I was previously struggling to get a 5. Highly recommended!",
    author: "Sarah Johnson",
    role: "GCSE Student"
  },
  {
    quote: "My son was really struggling with his A-level maths, but after just a few sessions with Josef, his confidence improved dramatically. He went from a D to a B in his mock exams!",
    author: "Michael Thompson",
    role: "Parent of A-level Student"
  },
  {
    quote: "Josef has a unique ability to make complex mathematical concepts simple to understand. His 11+ preparation helped my daughter secure a place at her first-choice grammar school.",
    author: "Emma Williams",
    role: "Parent of 11+ Student"
  },
  {
    quote: "I was falling behind in KS3 maths and losing confidence. Josef's personalized approach helped me catch up with my class and actually start enjoying maths again!",
    author: "James Wilson",
    role: "KS3 Student"
  }
]; 