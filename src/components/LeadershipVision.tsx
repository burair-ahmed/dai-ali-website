'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Lightbulb,
  Leaf,
  Award,
  Users,
  TrendingUp,
  Landmark,
} from 'lucide-react';

export default function LeadershipVision() {
  const cards = [
    {
      icon: <Lightbulb className="w-4 h-4" />,
      title: 'Innovation',
      heading: 'Shaping modern enterprise',
      description:
        'Integrating creativity with strategy to redefine business and design excellence.',
    },
    {
      icon: <Leaf className="w-4 h-4" />,
      title: 'Sustainability',
      heading: 'Building a responsible future',
      description:
        'Championing green practices and sustainable architecture through ArmArch.',
    },
    {
      icon: <Award className="w-4 h-4" />,
      title: 'Excellence',
      heading: 'Pioneering with distinction',
      description:
        'Guided by discipline and purpose, achieving milestones that inspire industry growth.',
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: 'Leadership',
      heading: 'Empowering visionaries',
      description:
        'Nurturing talent, collaboration, and innovation across all ventures within the group.',
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: 'Growth',
      heading: 'Strategic diversification',
      description:
        'Expanding Al-Ashraf Group across sectors with analytical insight and global perspective.',
    },
    {
      icon: <Landmark className="w-4 h-4" />,
      title: 'Legacy',
      heading: 'Inspired by heritage',
      description:
        'Honoring a family tradition of excellence while shaping the architecture of tomorrow.',
    },
  ];

  return (
    <section className="w-full bg-secondary/40 px-6 py-20 lg:px-20">
      {/* Header */}
      <div className="mb-10 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Principles
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Leadership Vision
          </h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-muted-foreground sm:mt-0">
          Core principles that define Dai Ali Daniyal’s leadership and growth philosophy
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className="rounded-2xl border border-border shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="px-4">
              {/* Badge */}
                <div className="mb-4 inline-flex w-full items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-muted-foreground">
                {card.icon}
                <span>{card.title}</span>
              </div>

              {/* Heading */}
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                {card.heading}
              </h3>

              {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
