"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="retro-title text-4xl font-bold">Ted's Pizzeria</h1>
          <div className="space-x-4">
            <Link
              href="/"
              className="retro-button px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="retro-button px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Menu
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="retro-card rounded-3xl p-12 max-w-4xl mx-auto text-center transform hover:scale-105 transition-transform duration-500">
          {/* Main Title */}
          <h1 className="retro-title text-8xl font-bold mb-8 leading-tight">
            Welcome to Ted's Pizzeria
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-retro-brown font-semibold mb-8 italic">
            "Far out flavors from the grooviest kitchen in town!"
          </p>

          {/* Description */}
          <div className="text-lg text-retro-brown mb-12 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-4">
              Step into our time machine and experience the most righteous pizza
              this side of the 70s! Our kitchen is cooking up some seriously
              groovy vibes with fresh ingredients and far-out flavor
              combinations that'll blow your mind, man.
            </p>
            <p>
              Whether you're craving a classic Margherita or something totally
              radical, we've got the good stuff to keep you groovin' all night
              long. ✌️
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <Link
              href="/menu"
              className="retro-button inline-block px-12 py-4 text-2xl text-white font-bold rounded-xl hover:scale-110 transition-all duration-300"
            >
              Check Out Our Groovy Menu! 🍕
            </Link>

            {/* Fun 70s Elements */}
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-6xl animate-bounce">🍕</div>
              <div className="text-6xl animate-bounce animation-delay-150">
                ✨
              </div>
              <div className="text-6xl animate-bounce animation-delay-300">
                🎶
              </div>
              <div className="text-6xl animate-bounce animation-delay-450">
                ☮️
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <div className="retro-card rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-retro-brown font-bold text-lg">
            🌈 Spreading peace, love, and pizza since the Summer of Love 🌈
          </p>
          <p className="text-retro-brown mt-2">
            Open Daily: 11 AM - 11 PM | Call: (555) GROOVY-1
          </p>
        </div>
      </footer>
    </div>
  );
}
