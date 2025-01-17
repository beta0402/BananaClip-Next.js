import { FaChevronDown } from "react-icons/fa";

import LogoIcon from "@/components/Icons/LogoIcon";

export default function YourActivePart() {
  return (
    <div className="w-[500px] p-[20px] border-2 rounded-[15px] flex flex-col items-center font-['nasalization']">
      <div className="text-[22px]">Your Active Staked</div>
      <div className="mt-3 flex gap-x-2 text-[30px] text-third items-center leading-none">
        <div>122,367</div>
        <LogoIcon size="30px" />
        <div>$BANA</div>
      </div>
      <div className="mt-7 w-full flex justify-between text-[15px]">
        <div className="text-white">Total BANA Rewards</div>
        <div className="text-third">5,342 BANA</div>
      </div>
      <div className="mt-3 w-full flex justify-between text-[15px]">
        <div className="text-white">APR</div>
        <div className="text-third">10%</div>
      </div>
      <div className="mt-3 w-full flex justify-between text-[15px]">
        <div className="text-white">Time Remaining</div>
        <div className="text-third">22 Days</div>
      </div>
      <div className="text-[30px] text-third cursor-pointer">
        <FaChevronDown />
      </div>
    </div>
  );
}
