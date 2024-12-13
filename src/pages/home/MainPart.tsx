import { useNavigate } from "react-router-dom";

import MainPartImage from "@/assets/image/mainpart.png";
import GameTitle from "@/assets/image/gametitle.png";
import NormalButton from "@/components/NormalButton";

export default function MainPart() {
  const navigate = useNavigate();

  const onHandlePlay = () => {
    navigate("/gameplay");
  };

  const onHandleMarket = () => {
    navigate("/marketsearch");
  };

  return (
    <div className="relative w-full">
      <img src={MainPartImage} className="h-[750px] w-full" />
      <div className="absolute bg-black w-[500px] h-full left-0 top-0" />
      <div className="absolute bg-gradient-to-r from-black to-transparent h-full w-[40%] top-0 left-[500px]" />
      <div className="absolute flex left-[80px] top-0 w-[500px] h-full flex-col justify-center gap-y-3">
        <img src={GameTitle} className="w-[500px]" />
        <div className="text-[28px] font-semibold leading-0 font-[montserrat]">
          The classic tower defense game, rebooted for Web3.
        </div>
        <div className="w-[400px] text-[40px] space-y-2 font-[Chronosfer]">
          <div className="h-[60px]">
            <NormalButton title="PLAY" onClick={onHandlePlay} />
          </div>
          <div className="h-[60px]">
            <NormalButton title="MARKETPLACE" onClick={onHandleMarket} />
          </div>
        </div>
      </div>
    </div>
  );
}
