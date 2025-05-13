// app/layout.tsx
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Grattis på födelsedagen!",
  description: "Födelsedagshälsning med konfetti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={lora.variable}>
      <body className="font-lora">{children}</body>
    </html>
  );
}
