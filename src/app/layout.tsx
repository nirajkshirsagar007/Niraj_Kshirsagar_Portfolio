import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/navbar";

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Footer will go here later */}
          <footer className="border-t border-white/5 py-6">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
              <p className="text-sm text-gray-500">© 2026 Niraj Kshirsagar. Built with Next.js & ❤️</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
