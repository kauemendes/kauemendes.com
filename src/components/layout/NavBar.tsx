'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => isOpen && setIsOpen(false);
  }, [isOpen, router]);

  return (
    <nav className="bg-brand-primary fixed w-full z-20 top-0 start-0 border-b border-brand-secondary shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <Image 
            src="/images/brand/logo_novo.svg" 
            width={120} 
            height={40} 
            className="h-10 transition-transform duration-300 group-hover:scale-105" 
            alt="KaueCode Logo" 
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          type="button" 
          onClick={handleClick}  
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-brand-neutral-light rounded-lg md:hidden hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent1 transition-colors duration-200" 
          aria-controls="navbar-main" 
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation menu */}
        <div 
          className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'block animate-fadeIn' 
              : 'hidden'
          }`} 
          id="navbar-main"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-brand-secondary/95 backdrop-blur-sm md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none p-4 md:p-0">
            <li>
              <NavLink href="/" aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/resume">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink href="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink href="/consult">
                Consult
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}