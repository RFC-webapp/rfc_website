"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-[#2A1870] py-3 z-50 shadow">
        <div className="container mx-auto flex justify-between items-center px-2 lg:px-0 font-medium text-[16px]">
          {/* Logo */}
          <div>
            <Image src="/church-logo.png" alt="logo" width={40} height={40} />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className={isActive("/") ? "text-blue-700 font-semibold" : ""}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={
                isActive("/about") ? "text-blue-700 font-semibold" : ""
              }
            >
              ABOUT
            </Link>
            <Link
              href="/give"
              className={isActive("/give") ? "text-blue-700 font-semibold" : ""}
            >
              GIVE
            </Link>

            {/* MEDIA DROPDOWN */}
            <div className="relative group">
              <button
                className={`cursor-pointer ${
                  pathname.startsWith("/media")
                    ? "text-blue-700 font-semibold"
                    : ""
                }`}
              >
                MEDIA
              </button>

              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 px-4 flex flex-col gap-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/media/e-library"
                  className={
                    isActive("/media/e-library")
                      ? "text-blue-700 font-semibold"
                      : "hover:text-blue-700"
                  }
                >
                  E-Library
                </Link>
                <Link
                  href="/media/sermons"
                  className={
                    isActive("/media/sermons")
                      ? "text-blue-700 font-semibold"
                      : "hover:text-blue-700"
                  }
                >
                  Sermons
                </Link>
                <Link
                  href="/media/livestream"
                  className={
                    isActive("/media/livestream")
                      ? "text-blue-700 font-semibold"
                      : "hover:text-blue-700"
                  }
                >
                  Live Stream
                </Link>
                <Link
                  href="/media/blog"
                  className={
                    isActive("/media/blog")
                      ? "text-blue-700 font-semibold"
                      : "hover:text-blue-700"
                  }
                >
                  Blog
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={
                isActive("/contact") ? "text-blue-700 font-semibold" : ""
              }
            >
              CONTACT
            </Link>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex items-center space-x-2">
            <MdLogin className={isActive("/login") ? "text-blue-700" : ""} />
            <Link
              href="/login"
              className={
                isActive("/login") ? "text-blue-700 font-semibold" : ""
              }
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
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
        <div className="absolute inset-0 bg-black/40"></div>

        <div
          className={`absolute top-0 right-0 h-full bg-white text-[#2A1870] shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } w-full`}
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
            <Link
              href="/"
              className={isActive("/") ? "text-blue-700 font-bold" : ""}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={isActive("/about") ? "text-blue-700 font-bold" : ""}
            >
              ABOUT
            </Link>
            <Link
              href="/give"
              className={isActive("/give") ? "text-blue-700 font-bold" : ""}
            >
              GIVE
            </Link>

            {/* MOBILE MEDIA DROPDOWN */}
            <div>
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className={`w-full flex items-center justify-between ${
                  pathname.startsWith("/media") ? "text-blue-700 font-bold" : ""
                }`}
              >
                <span>MEDIA</span>
                <span className="flex items-center">
                  {mediaOpen ? (
                    <FaChevronUp size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </span>
              </button>

              {mediaOpen && (
                <div className="flex flex-col gap-2 mt-2 ml-3 text-[15px]">
                  <Link
                    href="/media/e-library"
                    className={
                      isActive("/media/e-library")
                        ? "text-blue-700 font-bold"
                        : ""
                    }
                  >
                    E-Library
                  </Link>
                  <Link
                    href="/media/sermons"
                    className={
                      isActive("/media/sermons")
                        ? "text-blue-700 font-bold"
                        : ""
                    }
                  >
                    Sermons
                  </Link>
                  <Link
                    href="/media/livestream"
                    className={
                      isActive("/media/livestream")
                        ? "text-blue-700 font-bold"
                        : ""
                    }
                  >
                    Live Stream
                  </Link>
                  <Link
                    href="/media/blog"
                    className={
                      isActive("/media/blog") ? "text-blue-700 font-bold" : ""
                    }
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={isActive("/contact") ? "text-blue-700 font-bold" : ""}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Login */}
          <div className="flex items-center gap-2 mt-6">
            <MdLogin className={isActive("/login") ? "text-blue-700" : ""} />
            <Link
              href="/login"
              className={isActive("/login") ? "text-blue-700 font-bold" : ""}
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
