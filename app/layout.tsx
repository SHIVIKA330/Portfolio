import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: 'Shivika Jain — Full-Stack Developer',
  description: 'CS student at GLA University. TensorFlow contributor. Building at the intersection of fintech, AI, and social impact.',
  openGraph: {
    title: 'Shivika Jain',
    description: 'Full-stack developer. Hackathon builder. TensorFlow contributor.',
    url: 'https://shivika.onrender.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable} font-sans antialiased text-text-primary bg-bg-base min-h-screen`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
