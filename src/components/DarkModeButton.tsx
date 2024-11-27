"use client";
import React from 'react';
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';



const DarkModeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='hover:text-stone-400 cursor-allowed'>
            <SunIcon className="w-4 h-4 inline" />
        </button>
    )
}

export default DarkModeButton;
