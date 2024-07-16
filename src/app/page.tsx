import Header from "@/components/molecules/Header";
import HeroSection from "@/components/molecules/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-14 bg-[#2B2B2B]">
      <Header />
      <HeroSection />

    </main>
  );
}
