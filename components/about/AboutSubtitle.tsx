import GradientText from "../ui/text/AnimateSubtitle"

export default function AboutSubtitle() {
    return (
        <section
            className="my-5 w-full flex flex-col items-center justify-center overflow-hidden"
        >
            <GradientText
                animationSpeed={3}
                showBorder={false}
                className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                >
                Holaa, amigo!
            </GradientText>
            {/* <span
             className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold text-center"
            >
                lalala
            </span> */}
        </section>
    )
}