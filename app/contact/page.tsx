"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

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
      transition-all duration-300 hover:scale-105 btn-warm hover-glow !rounded-full
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

export default function Contact() {
  useScrollAnimation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you for your message! We\'ll get back to you soon.');
        e.currentTarget.reset(); // Clear the form
      } else {
        setFormStatus('error');
        setFormMessage('Failed to send message. Please try again or email us directly at outdoorcafe2014@gmail.com');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again or email us directly at outdoorcafe2014@gmail.com');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Outdoor Café | Hours, Locations & Phone Numbers</title>
        <meta name="description" content="Contact Outdoor Café. North Park Chicago: (773) 539-6078, Every day 8AM-9PM. Evanston: (847) 425-0022, Sun-Thu 7AM-7PM, Fri-Sat 7AM-9PM. Order online!" />
        <meta name="keywords" content="contact outdoor cafe, cafe hours, chicago cafe phone, evanston cafe contact, coffee shop hours, order online" />
        <link rel="canonical" href="https://outdoorcafe.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outdoorcafe.com/contact" />
        <meta property="og:title" content="Contact Outdoor Café - Hours & Locations" />
        <meta property="og:description" content="Two locations in Chicago North Park and Evanston. Call or order online for pickup!" />
        <meta property="og:image" content="https://outdoorcafe.com/favicon.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Outdoor Café" />
        <meta name="twitter:description" content="Two locations in Chicago North Park and Evanston. Call or order online!" />
      </Head>

    <main className="w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shared.png"
            alt="Outdoor Café Community - Friends Enjoying Vietnamese Coffee and Conversation"
            fill
            priority
            sizes="100vw"
            className="object-cover img-warm-filter"
          />
          <div className="absolute inset-0 gradient-warm"></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="animate-gentle">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 sm:mb-12 text-white leading-tight text-shadow-warm text-balance">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed-plus mb-12 sm:mb-16 text-shadow-soft px-4 text-balance">
              We'd love to hear from you. Visit us, call us, or drop us a line – we're here to make your day a little brighter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <SectionHeading className="mb-6 text-warm-dark">Let's Connect</SectionHeading>
            <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-3xl mx-auto text-xl">
              We'd love to hear from you! Contact us with any questions, feedback, or just to say hello.
            </SectionText>
          </div>
          
          <div className="card-modern p-8 sm:p-12 fade-in-up">
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                {formMessage}
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {formMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage transition-colors bg-white text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage transition-colors bg-white text-gray-900"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage transition-colors bg-white text-gray-900"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage transition-colors bg-white text-gray-900 resize-vertical"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full sm:w-auto px-12 py-4 min-h-[48px] bg-red-500 hover:bg-red-600 text-white font-medium text-lg !rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-warm-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 fade-in-up">
            <SectionHeading className="mb-6 text-warm-dark">Find Us</SectionHeading>
            <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-3xl mx-auto text-xl">
              Visit us at either of our beautiful locations or get in touch for any questions.
            </SectionText>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="fade-in-left stagger-1">
              <div className="card-modern p-8 sm:p-10 text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center animate-pulse-warm">
                    <span className="text-3xl">📍</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">North Park Location</h4>
                <div className="w-16 h-0.5 bg-sage mx-auto rounded-full mb-6"></div>
                
                <div className="space-y-4 text-gray-700 mb-6">
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-base sm:text-lg">3257 W Bryn Mawr Ave<br />Chicago, IL 60659</p>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+17735396078" className="text-base sm:text-lg text-gray-900 hover:text-sage transition-colors" aria-label="Call North Park at 773 539 6078">
                      (773) 539-6078
                    </a>
                  </div>
                  
                  
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Hours</p>
                    <p className="text-base sm:text-lg font-medium text-sage">Every day: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/place/outdoor+cafe+north+park/data=!4m2!3m1!1s0x880fce0eed63124d:0x6c842134eef7872f?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-sage text-sage hover:bg-sage hover:text-white transition-all duration-300 !rounded-full font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="fade-in-right stagger-2">
              <div className="card-modern p-8 sm:p-10 text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center animate-pulse-warm">
                    <span className="text-3xl">📍</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">Evanston Location</h4>
                <div className="w-16 h-0.5 bg-sage mx-auto rounded-full mb-6"></div>
                
                <div className="space-y-4 text-gray-700 mb-6">
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-base sm:text-lg">2012 Central St<br />Evanston, IL 60201</p>
                  </div>

                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+18474250022" className="text-base sm:text-lg text-gray-900 hover:text-sage transition-colors" aria-label="Call Evanston at 847 425 0022">
                      (847) 425-0022
                    </a>
                  </div>
                  
                  
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Hours</p>
                    <p className="text-base sm:text-lg font-medium text-sage">Sunday - Thursday: 7:00 AM - 7:00 PM<br />Friday - Saturday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/place/Outdoor+Cafe+Evanston/@42.064056,-87.7015144,20.3z/data=!4m6!3m5!1s0x880fc50067d51eb1:0xaa75178daaec4088!8m2!3d42.0641884!4d-87.7015385!16s%2Fg%2F11xmh2cff6?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-sage text-sage hover:bg-sage hover:text-white transition-all duration-300 !rounded-full font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Contact Information removed per request */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center fade-in-up">
          <SectionHeading className="mb-8 text-warm-dark">
            Ready for Great <span className="text-accent-solid">COFFEE?</span>
          </SectionHeading>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-8"></div>
          <SectionText className="mb-12 text-xl">
            Come visit us today and experience the warmth of our community.
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