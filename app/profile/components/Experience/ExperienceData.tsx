"use client";
import React from "react";
import Image from "next/image";

// Data bisa dipindahkan ke file terpisah (e.g., data/experience.ts) untuk kebersihan
const ExperienceData = [
  {
    id: 1,
    title: "Website Maker",
    company: "Marcello Webdev",
    date: "September, 2024 - Now",
    logoUrl: "/icons/logo.png",
    description: [
      "Design and develop interactive websites using the Wix platform as per client requirements.",
      "Optimize site design, responsiveness, and performance for a better user experience.",
      "Work closely with clients to customize features and functionality according to business goals."
    ]
  },
  {
    id: 2,
    title: "Part Time Kaka Pengajar & Operational",
    company: "Rumah Kumbang",
    date: "November, 2023 - April, 2024",
    logoUrl: "/icons/logo2.png",
    description: [
      "Be a mentor for early childhood in helping to develop sensory motor skills with lots of practice such as making artificial volcanoes, cutting paper, folding origami, and other games."
    ]
  },
  {
    id: 3,
    title: "Part Time Barista & Server",
    company: "Kopi Tala Bekasi",
    date: "October, 2021 - December, 2021",
    logoUrl: "/icons/logo3.png",
    description: [
      "Responsible for preparing and serving various types of drinks in accordance with established quality standards, ensuring the cleanliness of the work area and the availability of raw materials are maintained.",
      "Providing friendly customer service including handling orders and transaction processes."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Garis tengah hanya untuk desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-foreground/30" />

        <div className="space-y-12">
          {ExperienceData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center"
              >
                {/* Konten Kiri (atau atas di mobile) */}
                <div className={`md:text-right ${isLeft ? 'order-1' : 'order-3'}`}>
                  {isLeft && <ExperienceCard {...item} />}
                </div>

                {/* Ikon di tengah (hanya di desktop) */}
                <div className="hidden md:flex order-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-foreground/30 bg-card flex items-center justify-center z-10">
                    <img src={item.logoUrl} alt="logo" className="w-10 h-10" />
                  </div>
                </div>

                {/* Konten Kanan (atau bawah di mobile) */}
                <div className={`md:text-left ${isLeft ? 'order-3' : 'order-1'}`}>
                  {!isLeft && <ExperienceCard {...item} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Komponen Card terpisah agar tidak duplikasi
const ExperienceCard = (item: typeof ExperienceData[0]) => (
  <div className="border border-foreground/20 bg-card p-6 rounded-2xl shadow-lg">
    <div className="flex items-center mb-4">
      <img src={item.logoUrl} alt={`${item.company} logo`} className="w-8 h-8 mr-3" />
      <div>
        <h3 className="text-body-lg font-bold">{item.title}</h3>
        <p className="text-body-sm text-muted-foreground">{item.company}</p>
      </div>
    </div>
    <p className="text-caption text-muted-foreground mb-4 italic">{item.date}</p>
    <ul className="list-disc list-inside space-y-2 text-body-sm text-left">
      {item.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);