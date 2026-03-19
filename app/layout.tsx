import "./globals.css";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", manrope.variable)}>
      <body suppressHydrationWarning className="bg-background text-black">
        {children}
      </body>
    </html>
  );
}
