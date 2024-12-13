import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GamePlayImage from "@/assets/image/gameplay.png";
import NormalButton from "@/components/NormalButton";
import LogoIcon from "@/components/Icons/LogoIcon";
import ResultPart from "./ResultPart";

export default function GamePlay() {
  const [showResult, setShowResult] = useState<Boolean>(false);

  const navigate = useNavigate();
  const onHandlePlayAgain = () => {
    navigate("/home");
  };
  const onHandleExit = () => {
    setShowResult(true);
  };
  return (
    <div className="fixed inset-0 z-20">
      <img src={GamePlayImage} className="w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="mt-[150px] w-[255px] h-[70px] relative flex items-center justify-center">
          <div className=" absolute top-0 left-0 w-full h-full bg-[#ffffff66] rounded-full flex gap-x-1 items-center justify-center blur-[2px]"></div>
          <div className="">
            <LogoIcon size="60px" />
          </div>
          <div className="font-['Neusharp_Bold'] text-[40px] text-black ">
            16,726
          </div>
        </div>
      </div>
      <div className="absolute w-full flex justify-center bottom-[20px]">
        <div className="w-[225px] font-[Chronosfer] text-[40px]">
          <NormalButton title="Exit Game" onClick={onHandleExit} />
        </div>
      </div>
      {showResult && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-5">
          <ResultPart />
          <div className="w-[600px] font-[Chronosfer] text-[40px]">
            <NormalButton title="Play Again" onClick={onHandlePlayAgain} />
          </div>
        </div>
      )}
    </div>
  );
}
