import FuzzyText from "@/blocks/TextAnimations/FuzzyText/FuzzyText";

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-8">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={200}
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={50}
      >
        Page Not Found
      </FuzzyText>
    </div>

  )
}