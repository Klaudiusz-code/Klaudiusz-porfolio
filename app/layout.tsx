"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Klaudiusz Adamaszek",
  description: "Portfolio",
  icons: "./public/favicon.ico",
};
export default function RootLayout({
  children,
  hideNavbar,
}: {
  children: ReactNode;
  hideNavbar: boolean;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
