import Image from "next/image";
import FAQSection from "@/components/faq-section";
import BankCard from "@/components/BankCard";

const faqs = [
  {
    id: "faq-1",
    question: "How are donations used?",
    answer:
      "Your gifts support our ministries, outreach, missions, and the upkeep of our church. We use all donations responsibly, and financial details are available if you’d like to see them. Thank you for helping us make a meaningful impact in our community and beyond.",
  },
  {
    id: "faq-2",
    question: "Can I give to support a specific project or initiative?",
    answer:
      "Yes! You can designate your contribution to a specific project, outreach, or ministry.",
  },
  {
    id: "faq-3",
    question: "Are there other ways to give besides online?",
    answer:
      "Yes. You can give during in-person services, through bank transfers, USSD, or other approved giving channels.",
  },
  {
    id: "faq-4",
    question: "Is my payment information and privacy secured?",
    answer:
      "Absolutely. All transactions are processed through secure, encrypted payment systems to protect your information.",
  },
  {
    id: "faq-5",
    question: "How do I set up recuring giving?",
    answer:
      "Simply select the recurring option when making your donation online and choose your preferred frequency..",
  },
  {
    id: "faq-6",
    question: "What is pastor’s offering?",
    answer:
      "Pastor’s Offering is a voluntary gift given directly to bless our pastors in appreciation of their spiritual labor. “Those who are taught the word should share all good things with their teacher.” — Galatians 6:6",
  },
];

export default function page() {
  return (
    <div className=" bg-white mt-20">
      <section className="container mx-auto bg-gray-100 w-fit rounded-full p-2 flex justify-center gap-x-4 items-center md:text-left text-center">
        <p className="text-xs sm:text-sm font-semibold text-gray-700">
          GIVE TO ROCK FOUNDATION CHURCH
        </p>

        <Image
          src="/images/give-badge.png"
          alt="give hand"
          width={40}
          height={40}
          className="rounded-full object-cover shrink-0 w-8 h-8 sm:w-10 sm:h-10"
        />
      </section>

      <section className="container mx-auto text-center">
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-6xl font-500 tracking-tight text-black">
            WAYS TO GIVE
          </h1>

          <p className="text-l text-gray-500">
            Convenient ways to give using wired transfers.
          </p>
        </div>

        <div className=" block md:flex justify-center mt-6">
          <div className="inline-flex rounded-full bg-gray-200 p-2 gap-1">
            <div className="px-6 text-center py-2 text-sm md:text-lg rounded-full bg-red-800 text-white font-medium">
              NAIRA AND DOMICILIARY ACCOUNT
            </div>

            {/* <div className="px-6 py-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer">
                DOMICILIARY ACCOUNT
              </div> */}
          </div>
        </div>
      </section>

      <section className="container mx-auto p-8 mt-10 bg-[#D3D3D3] rounded-md">
        <h3 className="text-sm lg:text-xl text-center md:text-left font-semibold text-gray-700 mb-4">
          TITHES AND OFFERINGS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <BankCard
              bankLogo="/logos/access-img.png"
              bankName="Access Bank"
              accountNumber="0006822216"
              copyIcon="/logos/button.png"
            />
          </div>

          <div className="w-full">
            <BankCard
              bankLogo="/logos/access-img.png"
              bankName="Dollar Account"
              accountNumber="1448467336"
              copyIcon="/logos/button.png"
            />
          </div>

          <div className="w-full">
            <BankCard
              bankLogo="/logos/gtbank-img.png"
              bankName="GTBank"
              accountNumber="0050990288"
              copyIcon="/logos/button.png"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row gap-5 mt-5 items-stretch">
        <div className="flex-1 bg-[#F3F4F6] rounded-md p-6 md:p-8 flex flex-col justify-between">
          {/* Pastors Offering */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/cage-img.png"
                  alt="Cage-img"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm font-semibold">Pastors Offering</span>
              </div>

              <Image
                alt="Nigeria-flag logo"
                width={20}
                height={20}
                src="/logos/nigeria-flag.png"
                className="w-6 h-4 object-cover rounded"
              />
            </div>

            <BankCard
              bankLogo="/logos/access-img.png"
              bankName="Access Bank"
              accountNumber="0006822216"
              copyIcon="/logos/button.png"
            />
          </div>

          {/* Mission Offering */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/cage-img.png"
                  alt="Cage-img"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm font-semibold">Mission Offering</span>
              </div>

              <Image
                alt="Nigeria-flag logo"
                width={20}
                height={20}
                src="/logos/nigeria-flag.png"
                className="w-6 h-4 object-cover rounded"
              />
            </div>

            <BankCard
              bankLogo="/logos/access-img.png"
              bankName="Access Bank"
              accountNumber="0006822216"
              copyIcon="/logos/button.png"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#F8EAEA] border border-[#2A1870] rounded-md flex flex-col justify-center md:justify-between mt-5 md:mt-0">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-white rounded p-1 shadow-sm">
                <Image
                  alt="pay-pal logo"
                  width={20}
                  height={20}
                  src="/logos/pay-pal.png"
                  className="w-6 h-auto object-contain"
                />
              </div>

              <div className="flex flex-col text-left mt-1">
                <div className="font-semibold">Give via PayPal</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 leading-relaxed text-left">
              Give securely from anywhere in the world using PayPal balance,
              credit/debit cards & bank accounts.
            </div>
          </div>

          <div className="mt-auto mb-6 md:mb-12 bg-[#2A1870] text-white py-3 px-6 text-center font-small hover:bg-blue-900 cursor-pointer tracking-wide w-full md:w-auto mx-auto md:mx-0">
            GIVE NOW →
          </div>
        </div>
      </section>

      <section className="relative w-full text-white mt-10 py-24 px-4 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/give-image.avif')",
          }}
        />

        <div className="absolute inset-0 bg-[#161750] opacity-40" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-orange-500">GIVE </span>
            <span className="text-white">TOWARDS</span>
          </h2>
          <h2 className="text-2xl md:text-6xl font-bold leading-tight">
            <span className="text-white">GOD&apos;S </span>
            <span className="text-orange-500">WORK.</span>
          </h2>

          <div className="mt-10 max-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              &quot;Each of you should give what you have decided in your heart
              to give.&quot;
            </p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="bg-white text-black px-8 py-3 rounded-full font-medium 
                border border-white 
                hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 ease-in-out cursor-pointer"
            >
              GIVE NOW
            </button>

            <button
              className="border border-white px-8 py-3 rounded-full font-medium 
             hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer"
            >
              OTHER WAYS TO GIVE
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-12">
        <FAQSection
          title="Giving FAQs"
          faqs={faqs}
          showSentence={false}
          linkHref="/faqs"
          linkLabel="Go to General FAQs"
        />
      </section>
    </div>
  );
}
