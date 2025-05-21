"use client"

import Timeline from "./components/Timeline";
import TypingAnimator from "@/components/ui/text/TypingText";

export default function About() {
    return (
        <section id="about" className="relative w-full pt-24 ">
            <Timeline/>
            <TypingAnimator
                text="haii"
            />
        </section>
    )
}