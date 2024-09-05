import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imageData: StaticImageData;
  imageAlt: string;
  title: string;
}
export default function Hero(props: HeroProps) {
  const { imageData, imageAlt, title } = props;
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={imageData}
          fill
          style={{ objectFit: "cover" }}
          alt={imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>

      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
