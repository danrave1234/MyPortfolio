import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ActiveSectionProvider } from "@/components/ActiveSectionProvider";
import { Background } from "@/components/Background";
import { MotionProvider } from "@/components/MotionProvider";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Never trap users at 1x — pinch-zoom is an accessibility requirement.
  maximumScale: 5,
  themeColor: "#08090b",
  colorScheme: "dark",
  // Let the page paint under the notch / home indicator; components pad
  // themselves with env(safe-area-inset-*).
  viewportFit: "cover",
};

export const metadata: Metadata = {
  // Required for Next.js to turn the relative OG/Twitter image paths into
  // absolute URLs. Without it they resolve against localhost in production.
  metadataBase: new URL("https://www.danravekeh.com"),
  title: "Danrave C. Keh | Full Stack & Cloud Developer",
  description:
    "Danrave C. Keh - CS Graduate, Full Stack Engineer & SaaS Founder. Building production systems and cloud-native applications.",
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
  openGraph: {
    title: "Danrave C. Keh | Full Stack & Cloud Developer",
    description:
      "Danrave C. Keh - CS Graduate, Full Stack Engineer & SaaS Founder. Building production systems and cloud-native applications.",
    url: "/",
    siteName: "Danrave C. Keh Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Danrave C. Keh — Full Stack & Cloud Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danrave C. Keh | Full Stack & Cloud Developer",
    description:
      "Danrave C. Keh - CS Graduate, Full Stack Engineer & SaaS Founder. Building production systems and cloud-native applications.",
    images: ["/assets/og-image.png"],
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
        className={`${manrope.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-[#04191c]"
        >
          Skip to content
        </a>

        <StructuredData />
        <Background />

        <MotionProvider>
          <ActiveSectionProvider>
            <div className="relative flex min-h-[100svh] flex-col">
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ActiveSectionProvider>
        </MotionProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
