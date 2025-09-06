import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Jsah Web", // '%s' will be replaced by specific page titles
    default: "Jsah Web", // Default title if no specific page title is set
  },
  description: "A description of your Next.js application.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
