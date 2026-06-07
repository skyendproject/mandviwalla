import type { Metadata } from "next";
import { Lato, Maven_Pro } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mandviwalla Mauser Plastic Industries",
    template: "%s | Mandviwalla Mauser Plastic Industries",
  },
  description:
    "Pakistan's leading plastic manufacturer specializing in industrial packaging solutions.",

  icons: {
    icon: "/new-logo.jpg",
    shortcut: "/new-logo.jpg",
    apple: "/new-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mavenPro.variable} ${lato.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}