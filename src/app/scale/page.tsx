import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imageData={scaleImg}
      imageAlt="Steel Factory"
      title="Scale your app to infinity"
    />
  );
}
