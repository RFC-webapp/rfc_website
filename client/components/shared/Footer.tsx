import { Button } from "../ui/button";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#222357] text-white">
      <div className="w-full px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Contact info */}
        <div className="flex flex-col gap-3 text-[15px]">
          <p className="font-semibold">&copy; {new Date().getFullYear()} Rock Foundation Church</p>
          <div className="flex items-start gap-2">
            <HiPhone className="text-lg shrink-0 mt-0.5" />
            <span>+234 456 346 4878</span>
          </div>
          <div className="flex items-start gap-2">
            <HiLocationMarker className="text-lg shrink-0 mt-0.5" />
            <span className="leading-snug">Tekobo junction, Idi-Aba Abeokuta, Ogun State, Nigeria</span>
          </div>
          <div className="flex items-start gap-2">
            <HiMail className="text-lg shrink-0 mt-0.5" />
            <span className="break-all">info@rockfoundationchurch.org</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-[15px] mb-1">Quick Links</h4>
          <ul className="text-[14px] flex flex-col gap-2 text-white/80">
            <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-[15px]">Connect With Us</h4>
          <div className="flex gap-5 items-center">
            <MdFacebook size={26} color="#73B834" />
            <FaInstagram size={24} color="#73B834" />
            <FiYoutube size={24} color="#73B834" />
          </div>
        </div>

        {/* Newsletter — full width on sm, normal on lg */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
          <h4 className="font-bold text-[15px]">Subscribe to get Latest Updates and News</h4>
          <p className="text-[13px] text-white/70 mb-2">
            Be the first to receive news of our special offers and promotions
          </p>
          <div className="flex items-center border border-white/20 rounded-lg overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="flex-1 bg-transparent text-sm outline-none px-3 py-2.5 placeholder:text-white/40 text-white min-w-0"
            />
            <Button className="bg-[#73B834] text-[#222357] px-4 py-2.5 text-sm font-semibold rounded-none shrink-0">
              Subscribe
            </Button>
          </div>
        </div>

      </div>
    </footer>
  );
};