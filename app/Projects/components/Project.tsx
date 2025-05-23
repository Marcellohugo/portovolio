"use client"
import React, { useState } from 'react';

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
    id: 'ludoang',
    title: 'LUDOang',
    year: 2023,
    description: 'LUDOang is a game that my team and I created for a final project in my university. The game is built with Python, pygame, and OpenGL.',
    tags: ['Python', 'Pygame', 'OpenGL'],
    category: 'Web Development',
    imageUrl: '/images/Castafest.png',
  },
  {
    id: 'aleph-bot',
    title: 'Aleph Discord Bot',
    year: 2023,
    description: 'Aleph is a Discord bot that I created for my Discord server to use. The bot is built using Python and the discord.py library.',
    tags: ['Python', 'Discord.py', 'Google Serp API'],
    category: 'Web Development',
    imageUrl: '/images/Castafest.png',
  },
  {
    id: 'aleph',
    title: 'Aleph Discord Bot',
    year: 2023,
    description: 'Aleph is a Discord bot that I created for my Discord server to use. The bot is built using Python and the discord.py library.',
    tags: ['Python', 'Discord.py', 'Google Serp API'],
    category: 'Web Development',
    imageUrl: '/images/CVMaker.png',
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
    <section>
      <div className="container mx-auto max-w-[1200px] px-4">
        
        <div className="flex item-center justify-center space-x-4 mt-8 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-lg font-medium transition 
                ${activeFilter === f.value ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 border'} `}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Thumbnail background */}
              {proj.imageUrl && (
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="max-w-[640px] max-h-[360px] object-cover opacity-30"
                />
              )}

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-2 py-1 rounded">
                  {proj.year}
                </span>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {proj.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gray-800 text-white px-3 py-1 rounded-full"
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
