"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If we have a user, we're redirecting, so don't show the landing page flash
  if (user) return null;

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
          Master your tasks with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            TaskFlow
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          The collaborative task management application allowing you to create, organize, and track your work seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/auth"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
          >
            Get Started for Free
          </Link>
          <Link
            href="#features"
            className="inline-flex justify-center items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:shadow transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
