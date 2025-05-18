import GradientText from "../ui/text/AnimateSubtitle"
import AnimateTitle from "../ui/text/AnimateTitle"

export default function ProjectsTitle() {
    return (
        <section
            className="overflow-hidden"
        >
            <GradientText
                animationSpeed={3}
                showBorder={false}
                className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                Featured Works
            </GradientText>
            <AnimateTitle
            >
                PROJECTS
            </AnimateTitle>
        </section>
    )
}