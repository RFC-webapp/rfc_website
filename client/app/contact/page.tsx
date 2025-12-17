import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const page = () => {
  return (
    <div className="container mx-auto mt-20 mb-12">
      {/* <hr className="border mb-6" /> */}

      {/* <h1 className="text-6xl font-bold mb-4 text-left">CONTACT</h1> */}

      {/* <hr className="w-full border mb-6" /> */}

      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h3>
        <p className="text-2xl font-bold text-black-700 mb-1">
          We&apos;d love to hear from you
        </p>
        <p className="text-black-600">
          Our friendly team is always here to chat.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mb-12 px-2 md:px-0">
        {/* LEFT MAP → 70% */}
        <div className="flex-[0.7] h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.510607928576!2d3.3387734755916763!3d7.152273016344862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4bb7bef69a0d%3A0xe36f2a4cc6a11ce4!2sThe%20Rock%20Foundation%20Church%2C%20Idi-aba%2C%20Abeokuta!5e0!3m2!1sen!2sng!4v1696165000000!5m2!1sen!2sng"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Rock Foundation Church Map"
          ></iframe>
        </div>

        {/* RIGHT FORM → 30% */}
        <div className="flex-[0.3]">
          <form className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-semibold">Message</label>
              <textarea
                placeholder="Your message"
                className="border border-gray-300 p-2 rounded w-full h-30"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white p-2 px-4 rounded hover:bg-red-700 transition w-32 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:w-4/5 mx-auto pt-12">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 border border-white rounded-full p-2 mb-2 w-15 h-15 flex items-center justify-center">
            <HiMail className="text-blue-900 text-3xl" />
          </div>
          {/* <span className="font-bold text-lg mb-1">Email</span> */}
          <p className="text-gray-700 mb-1">
            Our friendly team is here to talk
          </p>
          <a
            href="mailto:test@gmail.com"
            className="text-blue-900 font-bold underline hover:text-blue-700"
          >
            test@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 border border-white rounded-full p-2 mb-2 w-15 h-15 flex items-center justify-center">
            <HiLocationMarker className="text-blue-900 text-3xl" />
          </div>
          {/* <span className="font-bold text-lg mb-1">Church</span> */}
          <p className="text-gray-700 mb-1">
            Come say hello at our church building
          </p>
          <p className="text-blue-900 font-bold">
            Tekobo Junction, Idi-aba, Abeokuta
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 border border-white rounded-full p-2 mb-2 w-15 h-15 flex items-center justify-center">
            <HiPhone className="text-blue-900 text-3xl" />
          </div>
          {/* <span className="font-bold text-lg mb-1">Call</span> */}
          <p className="text-gray-700 mb-1">Mon-Fri from 8am to 5pm</p>
          <p className="text-blue-900 font-bold">+(234) 803-437-5758</p>
        </div>
      </div>
    </div>
  );
};
export default page;
