"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MenuOption {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  available: boolean;
}

interface MenuSection {
  title: string;
  type: string;
  icon: string;
  items: MenuOption[];
}

export default function MenuPage() {
  const [menuOptions, setMenuOptions] = useState<MenuOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuOptions = async () => {
      try {
        const domain = process.env.NEXT_PUBLIC_DOMAIN || "localhost:8080";
        const response = await fetch(`http://${domain}/api/menu/options`);

        if (!response.ok) {
          throw new Error("Failed to fetch menu options");
        }

        const data = await response.json();
        setMenuOptions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching menu options:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuOptions();
  }, []);

  const groupMenuByType = (): MenuSection[] => {
    const sections: MenuSection[] = [
      { title: "Appetizers", type: "APPETIZER", icon: "🥨", items: [] },
      { title: "Pizzas", type: "PIZZA", icon: "🍕", items: [] },
      { title: "Burgers", type: "BURGER", icon: "🍔", items: [] },
      { title: "Salads", type: "SALAD", icon: "🥗", items: [] },
      { title: "Desserts", type: "DESSERT", icon: "🍰", items: [] },
      { title: "Beverages", type: "BEVERAGE", icon: "🥤", items: [] },
    ];

    menuOptions.forEach((item) => {
      const section = sections.find((s) => s.type === item.type);
      if (section) {
        section.items.push(item);
      }
    });

    return sections.filter((section) => section.items.length > 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="retro-card p-12 rounded-3xl text-center">
          <div className="text-6xl mb-4 animate-spin">🍕</div>
          <h2 className="retro-title text-3xl font-bold text-retro-brown">
            Loading our groovy menu...
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="retro-card p-12 rounded-3xl text-center max-w-md">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="retro-title text-3xl font-bold text-retro-red mb-4">
            Bummer, man!
          </h2>
          <p className="text-retro-brown mb-6">
            We couldn't load the menu right now. Maybe the kitchen is taking a
            groovy break?
          </p>
          <p className="text-sm text-retro-brown opacity-75">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="retro-button mt-6 px-6 py-3 text-white font-bold rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const menuSections = groupMenuByType();

  return (
    <div className="min-h-screen">
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
              className="retro-button px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-transform opacity-75"
            >
              Menu
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center py-12">
        <h1 className="retro-title text-7xl font-bold mb-4">Our Groovy Menu</h1>
        <p className="text-2xl text-retro-brown font-semibold italic">
          "Fresh vibes, far-out flavors, and righteous prices!"
        </p>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid gap-12">
          {menuSections.map((section) => (
            <div key={section.type} className="menu-section p-8">
              <div className="flex items-center justify-center mb-8">
                <span className="text-5xl mr-4">{section.icon}</span>
                <h2 className="retro-title text-5xl font-bold text-white bg-retro-brown px-6 py-3 rounded-xl shadow-lg border-4 border-retro-orange">
                  {section.title}
                </h2>
                <span className="text-5xl ml-4">{section.icon}</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className={`menu-item p-6 ${
                      !item.available ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-retro-brown leading-tight">
                        {item.name}
                      </h3>
                      <span className="retro-title text-2xl font-bold text-white bg-retro-orange px-3 py-1 rounded-lg ml-4 border-2 border-retro-brown min-w-fit">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-retro-brown leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {!item.available && (
                      <div className="text-center">
                        <span className="bg-retro-red text-white px-3 py-1 rounded-full text-sm font-bold">
                          Temporarily Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {menuSections.length === 0 && (
          <div className="text-center py-12">
            <div className="retro-card p-12 rounded-3xl inline-block">
              <div className="text-6xl mb-4">🤷‍♂️</div>
              <h2 className="retro-title text-3xl font-bold text-retro-brown mb-4">
                No menu items found
              </h2>
              <p className="text-retro-brown">
                Looks like the menu is taking a groovy break. Check back soon!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="p-8 text-center">
        <div className="retro-card rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-retro-brown font-bold text-lg">
            🌈 All prices include good vibes and cosmic energy 🌈
          </p>
          <p className="text-retro-brown mt-2">
            Questions? Call us at (555) GROOVY-1 or just send us good thoughts,
            man ✌️
          </p>
        </div>
      </footer>
    </div>
  );
}
