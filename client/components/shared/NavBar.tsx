"use client";

import { useState } from "react";
import Link from "next/link";
import { ChurchLogo } from "@/public/icons";
import { MdLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-[#2A1870] py-3 z-50 shadow">
        <div className="w-full flex justify-between items-center px-4 md:px-8 font-medium text-[16px]">
          {/* Logo */}
          <div>
            <ChurchLogo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/">HOME</Link>
            <Link href="/">ABOUT</Link>
            <Link href="/">GIVE</Link>
            <Link href="/">E-LIBRARY</Link>
            <Link href="/">MEDIA</Link>
            <Link href="/">BLOG</Link>
            <Link href="/">ANNOUNCEMENT</Link>
            <Link href="/">CONTACT</Link>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex items-center space-x-2">
            <MdLogin />
            <Link href="/">LOGIN</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Slide-in menu */}
        <div
          className={`absolute top-0 right-0 h-full bg-white text-[#2A1870] shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            w-full
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-right font-bold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-[16px] mt-4">
            <Link href="/">HOME</Link>
            <Link href="/">ABOUT</Link>
            <Link href="/">GIVE</Link>
            <Link href="/">E-LIBRARY</Link>
            <Link href="/">MEDIA</Link>
            <Link href="/">BLOG</Link>
            <Link href="/">ANNOUNCEMENT</Link>
            <Link href="/">CONTACT</Link>
          </div>

          {/* Mobile Login */}
          <div className="flex items-center gap-2 mt-6">
            <MdLogin />
            <Link href="/">LOGIN</Link>
          </div>
        </div>
      </div>
    </>
  );
};
