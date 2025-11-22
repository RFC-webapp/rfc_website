import { Button } from "../ui/button";

export default function Service() {
  return (
    <div>
      <div className="text-center text-[#161722] my-24">
        <h5 className="text-[12px] md:text-[16px] font-normal ">
          WELCOME TO RFC
        </h5>
        <h1 className="font-bold text-[30px] md:text-[48px]">OUR SERVICE</h1>
        <p className="text-[16px] font-normal px-2 md:px-0 md:w-5/8 mx-auto my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Button variant="default" size="lg">
          READ MORE
        </Button>
      </div>
    </div>
  );
}
