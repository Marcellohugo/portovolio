import GradientText from "../ui/text/AnimateSubtitle"

export default function ContactSubtitle() {
    return (
        <section
            className="w-full flex flex-col items-center justify-center overflow-hidden"
        >
            <GradientText
                showBorder={false}
                className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                STAY IN TOUCH
            </GradientText>
        </section>
    )
}