import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
