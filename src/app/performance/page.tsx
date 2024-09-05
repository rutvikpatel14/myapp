import Hero from "@/components/Hero";
import performanceImg from "public/performance.jpg";

export default function performancePage() {
  return (
    <Hero
      imageData={performanceImg}
      imageAlt="Welding"
      title="We serve high level of applications"
    />
  );
}
