"use client";

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TaskFlow
            </span>
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                href="/auth"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
