import CategoriesSection from "@/components/organisms/CategoriesSection";
import DiscoverMore from "@/components/organisms/DiscoverMore";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorks from "@/components/organisms/HowItWorks";
import NFTHighlight from "@/components/organisms/NFTHighlight";
import TopCreators from "@/components/organisms/TopCreators";
import TrendingSection from "@/components/organisms/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8  bg-[#2B2B2B]">
      <div className="px-28 w-full">
        <Header />
        <HeroSection />
        <TrendingSection />
        <TopCreators />
        <CategoriesSection />
        <DiscoverMore />
      </div>
      <NFTHighlight />
      <div className="px-28 w-full">
        <HowItWorks />
      </div>
    </main>
  );
}
