import GradientText from "../ui/text/AnimateSubtitle"

export default function AboutSubtitle() {
    return (
        <section
            className="my-5 w-full flex flex-col items-center justify-center overflow-hidden"
        >
            <GradientText
                showBorder={false}
                className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                HOLLA, AMIGO!
            </GradientText>
            
        </section>
    )
}