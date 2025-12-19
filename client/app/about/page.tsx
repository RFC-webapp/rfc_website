import CounsellorCard from "@/components/about/CounsellorCard";
import TeamCard from "@/components/about/TeamCard";
import CardCarousel from "@/components/main/CardCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaBible } from "react-icons/fa";

const counsellor = [
  {
    title: "Relationship Team",
    description:
      "Navigating relationships can be beautiful—but also confusing. Our Relationship Team is here to walk with singles who are dating or courting, offering godly counsel, practical wisdom, confidentiality and a safe place to talk through real issues. Whether you're seeking clarity, direction, or personal growth, this team helps you build strong foundations for a Christ-centered relationship. You don’t have to figure it out alone—let us journey with you.",
    imageSrc: "/images/counselling.png",
    reverse: false,
  },
  {
    title: "Marriage Counseling",
    description:
      "Whether you're preparing for marriage or already on the journey, our Marriage Counseling Team is here to support you. We provide Christ-centered guidance for couples who want to build strong foundations, overcome challenges, or simply rekindle their passion and connection. From premarital counseling to ongoing support for married couples, we offer a safe, confidential space where you can talk openly, heal deeply, and grow together. Because every marriage deserves wisdom, support, and a fresh spark of love.",
    imageSrc: "/images/counselling.png",
    reverse: true,
  },
  {
    title: "Deacon Stephen",
    description:
      "The Deacon Stephen Team is dedicated to helping individuals overcome addictions and reclaim their lives through Christ. With grace, understanding, and confidentiality, they offer counseling, support, and spiritual guidance to anyone struggling with habits that feel too heavy to carry alone. This team walks beside you—not with judgment, but with hope—helping you find strength, healing, and lasting freedom. You’re not defined by your struggles. There is a way out, and you don’t have to walk it alone.",
    imageSrc: "/images/counselling.png",
    reverse: false,
  },
  {
    title: "Believers Court",
    description:
      "“If any of you has a dispute with another, do you dare to take it before the ungodly for judgment instead of before the Lord’s people?” — 1 Corinthians 6:1 Guided by this principle, our Believers Court provides a confidential, Spirit-led environment where issues are resolved with integrity and compassion. Whether the conflict is personal, relational, or within ministry, this team helps restore harmony and uphold the unity of the body of Christ. Because in God’s family, peace isn’t just restored—it’s protected.",
    imageSrc: "/images/counselling.png",
    reverse: true,
  },
];

