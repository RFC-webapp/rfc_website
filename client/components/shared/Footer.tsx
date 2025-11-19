import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/public/icons";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#222357] text-white">
      <div className="container mx-auto flex justify-between py-12">
        {/* 1 */}
        <div className="font-normal text-[12px] gap-1 flex flex-col">
          <p>&copy; {new Date().getFullYear()} Rock Foundation Church</p>
          <p>Tel: +234 456 346 4878</p>
          <p>Tekobo junction, Idi-Aba Abeokuta, Ogun State, Nigeria</p>
          <p>info@rockfoundationchurch.org</p>
        </div>

        {/* 2 */}
        <div className="text-center font-normal">
          <h4 className=" text-[16px]">Quick Links</h4>
          <ul className="text-[12px] text-left">
            <li>About Us</li>
            <li>Sermons</li>
            <li>Events</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h4 className="font-normal text-[16px]">Connect With Us</h4>
          <div className="flex justify-between items-center">
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>

        {/* 4 */}
        <div className="gap-3 flex flex-col">
          <h1 className="font-bold text-[24px]">
            Subscribe to get Latest Updates and News
          </h1>
          <p className="font-normal text-[16px]">
            Be the first to receive news of our special offers and promotions
          </p>

          <div className="w-full max-w-md">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                className="flex-1 text-center text-sm outline-none"
              />

              <Button className="bg-[#73B834] text-[#222357] px-4 py-3 text-sm font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
