import React, { useState, useEffect } from 'react';

const DarkModeToggle = ({ className = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null
      ? saved === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={`w-full flex ${isDarkMode ? 'justify-end' : 'justify-center'}`}>
      <div
        className="relative w-10 h-6 md:w-14 md:h-8 rounded-full bg-gray-300 dark:bg-neutral-600 shadow-inner transition-colors"
        role="group"
        aria-label="Alternar modo escuro"
      >
        <button
          onClick={() => setIsDarkMode((v) => !v)}
          type="button"
          aria-label="Alternar modo escuro"
          className={`absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-gray-800 dark:bg-neutral-300 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-200 transition-transform duration-200 ease-out cursor-pointer outline-none ${
            isDarkMode ? 'translate-x-3.5 sm:translate-x-6' : '-translate-x-0.5'
          } ${className}`}
          aria-pressed={isDarkMode}
        >
          <span className="text-sm sm:text-base leading-none">
            {isDarkMode ? '☀️' : '🌑'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;
