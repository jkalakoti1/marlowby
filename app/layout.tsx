import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Session } from "@/features/session";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_PROJECT_PRODUCTION_URL ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) : undefined,
  title: {
    default: "Marlowby — A new city, at your doorstep.",
    template: "%s | Marlowby",
  },
  description:
    "Discover city-inspired goods, local stories, and a little everyday adventure. Explore the Marlowby subscription-box concept.",
  openGraph: {
    title: "Marlowby — Good places travel far.",
    description: "A little local discovery, delivered.",
    images: ["/images/social.webp"],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
  other: { "theme-color": "#F7F3EB" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Session>
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Session>
      </body>
    </html>
  );
}
