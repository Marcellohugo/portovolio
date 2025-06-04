import React, { useState } from 'react';
import { Button } from "@/components/ui/button/Button";
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
    period: 'October, 2023 – February, 2025',
    title: 'BEM ITS',
    role: 'Ministry of Internal Affairs Staff | Seasonal',
    description:
      'As an active member of the Directorate General of Internal Harmonization, he plays a role in managing the Forky (Intra-Campus Coordination Forum) Work Program, which includes responsibility for preparing activity schedules, coordinating event implementation, as well as official correspondence and permits to the ITS Bureaucracy.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  {
    id: '2',
    period: 'November, 2023 - November 2024',
    title: 'Kepemanduan LKMM ITS',
    role: 'Pemandu FTEIC | Seasonal',
    description:
      'Becoming a managerial skills training guide for ITS students, by delivering informative, communicative, and easy-to-understand materials that are relevant to the training needs of participants.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  {
    id: '3',
    period: 'February, 2023 – January, 2024',
    title: 'Schematics ITS',
    role: 'Head of Perkamzin Division 2 | Seasonal',
    description:
      'Maximizing facilities and infrastructure with in-depth knowledge regarding licensing processes, security, and applicable regulations, to ensure that operations run in an orderly and efficient manner.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  // Items 4 - 8 will be hidden initially
  {
    id: '4', 
    period: 'November, 2020 – November, 2021', 
    title: 'MPK SMAN 3 Bekasi', 
    role: 'Deputy General Chairman 1 | Seasonal',
    description: 'Actively participate in every stage of the preparation, implementation, and monitoring of the MPK work program to ensure that all activities carried out are in line with the organizations vision and achieve existing goals.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  { id: '5', 
    period: 'October, 2017 – October, 2018', 
    title: 'OSIS SMPN 84 Jakarta ', 
    role: 'Deputy Chairman 1 | Seasonal',
    description: 'Coordinate division heads during extracurricular plenary meetings to ensure smooth running of activities.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  { id: '6', 
    period: 'November, 2023 - Mey, 2024', 
    title: 'Pammits 2024', 
    role: 'Head of Equipment Division | Seasonal',
    description: 'Maximizing facilities and infrastructure with in-depth knowledge regarding licensing processes, security, and applicable regulations, to ensure that operations run in an orderly and efficient manner.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  { id: '7', 
    period: 'August, 2023 -November, 2023', 
    title: 'Maba cup 2023', 
    role: 'Head of Equipment Division | Seasonal',
    description: 'Maximizing facilities and infrastructure with in-depth knowledge regarding licensing processes, security, and applicable regulations, to ensure that operations run in an orderly and efficient manner.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  { id: '8', 
    period: '2022 – 2023', 
    title: 'Etcetera', 
    role: 'Equipment Staff, Brand Ambassador, etc | Seasonal',
    description: 'Fill the lecture period by becoming a staff of the Maba Cup equipment division, ILITS, ITSExpo, UKMExpo, staff of the Kestari Gerigi division and Brand Ambassador TedxITS 2022-2023.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
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
      <div className="absolute left-8 top-0 h-full w-1 bg-white  z-0"></div>

      {itemsToShow.map(item => (
        <div key={item.id} className="relative mb-16 ml-16 z-10">
          <div className="absolute -left-10 top-0 flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full ring-8 ring-white ">
          </div>
          <time className="text-sm font-medium text-[#A3D8FF] ">
            {item.period}
          </time>
          <h3 className="text-lg font-semibold text-white  mt-1">
            {item.title}
          </h3>
          <p className="text-sm italic text-gray-500 ">
            {item.role}
          </p>
          <p className="mt-2 text-white ">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="inline-block bg-gray-200  text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
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
