import { CheckCircle, Cloud, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Enterprise Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure designed for enterprise needs.',
    icon: Cloud,
  },
  {
    title: 'Advanced Security',
    description: 'State-of-the-art security measures to protect your valuable data.',
    icon: Lock,
  },
  {
    title: 'High Performance',
    description: 'Lightning-fast performance optimized for your business operations.',
    icon: Zap,
  },
  {
    title: 'Reliability',
    description: '99.99% uptime guarantee with 24/7 expert support.',
    icon: CheckCircle,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to scale your business
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive solutions that help you focus on what matters most - growing your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}