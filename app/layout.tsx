import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Vakaman Developers — Architecture With Mass", template: "%s — Vakaman Developers" },
  description: "Explore the Vakaman portfolio of architectural projects across Coimbatore, Chennai, the Nilgiris and Anaikatti.",
  metadataBase: new URL("https://vakaman.com"),
  openGraph: {
    type: "website",
    siteName: "Vakaman Developers",
    title: "Vakaman Developers — Architecture With Mass",
    description: "A considered portfolio of places, proportion and permanence.",
  },
};

export const viewport: Viewport = { themeColor: "#08080A", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fraunces.variable + " " + dmSans.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
