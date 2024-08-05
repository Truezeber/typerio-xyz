import type { Metadata } from "next";

import "./global.css";
import "@/styles/edge-light.css";
import "remark-github-blockquote-alert/alert.css";

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
      <body className="body">
        <Navbar />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
