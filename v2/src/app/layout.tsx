import type { Metadata } from "next";
import { Manrope, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ActiveSectionProvider } from "@/components/ActiveSectionProvider";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danrave C. Keh | Full Stack & Cloud Developer",
  description: "Portfolio of Danrave C. Keh - Full Stack Engineer, Cloud Architect, and Creative Developer.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Cloud",
    "Vercel",
    "Neon PostgreSQL",
    "Tailwind",
    "Danrave Keh",
  ],
  authors: [{ name: "Danrave C. Keh" }],
  applicationName: "Danrave C. Keh Portfolio",
  icons: {
    icon: "/assets/Logo - Danrave Keh.png",
    shortcut: "/assets/Logo - Danrave Keh.png",
    apple: "/assets/Logo - Danrave Keh.png",
  },
  openGraph: {
    title: "Danrave C. Keh | Full Stack & Cloud Developer",
    description: "Portfolio of Danrave C. Keh - Full Stack Engineer, Cloud Architect, and Creative Developer.",
    url: "/",
    siteName: "Danrave C. Keh Portfolio",
    images: [
      {
        url: "/assets/Logo - Danrave Keh.png",
        width: 1200,
        height: 1200,
        alt: "Danrave C. Keh logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danrave C. Keh | Full Stack & Cloud Developer",
    description: "Portfolio of Danrave C. Keh - Full Stack Engineer, Cloud Architect, and Creative Developer.",
    images: ["/assets/Logo - Danrave Keh.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-[#12B7C9] selection:text-white`}
      >
        <ActiveSectionProvider>
            <div className="relative min-h-screen flex flex-col">
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
