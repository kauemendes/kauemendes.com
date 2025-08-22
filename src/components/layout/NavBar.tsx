'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const closeMenu = () => isOpen && setIsOpen(false);
  }, [isOpen, router]);

  return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/images/brand/logokauecode.svg" width={48} height={48} className="h-8 me-3 rounded" alt="kauecode Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KAUECODE.COM</span>
          </Link>
          <button data-collapse-toggle="navbar-solid-bg" type="button" onClick={handleClick}  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isOpen ? 'show' : 'hidden'}`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink href="/" aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink href="/resume" >Resume</NavLink>
              </li>
              <li>
                <NavLink href="/projects" >Projects</NavLink>
              </li>
              <li>
                <NavLink href="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
