"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Enhanced reusable components (matching the main page)
const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight leading-tight text-balance ${className}`}>
    {children}
  </h3>
);

const SectionText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-lg sm:text-xl leading-relaxed-plus text-gray-700 text-balance ${className}`}>
    {children}
  </p>
);

const Button = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <Link 
    href={href} 
    className={`
      inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg 
      transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
      ${variant === "primary" 
        ? "border-2 border-sage text-sage hover:bg-sage hover:text-white hover:border-sage shadow-warm" 
        : "border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-warm-lg"
      }
    `}
  >
    {children}
  </Link>
);

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default function About() {
  useScrollAnimation();

  return (
    <>
      <Head>
        <title>About Us - Outdoor Café | Our Story & Vietnamese Coffee Tradition</title>
        <meta name="description" content="Learn about Outdoor Café's story, our commitment to authentic Vietnamese coffee culture, and our two locations in Chicago North Park and Evanston serving the community since 2014." />
        <meta name="keywords" content="about outdoor cafe, vietnamese coffee tradition, chicago cafe story, family owned cafe, authentic vietnamese coffee" />
        <link rel="canonical" href="https://outdoorcafe.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outdoorcafe.com/about" />
        <meta property="og:title" content="About Outdoor Café - Our Story" />
        <meta property="og:description" content="Learn about our Vietnamese coffee tradition and commitment to quality at our Chicago and Evanston locations." />
        <meta property="og:image" content="https://outdoorcafe.com/espresso.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Outdoor Café - Our Story" />
        <meta name="twitter:description" content="Vietnamese coffee tradition and quality at our Chicago and Evanston locations." />
      </Head>

    <main className="w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/espresso.jpg"
            alt="Vietnamese Coffee Preparation - Traditional Drip Coffee at Outdoor Café"
            fill
            priority
            sizes="100vw"
            className="object-cover img-warm-filter"
          />
          <div className="absolute inset-0 gradient-warm z-10"></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="animate-gentle">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 sm:mb-12 text-white leading-tight text-shadow-warm text-balance">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed-plus mb-12 sm:mb-16 text-shadow-soft px-4 text-balance">
              More than just a café, we're a community of coffee lovers, dreamers, and friends who believe that every cup tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center fade-in-up">
            <SectionHeading className="mb-8 text-warm-dark">
              A Love Story <span className="text-accent-solid">25 YEARS</span> in the Making
            </SectionHeading>
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-12"></div>

            <div className="space-y-8 max-w-3xl mx-auto text-left">
              <SectionText className="text-xl">
                Back in 1999, my wife and I were just college students looking for a quiet place to study and hang out. We found this little café – a cozy corner where we could spend hours playing board games, sipping coffee, and dreaming about the future. It became our spot.
              </SectionText>

              <SectionText>
                Fast forward to 2014. That same café was up for sale, and the memories came flooding back. We couldn't let it disappear. We wanted to preserve what made it special – that welcoming atmosphere where students could claim their favorite corner, where first dates turned into lasting memories, where you could stay from open to close without anyone rushing you out.
              </SectionText>

              <SectionText>
                When we took over, the café was more of a smoothie and dessert spot than a coffee shop. We kept the soul of the place but expanded the menu – adding authentic Vietnamese coffee, matcha specialties, boba tea, banh mi, and all the drinks our community wanted. Today, we're proud to offer everything from traditional Cà Phê Sữa Đá to innovative matcha creations you won't find anywhere else.
              </SectionText>

              <SectionText>
                Our Evanston location carries the same philosophy: come in, get comfortable, and stay as long as you'd like. Whether you're a medical student cramming for exams, friends catching up, or someone who just needs a quiet corner with good coffee – this is your space.
              </SectionText>

              <SectionText className="font-medium text-accent-solid text-xl italic">
                "We don't just serve coffee. We preserve memories, create corners for connection, and keep the lights on for anyone who needs a place to belong."
              </SectionText>

              <SectionText className="text-base text-gray-600 mt-8">
                — Kevin, Owner<br/>
                Outdoor Café (since 2014, loyal customer since 1999)
              </SectionText>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32 bg-warm-light">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center fade-in-up">
          <SectionHeading className="mb-8 text-warm-dark">
            Visit Our <span className="text-accent-solid">LOCATIONS</span>
          </SectionHeading>
          <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
          <SectionText className="mb-12 text-xl">
            Come experience our carefully crafted coffee and welcoming atmosphere.
          </SectionText>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button href="/locations/chicago">Visit North Park</Button>
            <Button href="/locations/evanston">Visit Evanston</Button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
} 