import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "EIN Application Made Easy",
  description:
    "Need an EIN for your business? We simplify the process! Our service helps entrepreneurs, startups, and businesses apply for and obtain their Employer Identification Number quickly and hassle-free. Start your journey toward compliance and success today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
