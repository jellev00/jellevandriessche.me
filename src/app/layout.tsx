import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a portfolio of Jelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-10 py-5 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
