import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookiePolicy from "@/components/ui/CookiePolicy";


export const metadata: Metadata = {
  title: {
    default: "RAG",
    template: "%s | RAG",
  },
  description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RAG",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
    url: "https://example.com",
    siteName: "RAG",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <CookiePolicy />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
