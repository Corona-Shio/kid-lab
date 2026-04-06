import type { Metadata } from "next";
import { Kaisei_Decol, Kosugi_Maru } from "next/font/google";
import "./globals.css";

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const kosugiMaru = Kosugi_Maru({
  variable: "--font-kosugi-maru",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "きっずらぼ — かんじ・さんすう がくしゅうアプリ",
  description: "小学1〜3年生のかんじ・さんすうを楽しく学ぼう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${kaiseiDecol.variable} ${kosugiMaru.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9ff]">{children}</body>
    </html>
  );
}
