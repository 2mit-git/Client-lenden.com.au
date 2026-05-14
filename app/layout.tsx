import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeEffects from "../components/ThemeEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lenden Epicurean - Premium Food Products",
  description: "Experience the finest in quality, taste, and sourcing. Available at our specialized shops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ThemeEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
