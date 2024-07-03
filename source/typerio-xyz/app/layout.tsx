import type { Metadata } from "next";
import Footer from "@/components/Footer";

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
