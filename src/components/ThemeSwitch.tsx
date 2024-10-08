"use client";

import {MoonIcon, SunIcon} from "@/theme/icons";
import {useContext} from "react";
import {themeContext} from "@/app/providers";

export default function ThemeSwitch() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(themeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <button
      type="button"
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      onClick={toggleThemeHandler}
    >
      {themeCtx.isDarkMode ? <MoonIcon className="mr-2"/> : <SunIcon className="mr-2" /> } Toggle Theme
    </button>
  );
}