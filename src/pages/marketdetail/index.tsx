import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import GameDetailPart from "./GameDetailpart";
import RelatedPart from "./RelatedPart";

export default function MarketDetailPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/marketsearch");
  };

  return (
    <div className="w-full pt-[40px] pl-[60px] pb-[100px]">
      <div
        className="cursor-pointer flex gap-x-2 items-center text-[20px] font-['montserrat']"
        onClick={handleBack}
      >
        <FaAngleLeft />
        <div>BACK</div>
      </div>
      <GameDetailPart />
      <RelatedPart />
    </div>
  );
}
