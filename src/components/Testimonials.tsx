"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      followers: t("testimonials.1.followers"),
      image: "/testimonials/aksultan.jpg",
      quote: t("testimonials.1.quote"),
      instagram: "https://www.instagram.com/aksultankali/",
    },
    {
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      followers: t("testimonials.2.followers"),
      image: "/testimonials/kuanysh.jpg",
      quote: t("testimonials.2.quote"),
      instagram: "https://www.instagram.com/kuantr/",
    },
    {
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      followers: t("testimonials.3.followers"),
      image: "/testimonials/ako.jpg",
      quote: t("testimonials.3.quote"),
      instagram: "https://www.instagram.com/ako_speaks/",
    },
  ];

  // Auto-rotate (pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  // Handle drag/swipe
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50;

    if (diff > threshold) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -threshold) {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => {
    handleDragEnd();
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => {
    handleDragEnd();
    setTimeout(() => setIsPaused(false), 3000);
  };

  const dragOffset = isDragging ? currentX - startX : 0;

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-4">{t("testimonials.label")}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-400">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="relative overflow-hidden select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsPaused(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
                transitionDuration: isDragging ? '0ms' : '500ms',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 sm:p-12">
                    {/* Quote */}
                    <div className="mb-8">
                      <svg className="w-12 h-12 text-indigo-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-xl sm:text-2xl text-white leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl relative">
                        <span>{testimonial.name.charAt(0)}</span>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-400">{testimonial.role}</p>
                        <p className="text-indigo-400 text-sm">{testimonial.followers}</p>
                      </div>
                      <a
                        href={testimonial.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-gray-600 text-sm mt-4">
            {t("testimonials.swipe")}
          </p>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-indigo-500 w-8"
                  : "bg-white/20 hover:bg-white/40 w-2.5"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">1.6M+</div>
            <div className="text-gray-500 text-sm">{t("testimonials.stats.followers")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">43</div>
            <div className="text-gray-500 text-sm">{t("testimonials.stats.schools")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">0</div>
            <div className="text-gray-500 text-sm">{t("testimonials.stats.leaks")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