export default function page() {
  return (
    <div className="mt-14 mb-12">
      <section>
        <div className="relative w-full h-[50vh]">
          <Image
            priority
            className="w-full h-full object-cover"
            src="/images/home-bg.jpg"
            alt="home background"
            width={1439}
            height={883}
          />

          {/* Overlay content */}
          <div
            className="absolute inset-0 
                 flex flex-col justify-center items-center
                 text-center text-white bg-black/40"
          >
            <h3 className="font-medium text-[16px]">ABOUT US</h3>

            <h1 className="text-[24px] md:text-[64px] font-bold mb-2">
              Rock Foundation Church
            </h1>

            <h5 className="text-[12px] md:text-[18px]">
              Making Mature Followers Of Christ
            </h5>
          </div>
        </div>
      </section>

      {/* <section className="w-full hidden md:flex justify-center items-center my-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-[280px] h-[380px] rounded-3xl overflow-hidden flex justify-center">
            <Image
              src="/images/about-1.png"
              alt="About Us"
              width={280}
              height={380}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-[340px] h-[460px] rounded-3xl overflow-hidden flex justify-center">
            <Image
              src="/images/about-2.png"
              alt="About Us"
              width={340}
              height={460}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-[280px] h-[380px] rounded-3xl overflow-hidden flex justify-center">
            <Image
              src="/images/about-3.png"
              alt="About Us"
              width={280}
              height={380}
              className="object-contain"
            />
          </div>
        </div>
      </section> */}

      <div
      // className="w-full h-full object-cover"
      ></div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-10 my-10 px-5">
        <div className="w-full md:w-[372px] text-center md:text-left">
          <h5 className="font-normal text-[16px]">OUR MISSION & VISION</h5>
          <h2 className="font-semibold text-[32px]">
            From Freedom to Fruitfulness
          </h2>
          <p className="font-normal text-[16px]">
            At Rock Foundation Church, our mission is to lead people into the
            freedom found only in Jesus Christ and to equip them to live
            fruitful, purpose-driven lives. We exist to see hearts transformed,
            families restored, and destinies awakened through the life-changing
            power of God’s Word and the Holy Spirit.
          </p>
        </div>

        <div className="w-full md:w-[372px] text-center md:text-left">
          <h5 className="font-normal text-[16px]">WHAT WE DO</h5>
          <h2 className="font-semibold text-[32px]">
            Making Matured Followers of Christ
          </h2>
          <p className="font-normal text-[16px]">
            We are committed to helping every believer grow from a place of
            spiritual curiosity to spiritual maturity. Through intentional
            teaching, discipleship, and community, we guide people into a deeper
            relationship with Christ—one that transforms lives, strengthens
            families, and impacts the world.
          </p>
        </div>
      </section>

      <section className="mx-auto container text-center my-15 px-4">
        <h1 className="font-bold text-[30px] md:text-[48px]">OUR SERVICE</h1>
        <p className="text-[16px] font-normal px-2 md:px-0 md:w-5/8 mx-auto my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in vo.
        </p>

        <CardCarousel />
      </section>

      <section className="w-full relative mb-15">
        <Image
          src="/images/about-4.png"
          alt="About Us"
          width={288}
          height={384}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="bg-[#222357] text-white mb-15">
        <div className="flex flex-col md:flex-row justify-center gap-x-[50px] mx-auto container py-[60px] items-center px-4">
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
            <Image
              src="/images/about-4.png"
              alt="About Us"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="w-full md:w-1/2 font-poppins mt-8 md:mt-0">
            <h4 className="font-bold text-[24px] mb-4">Our lead pastor</h4>
            <p className="font-normal text-[16px] mb-4">
              Rev Tunde Amosun is the visionary founder and Lead Pastor of Rock
              Foundation Church (RFC), a church where we focus on just three
              things: we come to Jesus, listen to His word and do them. He is
              renowned for his dynamic preaching, teaching, and support for the
              gospel. His mission is to help people discover and confidently
              live out their God-given purpose through the transformative power
              of the Gospel.
            </p>
            <p className="font-normal text-[16px] mb-4">
              Rev Tunde Amosun ministry began during his time as an
              undergraduate at University of Lagos in 198X, when he was a final
              year medicine student. He was a traveling minister before Rock
              Foundation was founded. RFC is a global church with a strong
              emphasis on teaching, missions, and empowering believers to fully
              express their faith in all aspects of life.
            </p>
            <p className="font-normal text-[16px] mb-4">
              Rev Tunde Amosun ministry began during his time as an
              undergraduate at University of Lagos in 198X, when he was a final
              year medicine student. He was a traveling minister before Rock
              Foundation was founded. RFC is a global church with a strong
              emphasis on teaching, missions, and empowering believers to fully
              express their faith in all aspects of life.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </section>

      <section className="text-center shadow-lg my-15 py-10 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-1 bg-white">
              <FaBible className="text-black/60" />
              <span className="font-bold text-[10px] text-black/60">
                MEMBER STORIES
              </span>
            </div>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-black">
            MY RFC EXPERIENCE
          </h1>
          <p className="text-[#00000080] text-[16px] md:text-[20px] font-normal pb-10">
            Read Testimonies From Our Members
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-10 text-left">
            <div className="text-justify w-fit">
              <h5 className="text-[#111827] font-semibold text-[18px] pb-3">
                Favor in Relocation Process
              </h5>
              <p className="font-normal text-[16px] text-[#000000 64%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
                sed reprehenderit delectus eaque earum adipisci aliquam hic
                maxime, mollitia nostrum ipsam. Nihil excepturi facere autem,
                voluptatum incidunt aperiam accusamus assumenda officiis,
                repudiandae alias consequatur sit placeat, pariatur praesentium
                recusandae delectus doloribus cumque voluptatibus. Consequuntur,
                eos vel! Aspernatur placeat ea ex?
              </p>
              <p className="font-semibold text-[16px] pt-5 text-[#6B7280]">
                Busayo
              </p>
            </div>

            <div className="text-justify w-fit">
              <h5 className="text-[#111827] font-semibold text-[18px] pb-3">
                Favor in Relocation Process
              </h5>
              <p className="font-normal text-[16px] text-[#000000 64%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                vero vel consequatur illo fugiat earum deleniti quis, quas,
                perspiciatis necessitatibus, facilis veniam delectus voluptate
                ducimus nemo dolorum deserunt dolorem recusandae. Qui
                consequatur nihil, hic necessitatibus aut praesentium quidem
                laudantium quasi accusamus modi velit doloribus molestiae, esse
                non, enim mollitia corporis.
              </p>
              <p className="font-semibold text-[16px] pt-5 text-[#6B7280]">
                Busayo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container px-4">
        <h3 className="text-center text-black/60 text-[16px] rounded-lg bg-black/4 px-4 py-1 w-fit mx-auto my-0">
          Need GODLY Counseling?
        </h3>
        <h1 className="font bold font-poppins text-[32px] md:text-[48px] pb-14 text-center">
          See our counselling teams
        </h1>

        <div className="flex flex-col">
          {counsellor.map((c) => (
            <CounsellorCard
              key={c.title}
              title={c.title}
              description={c.description}
              imageSrc={c.imageSrc}
              reverse={c.reverse}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto container my-25 text-center px-4">
        <h3 className="font-normal text-[16px] font-poppins">PREACHING TEAM</h3>
        <h1 className="font-bold font-poppins text-[32px] md:text-[48px] pb-8">
          Meet our Inspirational team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6 text-center font-roboto">
          <TeamCard
            name="Rev. Tunde Amosun"
            role="Head Pastor"
            imageSrc="/images/home.png"
            socials={{
              facebook: "https://facebook.com/...",
              twitter: "https://twitter.com/...",
              linkedin: "https://linkedin.com/...",
            }}
          />

          <TeamCard
            name="Rev. Mrs Kemi Amosun"
            role="Pastor"
            imageSrc="/images/home.png"
            socials={{
              facebook: "https://facebook.com/",
              twitter: "https://twitter.com/",
              linkedin: "https://linkedin.com/",
            }}
          />

          <TeamCard
            name="Prof. Ade Enikome"
            role="Pastor"
            imageSrc="/images/home.png"
            socials={{
              facebook: "https://facebook.com/",
              twitter: "https://twitter.com/",
              linkedin: "https://linkedin.com/",
            }}
          />

          <TeamCard
            name="Prof. Olushola Kehinde"
            role="Pastor"
            imageSrc="/images/home.png"
            socials={{
              facebook: "https://facebook.com/",
              twitter: "https://twitter.com/",
              linkedin: "https://linkedin.com/",
            }}
          />
        </div>
      </section>
    </div>
  );
}
