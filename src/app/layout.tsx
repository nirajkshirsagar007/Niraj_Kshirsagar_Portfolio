import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niraj Kshirsagar | Portfolio",
  description: "Personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground flex flex-col">
        {/* Header/Navbar will go here later */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center">
            {/* Header placeholder */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto py-6">
          {children}
        </main>

        {/* Footer will go here later */}
        <footer className="border-t py-6">
          <div className="container mx-auto flex items-center justify-between">
            {/* Footer placeholder */}
          </div>
        </footer>
      </body>
    </html>
  );
}
