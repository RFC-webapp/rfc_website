import Link from "next/link";
import { ChurchLogo, HamburgerIcon, LoginIcon } from "@/public/icons";

export const NavBar = () => {
  return (
    <nav className="container mx-auto bg-#FFFFFF text-#2A1870 py-1 text-center align-middle ">
      <div className="flex justify-between">
        <div className="font-medium text-[16px] flex items-center gap-8">
          <Link href="/">HOME</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">GIVE</Link>
          <Link href="/">E-LIBRARY</Link>
          <Link href="/">MEDIA</Link>
          <Link href="/">BLOG</Link>
          <Link href="/">ANNOUNCEMENT</Link>
          <Link href="/">CONTACT</Link>
        </div>

        <div className="flex justify-between gap-12">
          <div className="flex items-center space-x-2">
            <LoginIcon />
            <Link href="/">LOGIN</Link>
          </div>
          <div className="flex items-center space-x-2">
            <HamburgerIcon />
            <Link href="/">MENU</Link>
          </div>
        </div>

        <div>
          <ChurchLogo />
        </div>
      </div>
    </nav>
  );
};
