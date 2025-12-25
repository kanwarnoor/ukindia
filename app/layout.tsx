import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "UK India Business Council",
  description:
    "The UK India Business Council passionately believes that the UK-India partnership creates jobs and growth in both countries, and that UK and Indian businesses have ideas, technology, services, and products that can succeed in India and the UK, respectively. Through our last-mile insights, networks, future-focused policy advocacy, and market-entry services, we support businesses in achieving this success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
