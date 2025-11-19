"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { trackExternalLink } from "@/lib/analytics";

export default function EvanstonMenuPage() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const cstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      const day = cstTime.getDay();
      const hour = cstTime.getHours();

      if (day >= 0 && day <= 4) {
        setIsOpen(hour >= 7 && hour < 19);
      } else {
        setIsOpen(hour >= 7 && hour < 21);
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const menuSections = [
    {
      id: "seasonal-drinks",
      title: "Seasonal Drinks",
      items: [
        "Pumpkin Chai Latte",
        "Peppermint Mocha Latte",
        "White Chocolate Mocha",
        "Mint Mocha",
        "Nutcracker Mocha"
      ]
    },
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
        "Matcha Milkshake",
        "Matcha Cold Foam"
      ]
    },
    {
      id: "tea-more",
      title: "Tea and More",
      items: [
        "Honey Ginger",
        "Citron (Yuja)",
        "Mango Green",
        "Passion Fruit Green",
        "Strawberry Hibiscus",
        "Strawberry Green",
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
        "Chocolate",
        "Vanilla"
      ]
    },
    {
      id: "breakfast",
      title: "Breakfast",
      items: [
        "Nutella Crush",
        "Cinnamon Toast"
      ],
      subsections: [
        {
          prefix: "Toasted Bagels -",
          items: ["Egg and Cheese Bagel", "Egg, Ham and Cheese Bagel", "Lox"]
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
      id: "spring-rolls",
      title: "Spring Rolls",
      items: [
        "Veggie Tofu",
        "Shrimp",
        "Grilled Pork Sausage",
        "Sampler"
      ]
    },
    {
      id: "other-food",
      title: "Other Food",
      items: [
        "Savory Salad",
        "Shin Ramyun Spicy Noodles Soup",
        "Chicken Pho (Seasonal - Grab & Go)"
      ]
    }
  ];

  return (
    <>
      <Head>
      <title>Evanston Menu - Outdoor Café | Vietnamese Coffee & Boba Tea</title>
      <meta name="description" content="Evanston Outdoor Café menu featuring Vietnamese coffee, matcha specialties, boba tea, banh mi sandwiches, and spring rolls. Open 7AM-7PM Sun-Thu, 7AM-9PM Fri-Sat. Order online!" />
      <meta name="keywords" content="evanston cafe, vietnamese coffee evanston, boba tea evanston, matcha latte, banh mi evanston, coffee shop central street" />
      <link rel="canonical" href="https://outdoorcafe.com/locations/evanston" />

      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content="https://outdoorcafe.com/locations/evanston" />
      <meta property="og:title" content="Evanston Location - Outdoor Café Menu" />
      <meta property="og:description" content="Vietnamese coffee, matcha lattes, boba tea, and banh mi at our Evanston location. 2012 Central Street. Order online for pickup!" />
      <meta property="og:image" content="https://outdoorcafe.com/favicon.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Evanston Location - Outdoor Café Menu" />
      <meta name="twitter:description" content="Vietnamese coffee, matcha lattes, boba tea, and banh mi at our Evanston location." />

      {/* Local Business */}
      <meta name="geo.position" content="42.0471;-87.6876" />
      <meta name="geo.placename" content="Evanston, Illinois" />
      <meta name="geo.region" content="US-IL" />

      {/* Restaurant Structured Data for Evanston */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Outdoor Café - Evanston",
            "image": "https://outdoorcafe.com/favicon.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2012 Central St",
              "addressLocality": "Evanston",
              "addressRegion": "IL",
              "postalCode": "60201",
              "addressCountry": "US"
            },
            "telephone": "+18474250022",
            "url": "https://outdoorcafe.com/locations/evanston",
            "servesCuisine": ["Vietnamese", "Coffee", "Café", "Boba Tea"],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "350",
              "bestRating": "5",
              "worstRating": "1"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "07:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday", "Saturday"],
                "opens": "07:00",
                "closes": "21:00"
              }
            ],
            "hasMenu": "https://outdoorcafe.com/locations/evanston"
          })
        }}
      />
      </Head>
    <main className="w-full min-h-screen bg-cream">
      {/* Header & Order Online Section */}
      <section className="py-12 sm:py-16 bg-warm-light relative overflow-hidden">
        <div className="absolute top-12 right-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-accent-solid/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-warm-dark leading-tight text-balance">
            Evanston Location
          </h1>
          <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light mb-8">
            2012 Central St • Evanston, IL 60201
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
                <span>Sun-Thu: 7AM-7PM • Fri-Sat: 7AM-9PM</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink('evanston', 'Evanston Menu Page')}
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
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-light text-warm-dark">Menu</h2>
            <div className="w-16 h-1 bg-sage mx-auto rounded-full mt-4"></div>
          </div>
          <div className="text-center space-y-12">
            {menuSections.map((section) => {
              // Special rendering for seasonal drinks
              if (section.id === "seasonal-drinks") {
                return (
                  <div key={section.id}>
                    {/* Chalkboard Sign */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl px-8 pt-4 pb-8 space-y-5 shadow-2xl border-8 border-[#D4A574]" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      {/* Snow dots decoration */}
                      <div className="absolute top-3 left-4 w-2 h-2 bg-white/80 rounded-full"></div>
                      <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                      <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <div className="absolute bottom-8 right-6 w-2 h-2 bg-white/75 rounded-full"></div>
                      <div className="absolute top-12 left-20 w-1 h-1 bg-white/50 rounded-full"></div>
                      <div className="absolute top-16 right-16 w-1 h-1 bg-white/50 rounded-full"></div>

                      {/* Snowflake decorations */}
                      <div className="absolute top-4 right-4 text-blue-300/60 text-lg">❄️</div>
                      <div className="absolute bottom-5 left-5 text-blue-300/50 text-sm">❄️</div>

                      {/* Title */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white tracking-wide mb-1" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                          WINTER SPECIAL
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
                      </div>

                      {/* Menu items with decorative elements */}
                      <div className="space-y-3 text-center">
                        {section.items.map((item, index) => (
                          <div key={index} className="flex items-center justify-center gap-3">
                            <span className="text-blue-300/70 text-sm">❄️</span>
                            <span className="text-white/95 text-lg font-medium tracking-wide" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.4)'}}>
                              {item.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative coffee cup */}
                      <div className="absolute bottom-3 right-3 text-2xl opacity-40">☕</div>
                    </div>
                  </div>
                );
              }

              // Standard rendering for other sections
              return (
                <div key={section.id} className="space-y-4">
                  {/* Category Header */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-sage mx-auto rounded-full mt-2"></div>
                  </div>

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
              );
            })}

            {/* Pastries Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Pastries
                </h3>
                <div className="w-16 h-0.5 bg-sage mx-auto rounded-full mt-2"></div>
              </div>
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
                Requires 24 hours advance notice. Please call your nearest location to discuss catering or email <a href="mailto:outdoorcafe2014@gmail.com" className="text-sage hover:text-warm-dark underline transition-colors">outdoorcafe2014@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
