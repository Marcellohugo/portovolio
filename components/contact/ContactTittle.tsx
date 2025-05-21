import GradientText from "../ui/text/AnimateSubtitle"
import AnimateTitle from "../ui/text/AnimateTitle"

export default function ContactTitle() {
    return (
        <section
            className="overflow-hidden"
        >
            <GradientText
                showBorder={false}
                className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                CONTACT INFORMATION
            </GradientText>
            <AnimateTitle
            >
                CONTACT
            </AnimateTitle>
        </section>
    )
}