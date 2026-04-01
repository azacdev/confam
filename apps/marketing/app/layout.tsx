import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confam",
  description:
    "Confam is a platform for professionals across Africa to share and discover salaries, company reviews, and career insights — completely anonymously. Know before you go.",
};

import { ConvexClientProvider } from "@confam/backend";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="scroll-smooth antialiased">
        <ConvexClientProvider url={process.env.NEXT_PUBLIC_CONVEX_URL!}>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
