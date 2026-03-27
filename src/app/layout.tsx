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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
                var o = document.createElement("div");
                o.id = "cursor-overlay";
                o.style.cssText = "position:fixed;inset:0;z-index:99999;cursor:none;pointer-events:auto;";
                document.documentElement.appendChild(o);
                var fwd = ["click","dblclick","mousedown","mouseup","contextmenu","wheel","auxclick"];
                fwd.forEach(function(evt) {
                  o.addEventListener(evt, function(e) {
                    o.style.pointerEvents = "none";
                    var t = document.elementFromPoint(e.clientX, e.clientY);
                    o.style.pointerEvents = "auto";
                    if (t) t.dispatchEvent(new e.constructor(e.type, e));
                  });
                });
                o.addEventListener("mousemove", function(e) {
                  o.style.pointerEvents = "none";
                  var t = document.elementFromPoint(e.clientX, e.clientY);
                  o.style.pointerEvents = "auto";
                  if (t) {
                    t.dispatchEvent(new MouseEvent("mouseover", e));
                    t.dispatchEvent(new MouseEvent("mousemove", e));
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
