import NavBar from "@/layout/NavBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import Footer from "@/layout/Footer/Footer";

const rocknRoll_One = RocknRoll_One({ weight: "400", subsets: ["latin"] });

export const BASE_URL = "https://diana-forostiana-portfolio.vercel.app/";
export const TITLE = "Diana Forostiana";
export const DESCRIPTION = "Diana Forostiana Portfolio";

export const metadata = {
  title: TITLE,
  name: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    locale: "uk",
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={rocknRoll_One.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
