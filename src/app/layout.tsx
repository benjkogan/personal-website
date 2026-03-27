import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Kogan",
  description: "Personal website of Ben Kogan",
  openGraph: {
    title: "Ben Kogan",
    description: "Student — Athlete",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Kogan",
    description: "Student — Athlete",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/transparent.png" as="image" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
                var s = document.documentElement.style;
                s.setProperty("cursor", 'url("/transparent.png") 0 0, none', "important");
                document.addEventListener("pointerenter", function() {
                  s.setProperty("cursor", 'url("/transparent.png") 0 0, none', "important");
                }, true);
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
