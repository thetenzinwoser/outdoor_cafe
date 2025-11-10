"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
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

    const animatedElements = document.querySelectorAll('.fade-in-up, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <title>Page Not Found - Outdoor Café</title>
      <meta name="description" content="The page you're looking for doesn't exist. Visit our café locations or browse our menu." />

      <main className="w-full min-h-screen bg-cream flex items-center justify-center px-6 sm:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Coffee Cup Illustration */}
          <div className="mb-8 sm:mb-12 scale-in">
            <div className="inline-block relative">
              {/* Steam animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-1 h-8 bg-sage/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
                <div className="w-1 h-10 bg-sage/40 rounded-full animate-float" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1 h-8 bg-sage/30 rounded-full animate-float" style={{animationDelay: '0.6s'}}></div>
              </div>

              {/* Coffee cup emoji */}
              <div className="text-9xl animate-gentle">
                ☕
              </div>
            </div>
          </div>

          {/* 404 Message */}
          <div className="fade-in-up">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light text-warm-dark mb-4 sm:mb-6">
              404
            </h1>
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-6 sm:mb-8"></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6 sm:mb-8 text-balance">
              Oops! This page took a coffee break
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed text-balance">
              We couldn't find the page you're looking for. But don't worry – our café is always open and ready to serve you!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
              <Link
                href="/"
                className="inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                  bg-sage text-white hover:bg-warm-dark shadow-warm"
              >
                Go Home
              </Link>
              <Link
                href="/menu"
                className="inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                  border-2 border-sage text-sage hover:bg-sage hover:text-white shadow-warm"
              >
                View Menu
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/locations/chicago" className="text-sage hover:text-warm-dark transition-colors hover:underline">
                  North Park Location
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/locations/evanston" className="text-sage hover:text-warm-dark transition-colors hover:underline">
                  Evanston Location
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/about" className="text-sage hover:text-warm-dark transition-colors hover:underline">
                  Our Story
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/contact" className="text-sage hover:text-warm-dark transition-colors hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float hidden md:block"></div>
          <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-sage/30 rounded-full animate-float hidden md:block" style={{animationDelay: '2s'}}></div>
        </div>
      </main>
    </>
  );
}
