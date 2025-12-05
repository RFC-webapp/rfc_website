import { Button } from "../ui/button";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#222357] text-white">
      <div
        className="
          container mx-auto flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-6 justify-between px-4 md:px-0 py-16"
      >
        {/* 1 */}
        <div className="font-normal text-[16px] flex flex-col gap-3 md:w-[45%] lg:w-auto">
          <p>&copy; {new Date().getFullYear()} Rock Foundation Church</p>

          <div className="flex items-center gap-2">
            <HiPhone className="text-lg" />
            <span>+234 456 346 4878</span>
          </div>

          <div className="flex items-center gap-2 max-w-xs leading-tight">
            <HiLocationMarker className="text-lg" />
            <span>Tekobo junction, Idi-Aba Abeokuta, Ogun State, Nigeria</span>
          </div>

          <div className="flex items-center gap-2">
            <HiMail className="text-lg" />
            <span>info@rockfoundationchurch.org</span>
          </div>
        </div>

        {/* 2 */}
        <div className="text-center font-normal">
          <h4 className="text-[16px]">Quick Links</h4>
          <ul className="text-[14px] pt-2">
            {/* <li>About Us</li>
            <li>Sermons</li>
            <li>Events</li>
            <li>Blog</li> */}
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="md:w-[30%] lg:w-auto">
          <h4 className="font-normal pb-2 text-[16px]">Connect With Us</h4>
          <div className="flex gap-6 items-center">
            <MdFacebook size={24} color="#73B834" />
            <FaInstagram size={24} color="#73B834" />
            <FiYoutube size={24} color="#73B834" />
          </div>
        </div>

        {/* 4 */}
        <div className="gap-2 flex flex-col md:w-full lg:w-[35%]">
          <h1 className="font-bold text-[13px] md:text-[16px]">
            Subscribe to get Latest Updates and News
          </h1>

          <p className="font-normal text-[12px] md:text-[16px] mb-4">
            Be the first to receive news of our special offers and promotions
          </p>

          <div className="w-full max-w-md">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                className="flex-1 text-center text-sm outline-none p-3"
              />

              <Button className="bg-[#73B834] text-[#222357] border-[#73B834] px-4 py-5 border-2 text-sm font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
