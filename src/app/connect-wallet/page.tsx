import ConnectWallet from "@/components/organisms/ConnectWallet";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

export default function SignUp() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>
            <ConnectWallet />

            <Footer />

        </main>
    );
}
