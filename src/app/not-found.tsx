import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDF9F8]">
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-6 text-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-9xl font-black text-[#5A0D0A]/10">404</h1>
                        <h2 className="text-4xl font-black text-[#5A0D0A]">Page Not Found</h2>
                        <p className="text-gray-500 max-w-md mx-auto font-medium">
                            The page you are looking for doesn't exist or has been moved.
                            Let's get you back on track.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="inline-block bg-[#AD0600] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#5A0D0A] transition-all transform hover:-translate-y-1"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
