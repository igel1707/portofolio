import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prigel Kusumawardani | Associate Project Manager & System Analyst",
  description: "Portfolio of Prigel Kusumawardani, a high-achieving Informatics student specialized in Project Management, System Analysis, and UI/UX Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
