"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NorthParkMenuPage() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const cstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      const day = cstTime.getDay();
      const hour = cstTime.getHours();

      if (day >= 1 && day <= 4) {
        setIsOpen(hour >= 8 && hour < 20);
      } else {
        setIsOpen(hour >= 8 && hour < 21);
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const menuSections = [
    {
      id: "coffee-more",
      title: "Coffee and More",
      items: [
        "Coffee",
        "Iced Coffee",
        "Espresso",
        "Americano",
        "Cortado",
        "Cappuccino",
        "Hot Cocoa",
        "Vietnamese Iced Black Coffee",
        "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)",
        "Vietnamese Drip Coffee (Cà Phê Phin)"
      ],
      subsections: [
        {
          prefix: "Latte -",
          items: ["Caramel", "Chai", "Matcha", "Mocha", "Raspberry Mocha", "Taro"]
        },
        {
          prefix: "Frappe -",
          items: ["Caramel", "Matcha", "Mocha", "Mint"]
        }
      ]
    },
    {
      id: "specialty-drinks",
      title: "Specialty Drinks",
      items: [
        "Vietnamese Iced Milk Coffee (Cà Phê Sữa Đá)",
        "Matcha Latte",
        "Strawberry Matcha Latte",
        "Passion Fruit Green Tea",
        "Strawberry Hibiscus Tea",
        "Signature Milk Tea",
        "Brown Sugar Milk Tea",
        "Choco Tiger Milk Tea",
        "Honey Ginger Tea"
      ]
    },
    {
      id: "matcha-specialty",
      title: "Matcha Specialty",
      items: [
        "Matcha Latte",
        "Mango Matcha Latte",
        "Strawberry Matcha Latte",
        "Matcha Milk Tea",
        "Mango Matcha Smoothie",
        "Matcha Smoothie",
        "Matcha Frappe",
        "Matcha Milkshake"
      ]
    },
    {
      id: "tea-more",
      title: "Tea and More",
      items: [
        "Honey Ginger",
        "Citron (Yuja)",
        "Mango Green",
        "Coconut Green",
        "Passion Fruit Green",
        "Strawberry Hibiscus",
        "Strawberry Kiwi Green",
        "Peach Black",
        "Jasmine Green",
        "Peppermint",
        "Hibiscus",
        "Madame Butterfly",
        "Black",
        "Earl Grey"
      ]
    },
    {
      id: "milk-tea",
      title: "Milk Tea (Hot or Iced)",
      items: [
        "Brown Sugar",
        "Chai",
        "Choco Tiger",
        "Classic",
        "Coffee",
        "Coconut",
        "Earl Grey",
        "Honeydew",
        "Jasmine",
        "Matcha",
        "Signature",
        "Strawberry",
        "Taro",
        "Thai"
      ]
    },
    {
      id: "smoothies",
      title: "Smoothies (Choose up to two flavors)",
      items: [
        "Mango",
        "Strawberry",
        "Avocado",
        "Banana",
        "Kiwi",
        "Pineapple",
        "Peach",
        "Espresso",
        "Cookies & Cream",
        "Watermelon",
        "Matcha",
        "Milk Tea",
        "Taro",
        "Coconut",
        "Honeydew",
        "Red Bean",
        "Chocolate",
        "Vanilla"
      ]
    },
    {
      id: "milkshakes",
      title: "Milkshakes",
      items: [
        "Banana",
        "Choco Espresso",
        "Chocolate",
        "Chocolate Banana",
        "Cookies and Cream",
        "Mango",
        "Matcha Green Tea",
        "Vanilla",
        "Strawberry",
        "Mint Chip"
      ]
    },
    {
      id: "breakfast",
      title: "Breakfast Sandwiches",
      items: [
        "Egg and Cheese",
        "Egg, Ham and Cheese",
        "Lox",
        "Nutella Banana Crunch"
      ],
      subsections: [
        {
          prefix: "Toasted Bagel -",
          items: ["Plain", "Everything"]
        }
      ]
    },
    {
      id: "banh-mi",
      title: "Banh Mi",
      items: [
        "Classic Ham and Pork Pâté",
        "Veggie Tofu",
        "Roasted Chicken",
        "Grilled Pork Sausage"
      ]
    },
    {
      id: "panini",
      title: "Panini",
      items: [
        "Grilled Cheese",
        "Hazelnut Heaven",
        "Cheddar Ham",
        "Turkey Provolone"
      ]
    },
    {
      id: "other-food",
      title: "Other Food",
      items: [
        "Savory Salad",
        "Shin Ramyun Spicy Noodles Soup",
        "Shin Ramyun Black Noodles Soup"
      ]
    }
  ];

  return (
    <>
      {/* Page Meta Tags */}
      <title>North Park Menu - Outdoor Café | Vietnamese Coffee & Milkshakes</title>
      <meta name="description" content="North Park Chicago Outdoor Café menu with Vietnamese coffee, matcha, boba tea, milkshakes, banh mi, and pho. Open 8AM-8PM Mon-Thu, 8AM-9PM Fri-Sun. Order online!" />
      <meta name="keywords" content="north park cafe, vietnamese coffee chicago, boba tea chicago, matcha latte, banh mi chicago, milkshakes, pho, bryn mawr cafe" />
      <link rel="canonical" href="https://outdoorcafe.com/locations/chicago" />

      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content="https://outdoorcafe.com/locations/chicago" />
      <meta property="og:title" content="North Park Location - Outdoor Café Menu" />
      <meta property="og:description" content="Vietnamese coffee, matcha lattes, boba tea, milkshakes, and authentic banh mi at our North Park Chicago location. 3257 W Bryn Mawr Ave." />
      <meta property="og:image" content="https://outdoorcafe.com/favicon.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="North Park Location - Outdoor Café Menu" />
      <meta name="twitter:description" content="Vietnamese coffee, matcha lattes, boba tea, milkshakes, and banh mi in North Park Chicago." />

      {/* Local Business */}
      <meta name="geo.position" content="41.9834;-87.7176" />
      <meta name="geo.placename" content="North Park, Chicago, Illinois" />
      <meta name="geo.region" content="US-IL" />

      {/* Restaurant Structured Data for North Park */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Outdoor Café - North Park",
            "image": "https://outdoorcafe.com/favicon.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3257 W Bryn Mawr Ave",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "postalCode": "60659",
              "addressCountry": "US"
            },
            "telephone": "+17739427272",
            "url": "https://outdoorcafe.com/locations/chicago",
            "servesCuisine": ["Vietnamese", "Coffee", "Café", "Boba Tea"],
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "21:00"
              }
            ],
            "hasMenu": "https://outdoorcafe.com/locations/chicago"
          })
        }}
      />
    <main className="w-full min-h-screen bg-cream">
      {/* Header & Order Online Section */}
      <section className="py-12 sm:py-16 bg-warm-light relative overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float"></div>
        <div className="absolute bottom-12 right-16 w-1.5 h-1.5 bg-accent-solid/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-warm-dark leading-tight text-balance">
            North Park Location
          </h1>
          <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light mb-8">
            3257 W Bryn Mawr Ave, Chicago, IL 60659
          </p>

          {/* Order Online Card */}
          <div className="card-modern px-10 sm:px-12 py-6 sm:py-8 hover-glow bg-white/80 backdrop-blur-sm inline-block">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center animate-pulse-warm">
                  <span className="text-xl">🛒</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-warm-dark text-balance">
                Order Online for Pickup
              </h2>
              <div className="flex items-center justify-center space-x-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-sage' : 'bg-red-500'}`}></span>
                  Currently {isOpen ? 'Open' : 'Closed'}
                </span>
                <span>•</span>
                <span>Mon-Thu: 8AM-8PM • Fri-Sun: 8AM-9PM</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe/20978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg
                    transition-all duration-300 hover:scale-105 btn-warm hover-glow !rounded-full
                    bg-accent-solid text-white hover:bg-warm-dark shadow-warm-lg
                    border-2 border-accent-solid hover:border-warm-dark
                  "
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-warm-dark">Menu</h2>
            <div className="w-16 h-1 bg-sage mx-auto rounded-full mt-4"></div>
          </div>
          <div className="text-center space-y-12">
            {menuSections.map((section) => (
              <div key={section.id} className="space-y-4">
                {/* Category Header */}
                <h3 className="text-base font-semibold text-gray-900">
                  {section.title}
                </h3>

                {/* Menu Items - Pipe Separated */}
                <p className="text-gray-800 text-base leading-relaxed">
                  {section.items.map((item, index) => (
                    <span key={index}>
                      {item}
                      {index < section.items.length - 1 && ' | '}
                    </span>
                  ))}
                </p>

                {/* Subsections if they exist */}
                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <p key={subIndex} className="text-gray-800 text-base leading-relaxed">
                    {subsection.prefix} {subsection.items.join(' | ')}
                  </p>
                ))}
              </div>
            ))}

            {/* Pastries Section */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900">
                Pastries
              </h3>
              <p className="text-gray-800 text-base leading-relaxed">
                Fresh pastries from local bakery (Dokil Bakery)
              </p>
            </div>

            {/* Catering Info */}
            <div className="pt-6 space-y-3 text-gray-700 border-t border-gray-300">
              <h4 className="text-lg font-semibold text-gray-900">Catering Available</h4>
              <p className="text-sm">
                We offer catering options including Spring Rolls, Egg Rolls, and Banh Mi trays.
              </p>
              <p className="text-sm">
                Requires 24 hours advance notice. Please call your nearest location to discuss catering or email outdoorcafe2014@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
