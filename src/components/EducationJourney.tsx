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
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 font-inter bg-[#faf7f3]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-gray-900">Education & Journey</h2>

          <div className="inline-flex items-center gap-2 mt-4 bg-white border border-[#e7dfd6] rounded-full px-4 py-2 text-sm text-gray-700">
            <Calendar size={16} />
            Key Years
          </div>

          <p className="text-gray-600 mt-4 max-w-md">
            A curated view of academic foundations and executive milestones.
          </p>
        </div>

        <VerticalTimeline lineColor="#e7dfd6">
          {data.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #e7dfd6',
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
              <h3 className="text-gray-900 font-semibold">{item.year}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <p className="text-right text-sm text-gray-500 mt-10 italic">
          Milestones that shaped a disciplined, global perspective.
        </p>
      </div>
    </section>
  );
};

export default EducationJourney;
