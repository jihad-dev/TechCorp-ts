import { Card, CardContent, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    quote: "TechCorp's solutions have transformed our operations, leading to a 40% increase in efficiency.",
    author: "Sarah Johnson",
    role: "CTO, Global Innovations Inc.",
    company: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=80&h=80&fit=crop",
  },
  {
    quote: "The level of security and reliability we've experienced with TechCorp is unmatched in the industry.",
    author: "Michael Chen",
    role: "Director of IT, TechGrowth",
    company: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
  },
  {
    quote: "Implementing TechCorp's cloud solutions helped us scale our business globally with confidence.",
    author: "Emma Davis",
    role: "CEO, FutureScale",
    company: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our clients say about their experience with TechCorp
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.company}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}