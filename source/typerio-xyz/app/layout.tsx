import type { Metadata } from "next";

import "./global.css";

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
      <body className="body">{children}</body>
    </html>
  );
}
