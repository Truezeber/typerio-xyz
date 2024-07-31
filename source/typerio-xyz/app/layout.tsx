import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PageNavbar from "@/components/mainpageNavbar";

import "@/styles/_global.scss";

export const metadata: Metadata = {
  title: "Typerio",
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
        <PageNavbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
