"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMediaOpen(false);
  };

  // Desktop active / hover styles
  const desktopLinkClass = (path: string) =>
    `px-3 py-1 rounded-md border transition-all duration-200
   ${isActive(path)
      ? "border-blue-700 bg-blue-50 text-blue-700 font-semibold"
      : "border-transparent hover:border-blue-300 hover:bg-blue-50"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-[#2A1870] py-3 z-50 shadow">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-0 font-medium text-[16px]">
          <Link href="/">
            <div>
              <Image
                src="/church-logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] object-cover"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className={desktopLinkClass("/")}>HOME</Link>
            <Link href="/about" className={desktopLinkClass("/about")}>ABOUT</Link>
            <Link href="/give" className={desktopLinkClass("/give")}>GIVE</Link>

            {/* MEDIA DROPDOWN */}
            <div className="relative group">
              <button
                className={`px-3 py-1 rounded-md border transition-all duration-200
                ${pathname.startsWith("/media")
                    ? "border-blue-700 bg-blue-50 text-blue-700 font-semibold"
                    : "border-transparent hover:border-blue-300 hover:bg-blue-50"
                  }`}
              >
                MEDIA
              </button>

              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 px-4 flex flex-col gap-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/media/e-library">E-Library</Link>
                <Link href="/media/sermons">Sermons</Link>
                <Link href="/media/livestream">Live Stream</Link>
                <Link href="/media/blog">Blog</Link>
              </div>
            </div>

            <Link href="/contact" className={desktopLinkClass("/contact")}>CONTACT</Link>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex items-center space-x-2">
            <MdLogin className={isActive("/login") ? "text-blue-700" : ""} />
            <Link href="/login" className={desktopLinkClass("/login")}>LOGIN</Link>
          </div>

          {/* Hamburger - explicit flex so it always renders immediately */}
          <button
            className="flex items-center justify-center md:hidden p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <GiHamburgerMenu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out
    ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    backdrop-blur-sm`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out"></div>

        {/* Sliding panel */}
        <div
          className={`absolute top-0 right-0 h-full bg-white text-[#2A1870] shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            } w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="self-end text-lg font-bold p-2 rounded-full transition-transform duration-200 ease-out 
             hover:bg-gray-100 hover:scale-110 hover:rotate-6 active:scale-95 active:rotate-0"
            onClick={() => setMenuOpen(false)}
          >
            <IoCloseSharp />
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-[16px] mt-4">
            <Link href="/" onClick={closeMobileMenu}>HOME</Link>
            <Link href="/about" onClick={closeMobileMenu}>ABOUT</Link>
            <Link href="/give" onClick={closeMobileMenu}>GIVE</Link>

            {/* Media Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className="w-full flex items-center justify-between font-medium hover:text-blue-700 transition-colors"
              >
                <span>MEDIA</span>
                {mediaOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </button>

              {mediaOpen && (
                <div className="flex flex-col gap-2 mt-2 ml-3 text-[15px]">
                  <Link href="/media/e-library" onClick={closeMobileMenu}>E-Library</Link>
                  <Link href="/media/sermons" onClick={closeMobileMenu}>Sermons</Link>
                  <Link href="/media/livestream" onClick={closeMobileMenu}>Live Stream</Link>
                  <Link href="/media/blog" onClick={closeMobileMenu}>Blog</Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={closeMobileMenu}>CONTACT</Link>
          </div>

          {/* Mobile Login */}
          {/* <div className="flex items-center gap-2 mt-6">
            <MdLogin />
            <Link href="/login" onClick={closeMobileMenu}>LOGIN</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};