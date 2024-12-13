import { useNavigate } from "react-router-dom";

import CardImage from "@/assets/image/card.png";
import LogoIcon from "@/components/Icons/LogoIcon";
import NormalButton from "@/components/NormalButton";

export default function GameSelectCard() {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/marketdetail");
  };

  return (
    <div className="relative w-[315px] min-w-[315px] font-semibold">
      <div className="w-full h-auto">
        <img src={CardImage} className="w-full hover:blur" />
      </div>
      <div className="absolute top-0 left-0 w-[315px] h-[315px] opacity-0 hover:opacity-100">
        <img src={CardImage} className="w-full h-full blur z-0" />
        <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="text-[29px] font-['progress_regular']">
              STEVE THE GUY
            </div>
            <div className="text-[14px] font-['excluded'] flex gap-x-2 font-bold">
              <div>RARITY:</div>
              <div className="text-lightred">ELITE</div>
            </div>
          </div>
          <div className="font-['excluded'] text-[20px] flex items-center flex-col">
            <div>PERKS</div>
            <div className="text-lightgreen flex flex-col items-center">
              <div>+15% XP</div>
              <div>+STEVE SKIN</div>
              <div>+BANA DRIP</div>
              <div>+EARLY ACCESS</div>
            </div>
          </div>
          <div className="h-[50px] w-full">
            <NormalButton title="Buy" onClick={handleBuy} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-2">
        <div className="text-[19px] font-['progress_regular']">
          BananaClip Pass
        </div>
        <div className="flex gap-x-1">
          <LogoIcon size="20px" />
          <div className="font-['Neusharp_Bold'] text-[16px]">16,726</div>
        </div>
      </div>
    </div>
  );
}
