import CardCarousel from "@/components/main/CardCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaBible } from "react-icons/fa";

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

      <section className="w-full hidden md:flex justify-center items-center my-10">
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
      </section>

      <div
      // className="w-full h-full object-cover"
      ></div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-10 my-10 px-5">
        <div className="w-full md:w-[372px] text-center md:text-left">
          <h5 className="font-normal text-[16px]">OUR MISSION & VISION</h5>
          <h2 className="font-semibold text-[32px]">
            from freedom to fruitfulness
          </h2>
          <p className="font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>

        <div className="w-full md:w-[372px] text-center md:text-left">
          <h5 className="font-normal text-[16px]">WHAT WE DO</h5>
          <h2 className="font-semibold text-[32px]">
            making matured followers of christ
          </h2>
          <p className="font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
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
            <div className="">
              <h5 className="text-[#111827] font-semibold text-[18px] pb-3">
                Favor in Relocation Process
              </h5>
              <p className="font-normal text-[16px] text-[#000000 64%]">
                I want to testify of God's unfailing faithfulness and the
                fulfillment of His promises in my life. Late last year, God gave
                me a word: He said He was opening the doors of nations unto me.
                I held on to that promise and trusted Him completely. Today, by
                His grace, I am standing in the UK as a living testimony to His
                covenant-keeping nature. It didn't even take six months for God
                to fulfill what He had spoken over my life. Throughout that
                season, every word spoken from the altar was God speaking
                directly to me. He gave me clear instructions and constant
                reassurance, reminding me that “ na Him dey run this”— that no
                man could take the glory for what He was about to do. I remember
                one particular Sunday when Rev. asked us to worship God
                undignified, and she said that God was handing out packages to
                individuals. In that moment, I knew in my spirit that mine had
                been released. I could sense it! The very next day, I had my CAS
                interview. It was as though the officer was already welcoming me
                to the UK before the process was even completed. Just four hours
                after that interview, I received my CAS letter. But God wasn't
                done yet! I applied for my visa and received a response exactly
                26 hours later—without any premium service or expedited
                processing. It was purely the hand of God at work! This entire
                journey has shown me that when God carries you, He carries you
                all the way. He is indeed a covenant-keeping God, and I can
                testify that His word never returns void. He is faithful to
                fulfill every promise He makes. To Him alone be all the glory,
                honor, and praise forevermore! Amen
              </p>
              <p className="font-semibold text-[16px] pt-5 text-[#6B7280]">
                Busayo
              </p>
            </div>

            <div className="text-left">
              <h5 className="text-[#111827] font-semibold text-[18px] pb-3">
                Favor in Relocation Process
              </h5>
              <p className="font-normal text-[16px] text-[#000000 64%]">
                I want to testify of God's unfailing faithfulness and the
                fulfillment of His promises in my life. Late last year, God gave
                me a word: He said He was opening the doors of nations unto me.
                I held on to that promise and trusted Him completely. Today, by
                His grace, I am standing in the UK as a living testimony to His
                covenant-keeping nature. It didn't even take six months for God
                to fulfill what He had spoken over my life. Throughout that
                season, every word spoken from the altar was God speaking
                directly to me. He gave me clear instructions and constant
                reassurance, reminding me that “ na Him dey run this”— that no
                man could take the glory for what He was about to do. I remember
                one particular Sunday when Rev. asked us to worship God
                undignified, and she said that God was handing out packages to
                individuals. In that moment, I knew in my spirit that mine had
                been released. I could sense it! The very next day, I had my CAS
                interview. It was as though the officer was already welcoming me
                to the UK before the process was even completed. Just four hours
                after that interview, I received my CAS letter. But God wasn't
                done yet! I applied for my visa and received a response exactly
                26 hours later—without any premium service or expedited
                processing. It was purely the hand of God at work! This entire
                journey has shown me that when God carries you, He carries you
                all the way. He is indeed a covenant-keeping God, and I can
                testify that His word never returns void. He is faithful to
                fulfill every promise He makes. To Him alone be all the glory,
                honor, and praise forevermore! Amen
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

        <div className="flex flex-col md:flex-row justify-around items-center gap-x-2 mb-10">
          <Image
            src="/images/counselling.png"
            alt=""
            width={500}
            height={320}
            className="w-full md:w-[500px] h-auto object-cover order-first md:order-last"
            quality={100}
          />

          <div className="w-full md:w-1/2 order-last md:order-first">
            <h1 className="font-bold text-[32px] font-poppins">
              Relationship team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-x-2 mb-10">
          <Image
            src="/images/counselling.png"
            alt=""
            width={500}
            height={320}
            className="w-full md:w-[500px] h-auto object-cover"
            quality={100}
          />
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-[32px] font-poppins">
              Relationship team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center gap-x-2 mb-10">
          <Image
            src="/images/counselling.png"
            alt=""
            width={500}
            height={320}
            className="w-full md:w-[500px] h-auto object-cover order-first md:order-last"
            quality={100}
          />

          <div className="w-full md:w-1/2 order-last md:order-first">
            <h1 className="font-bold text-[32px] font-poppins">
              Relationship team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-x-2 mb-10">
          <Image
            src="/images/counselling.png"
            alt=""
            width={500}
            height={320}
            className="w-full md:w-[500px] h-auto object-cover"
            quality={100}
          />
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-[32px] font-poppins">
              Relationship team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto container my-25 text-center px-4">
        <h3 className="font-normal text-[16px] font-poppins">PREACHING TEAM</h3>
        <h1 className="font-bold font-poppins text-[32px] md:text-[48px] pb-8">
          Meet our Inspirational team
        </h1>

        <div className="md:flex justify-center gap-x-10 text-center font-roboto">
          <div className="w-[302px] h-[366px] bg-white shadow-2xl flex flex-col justify-center items-center text-center">
            <Image
              src="/images/home.png"
              alt=""
              width={152}
              height={152}
              className="rounded-full mb-10"
            />
            <h1 className="font-bold text-[16px]">Rev. Tunde Amosun</h1>
            <p className="text-black/70 pt-2">Head Pastor, Church</p>
            <div className="flex justify-center pt-2 gap-x-5.5">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>

          <div className="w-[302px] h-[366px] bg-white shadow-2xl flex flex-col justify-center items-center text-center">
            <Image
              src="/images/home.png"
              alt=""
              width={152}
              height={152}
              className="rounded-full mb-10"
            />
            <h1 className="font-bold text-[16px]">Rev. Tunde Amosun</h1>
            <p className="text-black/70 pt-2">Head Pastor, Church</p>
            <div className="flex justify-center pt-2 gap-x-5.5">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>

          <div className="w-[302px] h-[366px] bg-white shadow-2xl flex flex-col justify-center items-center text-center">
            <Image
              src="/images/home.png"
              alt=""
              width={152}
              height={152}
              className="rounded-full mb-10"
            />
            <h1 className="font-bold text-[16px]">Rev. Tunde Amosun</h1>
            <p className="text-black/70 pt-2">Head Pastor, Church</p>
            <div className="flex justify-center pt-2 gap-x-5.5">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>

          <div className="w-[302px] h-[366px] bg-white shadow-2xl flex flex-col justify-center items-center text-center">
            <Image
              src="/images/home.png"
              alt=""
              width={152}
              height={152}
              className="rounded-full mb-10"
            />
            <h1 className="font-bold text-[16px]">Rev. Tunde Amosun</h1>
            <p className="text-black/70 pt-2">Head Pastor, Church</p>
            <div className="flex justify-center pt-2 gap-x-5.5">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
