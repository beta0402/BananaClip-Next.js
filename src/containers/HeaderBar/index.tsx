import { useNavigate } from "react-router-dom";

import MenuIcon from "@/components/Icons/MenuIcon";
import LogoIcon from "@/components/Icons/LogoIcon";
import LogoTitle from "@/components/LogoTitle";
import AvartarImage from "@/assets/image/avatar.png";

export default function HeaderBar() {
  const navigate = useNavigate();
  const handleStaking = () => {
    navigate("/staking");
  };

  return (
    <div className="fixed left-0 top-0 h-[75px] w-full pr-6 py-2 flex justify-between bg-black z-10">
      <div className="flex gap-x-20 items-center">
        <div className="flex gap-x-5 items-center">
          <div className="w-[50px] flex justify-end">
            <MenuIcon />
          </div>
          <LogoTitle />
        </div>
        <div
          className="text-[40px] text-[#F0CC0E] font-['Chronosfer'] cursor-pointer"
          onClick={handleStaking}
        >
          Staking
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <div className="flex gap-x-1">
          <LogoIcon size="43px" />
          <div className="font-['Neusharp_Bold'] text-[26px]">16,726</div>
        </div>
        <img src={AvartarImage} />
      </div>
    </div>
  );
}
