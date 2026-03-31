import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow | Collaborative Task Management",
  description: "Organize and track your tasks efficiently with TaskFlow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 antialiased`}>
        <AuthProvider>
          <Header />
          <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
