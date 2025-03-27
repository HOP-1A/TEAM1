import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navigationBar/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
<<<<<<< HEAD
import { Toaster } from "@/components/ui/toaster";
=======
>>>>>>> refs/remotes/origin/95-product-detail-be-integration

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          {children}
<<<<<<< HEAD
          <Toaster />
=======
>>>>>>> refs/remotes/origin/95-product-detail-be-integration
        </body>
      </html>
    </ClerkProvider>
  );
}
