import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maya Bot - Your Ultimate Music Companion | Discord Music Bot",
  description: "Experience the best music streaming with Maya Bot - Your ultimate Discord music companion. High-quality audio, playlist management, and seamless integration with your favorite platforms including Spotify, YouTube, and SoundCloud.",
  keywords: ["Maya Bot", "Discord Music Bot", "Music Streaming", "Playlist Manager", "Discord Bot", "Music Commands", "Audio Bot", "Lavalink", "Spotify Bot", "YouTube Music Bot"],
  authors: [{ name: "Maya Development Team" }],
  openGraph: {
    title: "Maya Bot - Your Ultimate Music Companion",
    description: "Experience the best music streaming with Maya Bot. High-quality audio, playlist management, and seamless integration with your favorite platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maya Bot - Your Ultimate Music Companion",
    description: "Experience the best music streaming with Maya Bot. High-quality audio, playlist management, and seamless integration with your favorite platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
