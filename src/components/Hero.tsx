// components/Hero.tsx
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  imageSrc: string;
  altText: string;
  children?: ReactNode;
}

const Hero = ({ imageSrc, altText, children }: HeroProps) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 text-center gap-4">
        <h1 className="text-amber-400 text-5xl md:text-6xl marck font-bold drop-shadow-md py-3">Grattis på födelsedagen!</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;
