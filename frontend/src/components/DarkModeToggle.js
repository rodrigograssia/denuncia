import React, { useState, useEffect } from 'react';

const DarkModeToggle = ({ className = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDarkMode = savedMode === 'true' || (!savedMode && prefersDark);
    setIsDarkMode(initialDarkMode);
    
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center justify-center w-8 h-8 sm:w-[2.7rem] sm:h-[2.7rem] rounded-full bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500 transition-colors cursor-pointer ${className}`}
      aria-label="Alternar modo escuro"
    >
      <span className="text-lg sm:text-xl">
        {isDarkMode ? '☀️' : '🌑'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
