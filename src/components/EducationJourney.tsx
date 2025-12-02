'use client';
import { FC } from 'react';
import { Calendar } from 'lucide-react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const data = [
    {
    year: '2023 — ArmArch Founded',
    desc: 'Established an architecture studio focused on craft and context.',
  },
  {
    year: '2023 — Masters at Hult International',
    desc: 'Embarked on a Masters in International Business to expand global business insight.',
  },
  {
    year: '2020 — Bachelors at Middlesex University',
    desc: 'Completed a Business Management (Marketing) degree with international exposure.',
  },

  {
    year: '2010 — Al-Ashraf Group',
    desc: 'Launched the parent company to steward multi-sector growth.',
  },
];

const EducationJourney: FC = () => {
  return (
    <section id="journey" className="w-full bg-background px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Timeline
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Education & Journey</h2>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            Key Years
          </div>

          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A curated view of academic foundations and executive milestones.
          </p>
        </div>

        <VerticalTimeline lineColor="#e1d9d1">
          {data.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #e1d9d1',
                borderRadius: '16px',
                boxShadow: 'none',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #e7dfd6',
              }}
              iconStyle={{
                background: '#9b7753',
                color: '#ffffff',
              }}
              icon={<span />}
            >
              <h3 className="font-semibold text-foreground">{item.year}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <p className="mt-10 text-right text-sm italic text-muted-foreground">
          Milestones that shaped a disciplined, global perspective.
        </p>
      </div>
    </section>
  );
};

export default EducationJourney;
