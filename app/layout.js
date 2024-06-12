import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import {  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AMBox-fileshare",
  description: "A comprehensive platform for sharing files.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
