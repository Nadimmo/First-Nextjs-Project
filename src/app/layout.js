"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import AuthProvider from "@/components/service/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();
  if (pathName.includes("/dashboard")) {
    return (
      <html>
        <body>
          <div className="flex">
            <DashboardNavbar />
            <div className="w-full pl-4">{children}</div>
          </div>
        </body>
      </html>
    );
  } else {
    return (
      <html data-theme="light" lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </body>
      </html>
    );
  }
}
