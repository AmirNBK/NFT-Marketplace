import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import TrendingSection from "@/components/organisms/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-28 bg-[#2B2B2B]">
      <Header />
      <HeroSection />
      <TrendingSection />
    </main>
  );
}
