import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Transform Your Business with Next-Gen Technology
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Empower your organization with cutting-edge solutions that drive innovation, efficiency, and growth. Join thousands of businesses that trust TechCorp.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Schedule a Demo</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}