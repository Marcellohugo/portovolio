import React, { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import { LuArrowRight as ArrowRightIcon, LuMinus as MinusIcon } from "react-icons/lu";
import MagneticEffect from "@/components/ui/button/MagneticEffect";

export default function StoryOfMyLife() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className=" flex items-center justify-center px-4">
      <div className="max-w-[1200px] ">
        <p className="text-justify text-lg leading-relaxed">
          <a
            href="#"
            className="text-primary hover:underline"
          >
            Marco Marcello Hugo
          </a>{" "}
          (born January 15, 2004), better known as Marco, is a
          <span className="text-primary text-lg"> Fullstack Developer </span>
          specializing in Frontend Development. My interest in programming and
          computers began in collage when I discovered Debian OS. Known for
          My computer skills, I learned C++ from a friend in senior high
          school and honed my abilities through self-study…
        </p>

        {expanded && (
          <div className="text-justify text-lg mt-4 space-y-4">
            <p>
              In 2017–2018, I was active in the <span className="text-primary text-lg">SMPN 84 Jakarta Student Council</span> as <span className="text-primary text-lg">Deputy Chairperson 1</span>.
              I helped design and implement extracurricular plenary meetings, coordinate divisions in compiling work programs, and ensure that every activity was carried out on time and according to the direction of the Student Council supervisor.
              At the same time, I also studied <span className="text-primary text-lg">Taekwondo intensively—training five times a week</span>, participating in <span className="text-primary text-lg">sub-district and city-level championships</span>, and successfully earning <span className="text-primary text-lg">a blue belt in less than a year</span>. This experience instilled discipline, focus, and a high competitive spirit in every aspect of my activities.
            </p>
            <p>
              In 2020–2021, I served as <span className="text-primary text-lg">Deputy Chairperson 1 of MPK SMAN 3 Bekasi</span>, coordinating internal and external meetings, evaluating work program achievements, and monitoring fundraising commissions to community service; in the <span className="text-primary text-lg">period of October–December 2021</span>,
              I also worked <span className="text-primary text-lg">part-time as a barista & server at Kopi Tala Bekasi</span>, preparing drinks according to standards, maintaining the cleanliness of the area, and serving customers in a friendly and efficient manner—the experience honed my leadership, time management, and communication skills.
            </p>
            <p>
              From August 2022 to now, I am studying <span className="text-primary text-lg">Informatics Engineering</span> at <span className="text-primary text-lg">Institut Teknologi Sepuluh Nopember</span> Surabaya—in the first year I built my academic foundation while becoming <span className="text-primary text-lg">a producer of the 2022 class profile video</span>,
              in 2023 I focused on core courses while being active in various committees such as <span className="text-primary text-lg">BEM ITS and Schematics ITS</span>, in 2024 I was involved in a development project and was selected as<span className="text-primary text-lg">the Man of LKMM-TM BEM FEB Unesa</span>,
              and in 2025 I deepened my technical skills through<span className="text-primary text-lg">projects and independent studies</span> to qualify for an internship—this experience honed my technical, collaboration, and leadership skills.
            </p>
            <p>
              I continues to improve his programming skills and knowledge, always striving for
              higher achievements in his career.
            </p>
          </div>
        )}

        <div className="flex items-center justify-center mt-8">
          <MagneticEffect>
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  Hide Article <MinusIcon className="ml-2 h-4 w-4" />
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
    </section>
  );
}
