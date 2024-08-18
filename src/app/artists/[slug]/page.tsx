import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

export default function SingleArtist() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-8  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>

            <Footer />

        </main>
    );
}
