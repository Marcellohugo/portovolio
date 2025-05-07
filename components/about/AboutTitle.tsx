import GradientText from "../ui/text/GradientText"
import AnimateTitle from "../ui/text/AnimateTitle"

export default function AboutTitle() {
    return (
        <section
            className="overflow-hidden"
        >
            <GradientText
                animationSpeed={3}
                showBorder={false}
                className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                Introduction
            </GradientText>
            <AnimateTitle
            >
                PROFILE
            </AnimateTitle>
        </section>
    )
}