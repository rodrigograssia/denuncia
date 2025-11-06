import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import DarkModeToggle from "./DarkModeToggle";

const profileLinkBaseStyles = [
  'flex items-center justify-center',
  'bg-gray-300',
  'dark:bg-neutral-600', 
  'w-8',           
  'h-8',           
  'sm:w-[2.7rem]',
  'sm:h-[2.7rem]',
  'rounded-full', 
  'cursor-pointer',
  'relative',
  'z-20',
];

const linkBaseStyles = [
  'text-gray-700',
  'dark:text-white', 
  'text-base',
  'font-medium', 
  'no-underline',
  'transition-colors',
  'hover:text-[#4a55c7]',
  'dark:hover:text-[#5f6ded]',
  'text-sm', 
  'sm:text-base'
];

const TopBar = forwardRef((props, ref) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".profile-link-container") && 
        !event.target.closest(".profile-dropdown")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const topBarClasses = [
    'flex',
    'justify-between',
    'items-center',
    'w-full',
    'box-border',
    'bg-[#eeeeee]',
    'dark:bg-neutral-900',
    'relative', 
    'z-10',     
    'py-4',
    'px-4',
    'sm:px-8',
    'm-0'
  ];

  return (
    <div className={twMerge(topBarClasses)} ref={ref}>
      
      <div className="flex items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-[#4c71a6] no-underline">
          denunc.ia
        </Link>
      </div>

      <ul className="flex items-center list-none m-0 p-0 flex-nowrap">
        <li>
          <Link to="/" className={twMerge(linkBaseStyles)}>Home</Link>
        </li>
        <li className="ml-4 sm:ml-8">
          <Link to="/denuncia" className={twMerge(linkBaseStyles)}>Denunciar Golpe</Link>
        </li>
        <li className="ml-4 sm:ml-8">
          <button
            onClick={toggleDropdown}
            className={twMerge(profileLinkBaseStyles, "profile-link-container")}
            aria-label="Menu do perfil"
            aria-expanded={showDropdown}
          >
            <img
              src="/images/user.svg"
              alt="Perfil"
              className="w-6 h-6 sm:w-8 sm:h-8 p-1" 
            />
          </button>

          {showDropdown && (
            <div className="profile-dropdown absolute top-full right-0 mt-2 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 rounded-lg shadow-xl p-3 flex flex-col gap-3 min-w-[120px]">
              <Link to="/login" className="text-sm sm:text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-[#4a55c7] dark:hover:text-[#5f6ded] no-underline">
                Login
              </Link>
              <Link to="/cadastro" className="mt-1 text-sm sm:text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-[#4a55c7] dark:hover:text-[#5f6ded] no-underline">
                Cadastro
              </Link>
            </div>
          )}
        </li>
        <li className="ml-4 sm:ml-8">
          <DarkModeToggle />
        </li>
      </ul>
    </div>
  );
});

export default TopBar;