import GradientText from "../ui/text/AnimateSubtitle"
import AnimateTitle from "../ui/text/AnimateTitle"

export default function ProjectsTitle() {
    return (
        <section
            className="overflow-hidden"
        >
            <GradientText
                showBorder={false}
                className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                FEATURED WORKS
            </GradientText>
            <AnimateTitle
            >
                PROJECTS
            </AnimateTitle>
        </section>
    )
}