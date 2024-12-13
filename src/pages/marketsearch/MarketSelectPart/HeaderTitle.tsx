import LogoTitle from "@/components/LogoTitle";
import { FaAngleDown } from "react-icons/fa";

export default function HeaderTitle() {
  return (
    <div className="w-full flex justify-between items-center text-btn_latest py-4">
      <div className="flex gap-x-5 items-start">
        <LogoTitle />
        <div className="text-[27px] font-['beamweapon']">NFTS</div>
      </div>
      <div className="flex gap-x-2 items-center cursor-pointer">
        <div className="text-[20px]">Latest</div>
        <FaAngleDown />
      </div>
    </div>
  );
}
