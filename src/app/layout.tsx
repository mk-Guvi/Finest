import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/onBoarding/modal-provider";



const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabits",
  description: "Finance in your pocket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <ModalProvider>
        {children}
        </ModalProvider>
      </body>
    </html>
  );
}
