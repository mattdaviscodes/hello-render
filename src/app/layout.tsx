import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "👋 Hello, Render",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="container mx-auto px-5">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
