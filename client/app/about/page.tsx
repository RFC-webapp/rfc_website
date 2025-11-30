import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
    <div className="mt-20 mb-12">
      <section className="flex justify-center container mx-auto">
        <Image
          src="/images/about-1.png"
          alt="About Us"
          width={288}
          height={384}
          className="object-contain h-auto w-auto"
        />
        <Image
          src="/images/about-2.png"
          alt="About Us"
          width={390}
          height={512}
          className="object-contain h-auto w-auto"
        />
        <Image
          src="/images/about-3.png"
          alt="About Us"
          width={288}
          height={384}
          className="object-contain h-auto w-auto"
        />
      </section>

      <section className="container mx-auto">
        <div>
          <h5>OUR MISSIOn & Vision</h5>
          <h2>From freedom to fruitfulness</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <div>
          <h5>WHAT WE DO</h5>
          <h2>making matured followers of christ</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/images/about-4.png"
          alt="About Us"
          width={288}
          height={384}
          className="w-full h-auto object-contain"
        />
      </section>

      <section className="bg-[#222357] text-white">
        <div>
          <Image
            src="/images/about-4.png"
            alt="About Us"
            width={20}
            height={20}
            className="object-contain"
          />

          <div>
            <h4>Our lead pastor</h4>
            <p>
              Rev Tunde Amosun is the visionary founder and Lead Pastor of Rock
              Foundation Church (RFC), a church where we focus on just three
              things: we come to Jesus, listen to His word and do them. He is
              renowned for his dynamic preaching, teaching, and support for the
              gospel. His mission is to help people discover and confidently
              live out their God-given purpose through the transformative power
              of theGospel.
            </p>
            <p>
              Rev Tunde Amosun ministry began during his time as an
              undergraduate at University of Lagos in 198X, when he was a final
              year medicine student. He was a traveling minister before Rock
              Foundation was founded. RFC is a global church with a strong
              emphasis on teaching, missions, and empowering believers to fully
              express their faith in all aspects of life.
            </p>
            <p>
              Rev Tunde Amosun ministry began during his time as an
              undergraduate at University of Lagos in 198X, when he was a final
              year medicine student. He was a traveling minister befo
            </p>

            <Button>Read More</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-center">
        <h5 className="border px-2 font-bold text-[10px] rounded-lg text-[#000000 4%] w-44">
          MEMBER STORIES
        </h5>
        <h1 className="text-[36px] font-black">MY RFC EXPERIENCE</h1>
        <p className="text-[#00000080] text-[20px] font-normal">
          Read Testimonies From Our Members
        </p>

        <div className="flex justify-between text-left">
          <div className="">
            <h5 className="text-[#111827] font-semibold text-[18px]">
              Favor in Relocation Process
            </h5>
            <p className="font-normal text-[16px] text-[#000000 64%]">
              I want to testify of God's unfailing faithfulness and the
              fulfillment of His promises in my life. Late last year, God gave
              me a word: He said He was opening the doors of nations unto me. I
              held on to that promise and trusted Him completely. Today, by His
              grace, I am standing in the UK as a living testimony to His
              covenant-keeping nature. It didn't even take six months for God to
              fulfill what He had spoken over my life. Throughout that season,
              every word spoken from the altar was God speaking directly to me.
              He gave me clear instructions and constant reassurance, reminding
              me that “ na Him dey run this”— that no man could take the glory
              for what He was about to do. I remember one particular Sunday when
              Rev. asked us to worship God undignified, and she said that God
              was handing out packages to individuals. In that moment, I knew in
              my spirit that mine had been released. I could sense it! The very
              next day, I had my CAS interview. It was as though the officer was
              already welcoming me to the UK before the process was even
              completed. Just four hours after that interview, I received my CAS
              letter. But God wasn't done yet! I applied for my visa and
              received a response exactly 26 hours later—without any premium
              service or expedited processing. It was purely the hand of God at
              work! This entire journey has shown me that when God carries you,
              He carries you all the way. He is indeed a covenant-keeping God,
              and I can testify that His word never returns void. He is faithful
              to fulfill every promise He makes. To Him alone be all the glory,
              honor, and praise forevermore! Amen
            </p>
            <p className="font-semibold text-[16px] text-[#6B7280]">Busayo</p>
          </div>
          <div className="text-left">
            <h5 className="text-[#111827] font-semibold text-[18px]">
              Favor in Relocation Process
            </h5>
            <p className="font-normal text-[16px] text-[#000000 64%]">
              I want to testify of God's unfailing faithfulness and the
              fulfillment of His promises in my life. Late last year, God gave
              me a word: He said He was opening the doors of nations unto me. I
              held on to that promise and trusted Him completely. Today, by His
              grace, I am standing in the UK as a living testimony to His
              covenant-keeping nature. It didn't even take six months for God to
              fulfill what He had spoken over my life. Throughout that season,
              every word spoken from the altar was God speaking directly to me.
              He gave me clear instructions and constant reassurance, reminding
              me that “ na Him dey run this”— that no man could take the glory
              for what He was about to do. I remember one particular Sunday when
              Rev. asked us to worship God undignified, and she said that God
              was handing out packages to individuals. In that moment, I knew in
              my spirit that mine had been released. I could sense it! The very
              next day, I had my CAS interview. It was as though the officer was
              already welcoming me to the UK before the process was even
              completed. Just four hours after that interview, I received my CAS
              letter. But God wasn't done yet! I applied for my visa and
              received a response exactly 26 hours later—without any premium
              service or expedited processing. It was purely the hand of God at
              work! This entire journey has shown me that when God carries you,
              He carries you all the way. He is indeed a covenant-keeping God,
              and I can testify that His word never returns void. He is faithful
              to fulfill every promise He makes. To Him alone be all the glory,
              honor, and praise forevermore! Amen
            </p>
            <p className="font-semibold text-[16px] text-[#6B7280]">Busayo</p>
          </div>
        </div>
      </section>

      <section>
        <h1>See our counselling teams</h1>
        <div className="flex justify-between">
          <div>
            <h1>Relationship team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <Image src="/images/home.png" alt="" width={50} height={50} />
        </div>
        <div className="flex justify-between">
          <Image src="/images/home.png" alt="" width={50} height={50} />
          <div>
            <h1>Relationship team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1>Relationship team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <Image src="/images/home.png" alt="" width={50} height={50} />
        </div>
        <div className="flex justify-between">
          <Image src="/images/home.png" alt="" width={50} height={50} />
          <div>
            <h1>Relationship team</h1>
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

      <section className="mx-auto container">
        <h3>PREACHING TEAM</h3>
        <h1>Meet our Inspirational team</h1>
        <div className="flex justify-between">
          <div className="w-fit h-fit bg-white shadow-2xl">
            <Image
              src="/images/home.png"
              alt=""
              width={302}
              height={366}
              className="rounded-full"
            />
            <h1>Rev. Tunde Amosun</h1>
            <p>Head Pastor, Church</p>
            <div className="flex justify-around">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="w-fit h-fit bg-white shadow-2xl">
            <Image
              src="/images/home.png"
              alt=""
              width={302}
              height={366}
              className="rounded-full"
            />
            <h1>Rev. Tunde Amosun</h1>
            <p>Head Pastor, Church</p>
            <div className="flex justify-around">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="w-fit h-fit bg-white shadow-2xl">
            <Image
              src="/images/home.png"
              alt=""
              width={302}
              height={366}
              className="rounded-full"
            />
            <h1>Rev. Tunde Amosun</h1>
            <p>Head Pastor, Church</p>
            <div className="flex justify-around">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="w-fit h-fit bg-white shadow-2xl">
            <Image
              src="/images/home.png"
              alt=""
              width={302}
              height={366}
              className="rounded-full"
            />
            <h1>Rev. Tunde Amosun</h1>
            <p>Head Pastor, Church</p>
            <div className="flex justify-around">
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
