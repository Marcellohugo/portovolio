"use client"
import React from 'react';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  logoUrl: string;
};

const ExperienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'Website Maker',
    company: 'Marcello Webdev',
    date: 'September, 2024 - Now',
    logoUrl: '/icons/logo.png',
    description: [
      'Design and develop interactive websites using the Wix platform as per client requirements.',
      'Optimize site design, responsiveness, and performance for a better user experience.',
      'Work closely with clients to customize features and functionality according to business goals.'
    ]
  },
  {
    id: 2,
    title: 'Part Time Kaka Pengajar & Operational',
    company: 'Rumah Kumbang',
    date: 'November, 2023 - April, 2024',
    logoUrl: '/icons/logo2.png',
    description: [
      'Be a mentor for early childhood in helping to develop sensory motor skills with lots of practice such as making artificial volcanoes, cutting paper, folding origami, and other games.'
    ]
  },
  {
    id: 3,
    title: 'Part Time Barista & Server',
    company: 'Kopi Tala Bekasi',
    date: 'October, 2021 - December, 2021',
    logoUrl: '/icons/logo3.png',
    description: [
      'Responsible for preparing and serving various types of drinks in accordance with established quality standards, ensuring the cleanliness of the work area and the availability of raw materials are maintained.',
      'Providing friendly customer service including handling orders and transaction processes.'
    ]
  }
];

export const Experience: React.FC = () => {
    return (
        <div className="text-white py-12">
          <div className="max-w-[1200px] mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white"></div>
    
            {ExperienceData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="mb-8 flex items-center w-full justify-between"
                >
                  {/* Left side */}
                  <div className={`w-1/2 px-4 ${!isLeft ? 'opacity-0' : 'opacity-100'}`}>                
                    {isLeft && (
                      <div className="border border-foreground/20 bg-zinc-900 p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <img src={item.logoUrl} alt={`${item.company} logo`} className="w-8 h-8 mr-3" />
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 italic">{item.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
    
                  {/* Circle marker */}
                  <div className="w-24 h-20 rounded-full border border-foreground/20 bg-zinc-900 flex items-center justify-center z-10">
                    <img src={item.logoUrl} alt="logo" className="w-12 h-12" />
                  </div>
    
                  {/* Right side */}
                  <div className={`w-1/2 px-4 ${isLeft ? 'opacity-0' : 'opacity-100'}`}>                
                    {!isLeft && (
                      <div className="border border-foreground/20 bg-zinc-900 p-6 rounded-2xl shadow-lg text-right">
                        <div className="flex items-center mb-4 justify-end">
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.company}</p>
                          </div>
                          <img src={item.logoUrl} alt={`${item.company} logo`} className="w-8 h-8 ml-3" />
                        </div>
                        <p className="text-sm text-gray-400 mb-4 italic">{item.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    
