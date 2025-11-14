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
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
          Leadership Vision
        </h2>
        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
          Core principles that define Dai Ali Daniyal’s leadership and growth philosophy
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className="rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all"
          >
            <CardContent className="px-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-neutral-200 text-neutral-700 rounded-lg px-3 py-2 text-xs font-medium mb-4 w-[100%] border border-neutral-300">
                {card.icon}
                <span>{card.title}</span>
              </div>

              {/* Heading */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                {card.heading}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
