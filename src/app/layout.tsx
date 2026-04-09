import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "10xSRE Console",
  description: "10xSRE observability console"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Theme
          appearance="inherit"
          accentColor="tomato"
          grayColor="gray"
          radius="large"
          scaling="100%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
