"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';

// Define project interface
interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  tags: string[];
  category: 'Web Development' | 'UI/UX' | 'Other';
  imageUrl?: string; // optional thumbnail
}

const filters: Array<{ label: string; value: Project['category'] | 'All' }> = [
  { label: 'All', value: 'All' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'UI/UX', value: 'UI/UX' },
  { label: 'Other', value: 'Other' },
];

// Sample data, replace with real
const projects: Project[] = [
  {
    id: 'Web-1',
    title: 'Portfolio Website',
    year: 2025,
    description: 'A personal portfolio website that showcases my skills, projects, and experiences. This project was created using React, TypeScript, Next.js, and TailwindCSS.',
    tags: ['React', 'Typescript', 'Nextjs', 'TailwindCSS'],
    category: 'Web Development',
    imageUrl: '/images/Personal.png',
  },
  {
    id: 'Web-2',
    title: 'CV Maker',
    year: 2024,
    description: 'A simple CV maker website that allows users to create and download their CVs in PDF format. This project was created using HTML and CSS.',
    tags: ['HTML', 'CSS'],
    category: 'Web Development',
    imageUrl: '/images/CVMaker.png',
  },
  {
    id: 'Web-3',
    title: 'Castafest Website',
    year: 2024,
    description: 'A website created for the Castafest event, an annual event held by Amsa-Undip. This website was created using WIX.',
    tags: ['WIX', 'Javascript'],
    category: 'Web Development',
    imageUrl: '/images/Castafest.png',
  },
  {
    id: 'UI-1',
    title: 'CARe',
    year: 2024,
    description: 'This UI designed for an automotive service mobile app—users log in and can browse and select car models (e.g. Honda, Audi, Porsche), perfect for booking, rental, or vehicle maintenance management features.',
    tags: ['Figma'],
    category: 'UI/UX',
    imageUrl: '/images/Care.png',
  },
  {
    id: 'UI-2',
    title: 'Countlories',
    year: 2024,
    description: '“CountLories” app to help users achieve fitness goals by scanning food—the main screen contains food category icons and logos, and a camera scanner screen to recognize dishes and count calories in real-time.',
    tags: ['Figma'],
    category: 'UI/UX',
    imageUrl: '/images/Countlories.jpg',
  },
  // Add more projects here
];

const OtherProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]['value']>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
          {filters.map((f) => (
            <Button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`
                px-4 py-2 rounded-lg font-medium transition
                ${activeFilter === f.value
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'}
              `}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 sm:h-72 md:h-80 group"
            >
              {/* Background Thumbnail */}
              {proj.imageUrl && (
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover
                   opacity-30 z-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:z-20"
                />
              )}

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded">
                  {proj.year}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-gray-700 mb-3 text-xs sm:text-sm">
                  {proj.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsSection;
