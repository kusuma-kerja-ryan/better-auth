import type { Metadata } from "next";
import "./globals.css";
import 'lenis/dist/lenis.css'
import { Navbar } from "@/components/layout/nav";
import { Footer7 } from "@/components/layout/footer";
import AnimateWrapper from "@/components/layout/wrapper/AnimateWrapper";
import StickyCursor from "@/components/animate/StickyCursor";

export const metadata: Metadata = {
  title: "Ryan Sukamoto | Photography Portfolio",
  description: "Ryan Kusuma's Photography Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-full`}>
        <StickyCursor />
        <Navbar />
        <AnimateWrapper>
          <main className="pt-12 md:pt-14">
            {children}
            <Footer7 />
          </main>
        </AnimateWrapper>
      </body>
    </html>
  );
}
