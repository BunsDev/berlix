import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { geistMono, geistSans } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Berlix UI",
  description: "React Components based on TailwindCSS and Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
