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
      heading: 'Designing for the next century',
      description:
        'From materials to master plans, innovation drives our process and portfolio.',
    },
    {
      icon: <Leaf className="w-4 h-4" />,
      title: 'Sustainability',
      heading: 'Responsible growth',
      description:
        'Adopting energy-efficient strategies and stewardship of local heritage.',
    },
    {
      icon: <Award className="w-4 h-4" />,
      title: 'Recognition',
      heading: 'Award-winning execution',
      description:
        'Delivering projects recognized by industry peers and communities.',
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: 'People',
      heading: 'Cultivating leaders',
      description:
        'Mentoring cross-functional teams to achieve bold outcomes.',
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: 'Growth',
      heading: 'Measured expansion',
      description:
        'A disciplined approach to scaling across markets and sectors.',
    },
    {
      icon: <Landmark className="w-4 h-4" />,
      title: 'Legacy',
      heading: 'Enduring value',
      description:
        'Architectural works that age with dignity and purpose.',
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
          Principles and achievements that guide our work
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
