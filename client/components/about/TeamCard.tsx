import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

type Socials = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
};

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  socials?: Socials;
}

export default function TeamCard({
  name,
  role,
  imageSrc,
  socials,
}: TeamCardProps) {
  return (
    <div className="w-[302px] h-[366px] bg-[##FAFAFA] shadow-md flex flex-col justify-center items-center text-center rounded-2xl">
      <Image
        src={imageSrc}
        alt={name}
        width={152}
        height={152}
        className="rounded-full mb-10 shadow-md bg-[##938B9A]"
      />

      <h1 className="font-bold text-[16px]">{name}</h1>
      <p className="text-black/70 pt-2">{role}</p>

      {/* Social Icons */}
      <div className="flex justify-center pt-3 gap-x-5">
        {socials?.facebook && (
          <Link
            href={socials.facebook}
            aria-label={`${name} Facebook`}
            className="rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <FaFacebook size={16} />
          </Link>
        )}

        {socials?.twitter && (
          <Link
            href={socials.twitter}
            aria-label={`${name} Twitter`}
            className="rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <FaTwitter size={16} />
          </Link>
        )}

        {socials?.linkedin && (
          <Link
            href={socials.linkedin}
            aria-label={`${name} LinkedIn`}
            className="rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <FaLinkedin size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
