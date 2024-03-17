import type { Metadata, Viewport } from 'next';
import { Inter ,Abril_Fatface,Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: '400'
});
const AlegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: '400'
});


export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  themeColor: '#3367D6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
    <link rel="manifest" href="/manifest.json" />
  </Head>

      <body className={`${inter.className}  ${AbrilFatface.className} ${AlegreyaSans.className}no-scrollbar overflow-y-scroll`}>{children}</body>
    </html>
  );
}
