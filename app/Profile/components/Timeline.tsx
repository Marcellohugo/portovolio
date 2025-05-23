import React, { useState } from 'react';
import { Button } from "@/components/ui/button/button";
import { ArrowRightIcon, MinusIcon } from "lucide-react";
import MagneticEffect from "@/components/ui/button/MagneticEffect";

type TimelineItem = {
  id: string;
  period: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
};

const timelineData: TimelineItem[] = [
  {
    id: '1',
    period: '2023 – Present',
    title: 'PT Hafdzamedia Teknologi Aplikasi',
    role: 'Fullstack Web Developer | Part-time',
    description:
      'Responsible for building and maintaining scalable web applications using the latest technologies. Collaborated with cross-functional teams to deliver high-quality solutions that meet business requirements.',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  {
    id: '2',
    period: '2024 – Present',
    title: 'Outlier',
    role: 'AI Trainer | Freelance',
    description:
      'Crafted and refined chatbot prompts using prompt engineering and RLHF techniques to improve the AI responses in English and Indonesian, leading to more accurate and contextually relevant interactions.',
    tags: ['Generative AI', 'Prompt Engineering', 'Problem Solving'],
  },
  {
    id: '3',
    period: '2023 – Present',
    title: 'Self-Employed',
    role: 'Web Developer | Freelance',
    description:
      'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  // Items 4 - 8 will be hidden initially
  {
    id: '4', period: '2023 – Present', title: 'Self-Employed', role: 'Web Developer | Freelance',
    description: 'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  { id: '5', period: '2023 – Present', title: 'Self-Employed', role: 'Web Developer | Freelance',
    description: 'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  { id: '6', period: '2023 – Present', title: 'Self-Employed', role: 'Web Developer | Freelance',
    description: 'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  { id: '7', period: '2023 – Present', title: 'Self-Employed', role: 'Web Developer | Freelance',
    description: 'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  { id: '8', period: '2023 – Present', title: 'Self-Employed', role: 'Web Developer | Freelance',
    description: 'Specialized in crafting innovative solutions using Laravel and Next.js, enhancing client satisfaction and project efficiency. Contributed expertise in both frontend and backend development during collaborative team projects, leading to successful project completions',
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
];

const Timeline: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // filter items: show only id 1-3 if showAll is false
  const itemsToShow = showAll
    ? timelineData
    : timelineData.filter(item => parseInt(item.id, 10) <= 3);

  return (
    <div className="relative mx-auto max-w-[1200px]">
      {/* Garis vertikal */}
      <div className="absolute left-8 top-0 h-full w-1 bg-white dark:bg-gray-700 z-0"></div>

      {itemsToShow.map(item => (
        <div key={item.id} className="relative mb-16 ml-16 z-10">
          <div className="absolute -left-10 top-0 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <div className="w-2 h-2 bg-black rounded-full dark:bg-white"></div>
          </div>
          <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {item.period}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
            {item.title}
          </h3>
          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            {item.role}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="flex items-center justify-center mt-8">
        <MagneticEffect>
          <Button
            variant="outline"
            className="border-white text-white"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? (
              <>
                Hide More <MinusIcon className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </MagneticEffect>
      </div>
    </div>
  );
};

export default Timeline;
