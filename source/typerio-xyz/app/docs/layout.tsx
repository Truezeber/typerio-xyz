import type { Metadata } from "next";

import "@/components/DocsNavbar";

import "@/styles/global.scss";
import "@/styles/edge-light.css";
import "remark-github-blockquote-alert/alert.css";

import styles from "@/styles/docs.module.scss";

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
        <div className={styles.body}>
          <Navbar />
          <div className={styles.page}>{children}</div>
        </div>
      </body>
    </html>
  );
}
