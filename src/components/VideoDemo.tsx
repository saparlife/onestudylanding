"use client";

import { useState } from "react";

export function VideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full filter blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-4">Демо</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Посмотрите как это работает
            </h2>
            <p className="text-xl text-gray-400">
              2 минуты — и вы поймёте всё
            </p>
          </div>

          {/* Video thumbnail */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 group cursor-pointer"
          >
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Fake app screenshot placeholder */}
              <div className="absolute inset-8 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1S</span>
                  </div>
                  <p className="text-gray-500 text-sm">Превью видео</p>
                </div>
              </div>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300" />
          </div>

          {/* Features under video */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-gray-400 text-sm">Мобильное приложение</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-gray-400 text-sm">Защита контента</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-gray-400 text-sm">WhatsApp интеграция</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video placeholder - replace with actual video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Видео будет здесь</p>
                <p className="text-gray-600 text-sm">Вставить YouTube/Vimeo embed или загрузить видео</p>
              </div>
            </div>

            {/* Uncomment and add your video URL:
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            */}
          </div>
        </div>
      )}
    </>
  );
}
