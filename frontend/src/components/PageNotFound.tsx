import FuzzyText from "@/blocks/TextAnimations/FuzzyText/FuzzyText";

export default function PageNotFound() {
  return (
    <div className="flex flex-col gap-8">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        Page Not Found
      </FuzzyText>
    </div>

  )
}