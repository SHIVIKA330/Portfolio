import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: 'Shivika Jain — Full-Stack Developer & Hackathon Builder',
  description: 'CS student at GLA University. TensorFlow contributor. Building at the intersection of fintech, AI, and social impact.',
  openGraph: {
    title: 'Shivika Jain',
    description: 'Full-stack developer. Hackathon builder. TensorFlow contributor.',
    url: 'https://shivikajain.vercel.app',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased text-text-primary bg-bg-base relative min-h-screen bg-dots`}>
        {/* Film grain noise overlay */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-[999]" />
        
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
