import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computing Engineer Portfolio | Infrastructure & Automation",
  description: "Modern, professional portfolio of a Computing Engineer specializing in Infrastructure, Automation, and Network Engineering.",
  keywords: ["Computing Engineer", "Network Engineer", "Automation", "Linux", "Python", "PostgreSQL", "Infrastructure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="relative min-h-screen bg-background">
            {/* Background Grid and Glow */}
            <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="fixed inset-0 glow-mesh pointer-events-none" />
            
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
