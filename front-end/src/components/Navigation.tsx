"use client";

import Link from "next/link";

interface NavigationProps {
  currentPage?: "home" | "menu";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  return (
    <nav className="p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="retro-title text-4xl font-bold cursor-pointer hover:scale-105 transition-transform">
            Ted's Pizzeria
          </h1>
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className={`retro-button px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-transform ${
              currentPage === "home" ? "opacity-75" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`retro-button px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-transform ${
              currentPage === "menu" ? "opacity-75" : ""
            }`}
          >
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}
