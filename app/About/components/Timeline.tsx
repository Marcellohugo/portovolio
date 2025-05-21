import React from 'react';

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
];

const Timeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
      {timelineData.map((item, index) => (
        <div key={item.id} className="mb-10 ml-4">
          <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
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
            {item.tags.map((tag) => (
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
    </div>
  );
};

export default Timeline;
