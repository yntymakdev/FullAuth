import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/shared/styles/globals.css";
import { MainProvider } from "@/shared/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: " Продвинутая авторизция",
    template: "%s | Продвинутая авторизация",
  },
  description: "ТЕстовый",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainProvider>
          <div className="relative flex min-h screen flex-col">
            <div className="flex h-screen w-full items-center justify-center px-4">{children}</div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
