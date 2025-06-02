import React from 'react';
import { Box, Cloud, Smartphone, Zap } from 'lucide-react';
import MagneticEffect from '@/components/ui/button/MagneticEffect';

interface SkillItem {
  icon: JSX.Element;
  label: string;
}

const skills: SkillItem[] = [
  { icon: <Box size={48} />, label: 'Web Development' },
  { icon: <Cloud size={48} />, label: 'REST API' },
  { icon: <Zap size={48} />, label: 'Machine Learning' },
  { icon: <Smartphone size={48} />, label: 'Mobile Development' },
];

const languages = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Bootstrap', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase',
  'PHP', 'Laravel', 'Python',
];

const tools = [
  'Visual Studio Code', 'Git', 'GitHub', 'Figma', 'Adobe Photoshop',
  'Adobe Premiere Pro', 'Adobe After Effects',
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center justify-center text-center w-full ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 sm:grid-rows-none gap-8 max-w-[1200px] mb-16">
        {skills.map((skill) => (
          <div key={skill.label} className="flex flex-col items-center">
            <MagneticEffect>
                <div className="text-[#A3D8FF] mb-4">
                  {skill.icon}
                </div>
            </MagneticEffect>
            <span className="text-lg font-bold">{skill.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold tracking-widest mb-4">LANGUAGES & FRAMEWORKS</h3>
          <p className="text-lg text-[#A3D8FF]">
            {languages.map((lang, idx) => (
              <span key={lang}>
                {lang}{idx < languages.length - 1 && <span> | </span>}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-widest mb-4">TOOLS</h3>
          <p className="text-lg text-[#A3D8FF]">
            {tools.map((tool, idx) => (
              <span key={tool}>
                {tool}{idx < tools.length - 1 && <span> | </span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
