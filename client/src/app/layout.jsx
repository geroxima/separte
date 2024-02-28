import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import HeroHeader from "@/components/HeroHeader";
import { AuthProvider } from "@/components/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Se parte",
  description: "App de crowdfunding paraguaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header titleButton="How it works" titleLink="Sign in" />

          {/* <main className="mx-auto max-w-5xl "> */}
          <main className="mx-auto max-w-5xl">{children}</main>

          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
