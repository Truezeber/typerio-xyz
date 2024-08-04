import type { Metadata } from "next";

import "@/components/DocsNavbar";

import "@/styles/_global.scss";
import Navbar from "@/components/DocsNavbar";

export const metadata: Metadata = {
  title: "Typerio Docs",
  description: "Typerio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/typerio-logo.svg" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
