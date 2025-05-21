'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import {
  SiExpress,
  SiGraphql,
  SiHasura,
  SiPrisma,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiReact,
  SiReactrouter,
} from 'react-icons/si';
import clsx from 'clsx';
import { Button } from '../ui/button/button';
import MagneticEffect from '../ui/button/MagneticEffect';

interface SkillCard {
  id: number;
  title: string;
  skills: { icon: JSX.Element; name: string }[];
  description: string;
}

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

const skillCards: SkillCard[] = [
  {
    id: 1,
    title: 'Frontend',
    skills: [
      { icon: <SiNextdotjs />, name: 'Next' },
      { icon: <SiReact />, name: 'React Native' },
      { icon: <SiTailwindcss />, name: 'Tailwind' },
      { icon: <SiRedux />, name: 'Redux' },
    ],
    description:
      'I blend artwork with technology, designing immersive and functional interfaces.',
  },
  {
    id: 2,
    title: 'Backend',
    skills: [
      { icon: <SiExpress />, name: 'Express' },
      { icon: <SiGraphql />, name: 'GraphQL' },
      { icon: <SiHasura />, name: 'Hasura' },
      { icon: <SiPrisma />, name: 'Prisma' },
      { icon: <SiMysql />, name: 'MySQL' },
    ],
    description:
      'I have foundational knowledge and minimal experience in developing APIs.',
  },
  {
    id: 3,
    title: 'Routing & State',
    skills: [
      { icon: <SiReactrouter />, name: 'React Router' },
      { icon: <SiRedux />, name: 'Redux Toolkit' },
      { icon: <SiPrisma />, name: 'Prisma' },
    ],
    description:
      'Capable of integrating modern routing & state management libraries into React-based applications.',
  },
];

export default function SkillCardStack() {
  const [cards, setCards] = useState(skillCards);
  const sensitivity = 200;
  const cardDimensions = { width: 320, height: 400 };
  const animationConfig = { stiffness: 260, damping: 20 };
  const randomRotation = false;

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      if (index !== -1) {
        const [card] = newCards.splice(index, 1);
        newCards.unshift(card);
      }
      return newCards;
    });
  };

  const moveForward = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  };

  const moveBackward = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const last = newCards.pop();
      if (last) newCards.unshift(last);
      return newCards;
    });
  };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 800,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className={clsx(
                'rounded-3xl p-6 shadow-2xl bg-zinc-900 text-white text-center',
                'transform-style-3d w-full h-full'
              )}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '50% 50%', // Sudah disesuaikan agar simetris
              }}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
              <p className="text-xs text-gray-400 mb-4 tracking-widest">
                DRAG TO INTERACT
              </p>
              <hr className="border-t border-blue-500 w-2/3 mx-auto mb-6" />
              <div className="hide-scrollbar flex flex-col gap-4 items-start max-h-48 overflow-y-auto px-2 mb-6 text-left">
                {card.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-3 text-lg">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">{card.description}</p>
            </motion.div>
          </CardRotate>
        );
      })}

      {/* Tombol Navigasi Kiri */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 z-10">
        <MagneticEffect>
          <Button
            variant="outline"
            className="rounded-full py-8 px-6 text-4xl"
            onClick={moveBackward}
          >
            &laquo;
          </Button>
        </MagneticEffect>
      </div>

      {/* Tombol Navigasi Kanan */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-10">
        <MagneticEffect>
          <Button
            variant="outline"
            className="rounded-full py-8 px-6 text-4xl"
            onClick={moveForward}
          >
            &raquo;
          </Button>
        </MagneticEffect>
      </div>
    </div>
  );
}
