"use client"

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaLaptopMedical } from 'react-icons/fa';
import Aurora from '@/components/ui/background/Aurora';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const LinkPage: React.FC = () => {
  const socialLinks = [
    { href: "https://github.com/marcellohugo", icon: <FaGithub size={20} /> },
    { href: "https://instagram.com/marcellohugo__", icon: <FaInstagram size={20} /> },
    { href: "https://linkedin.com/in/marcellohugo", icon: <FaLinkedin size={20} /> },
  ];

  const actionLinks = [
    { href: "mailto:marco.marcello15@gmail.com", icon: <FaEnvelope />, text: "Email Me" },
    { href: "https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber", icon: <FaLaptopMedical />, text: "Tutorial Create 3D Event" }
  ];

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center p-4 pb-24 text-foreground">
      <div className="fixed inset-0 -z-10">
        <Aurora colorStops={["#092965", "#A3D8FF", "#092965"]} />
      </div>
      <div className="fixed bottom-4 left-4 z-20">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col max-w-md w-full items-center justify-center text-center">
        <Image
          src="/images/Profile.png"
          alt="Marcello"
          width={128}
          height={128}
          className="rounded-full object-cover border-4 border-primary"
        />

        <h1 className="mt-4 text-heading-lg font-semibold">
          Marco Marcello Hugo
        </h1>
        
        <a
          href="https://marcello.web.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-primary/80 hover:underline text-body-base"
        >
          marcello.web.id
        </a>

        <p className="mt-2 text-body-base text-foreground/80 max-w-sm">
          The only person who can limit your steps is yourself
        </p>

        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 text-foreground rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="mt-8 w-full space-y-4">
          {actionLinks.map((link, index) => (
             <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-foreground/10 text-foreground rounded-lg px-4 py-3 hover:bg-primary hover:text-primary-foreground font-medium transition-colors"
            >
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LinkPage;
