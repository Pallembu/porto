import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Faizal Rais Athallah | Web Developer & IT Support",
  description:
    "A 3+ year IT Support professional with expertise in network management, now focusing on building high-performance web applications with Next.js.",
  keywords: [
    "Web Developer",
    "IT Support",
    "Next.js",
    "Network Management",
    "Sanity CMS",
    "TailwindCSS",
  ],
  authors: [{ name: "Muhammad Faizal Rais Athallah" }],
  openGraph: {
    title: "Muhammad Faizal Rais Athallah | Web Developer & IT Support",
    description:
      "A 3+ year IT Support professional with expertise in network management, now focusing on building high-performance web applications with Next.js.",
    url: "https://zaristh.page",
    siteName: "Muhammad Faizal Rais Athallah Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
