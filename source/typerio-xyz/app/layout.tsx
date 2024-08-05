import type { Metadata } from "next";

//import "@/styles/global.scss";

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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
        </style>
      </head>
      <body>
        <div className="body">{children}</div>
      </body>
    </html>
  );
}
