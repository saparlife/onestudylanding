"use client";

import { useState, useEffect, useRef } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Айгерим Сатыбалдиева",
      role: "Основатель школы английского",
      followers: "150K подписчиков",
      image: "/testimonials/person1.jpg",
      quote: "До 1Study мои курсы сливали в телеграм через неделю после запуска. Теперь контент защищён, а ученики получают удобное приложение.",
      instagram: "@aigerim_english",
    },
    {
      name: "Дамир Кенжебаев",
      role: "Эксперт по инвестициям",
      followers: "200K подписчиков",
      image: "/testimonials/person2.jpg",
      quote: "Перешёл с GetCourse — там не было мобильного приложения. Ученики довольны, конверсия выросла на 30%.",
      instagram: "@damir_invest",
    },
    {
      name: "Мадина Касымова",
      role: "Школа кондитеров",
      followers: "80K подписчиков",
      image: "/testimonials/person3.jpg",
      quote: "WhatsApp уведомления — это гениально. Ученики сразу видят приглашение, не нужно искать в почте.",
      instagram: "@madina_cakes",
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
      // Swipe left - next
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -threshold) {
      // Swipe right - prev
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => {
    handleDragEnd();
    setIsPaused(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => {
    handleDragEnd();
    // Keep paused for a moment after touch
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
          <p className="text-purple-400 font-medium mb-4">Отзывы</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Нам доверяют лидеры рынка
          </h2>
          <p className="text-xl text-gray-400">
            Более 40 онлайн-школ уже с нами
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            ref={containerRef}
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
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-indigo-400 text-sm">{testimonial.followers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-gray-600 text-sm mt-4">
            ← Свайпните для просмотра →
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

        {/* Logos row */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-gray-500 mb-8">Также с нами работают</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 text-xs"
              >
                Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
