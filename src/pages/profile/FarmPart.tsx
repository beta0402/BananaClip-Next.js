import { useState } from "react";

import FarmImage from "@/assets/image/profile_farm.png";
import FarmTreeImage from "@/assets/image/farm_tree.png";
import FarmHouseImage from "@/assets/image/farm_house.png";
import PlusImage from "@/assets/image/farm_plus.png";

export default function FarmPart() {
  const [treeCnt, setTreeCnt] = useState(3);
  const [houseCnt, setHouseCnt] = useState(3);
  return (
    <div className="relative px-10 pt-20 pb-[300px]">
      <img src={FarmImage} className="absolute inset-0 w-full h-full z-[-1]" />
      <div className="flex justify-between">
        <div className="px-10 py-3 text-black rounded-[16px] bg-light_yellow">
          <div className="text-[16px] font-['Montserrat'] font-semibold">
            BANA Production
          </div>
          <div className="text-[30px] font-['Neusharp_Bold']">
            29.53 BANA/Day
          </div>
        </div>
        <div className="px-10 py-3 text-black rounded-[16px] bg-light_yellow">
          <div className="text-[16px] font-['Montserrat'] font-semibold">
            APY
          </div>
          <div className="text-[30px] font-['Neusharp_Bold']">11 %</div>
        </div>
        <div className="px-10 py-3 text-black rounded-[16px] bg-light_yellow">
          <div className="flex gap-x-5 items-center">
            <div>
              <div className="text-[16px] font-['Montserrat'] font-semibold">
                BANA in warehouse
              </div>
              <div className="text-[30px] font-['Neusharp_Bold']">
                29.53 BANA/Day
              </div>
            </div>
            <div className="w-[130px] h-[50px] flex justify-center items-center bg-third text-white text-[20px] font-['Neusharp_Bold'] rounded-md cursor-pointer">
              Collect
            </div>
          </div>
        </div>
        <div className="px-10 py-3 text-black rounded-[16px] bg-light_yellow">
          <div className="text-[16px] font-['Montserrat'] font-semibold">
            Hungry Monkey Risk
          </div>
          <div className="text-[30px] font-['Neusharp_Bold']">11 %</div>
        </div>
      </div>

      <div className="flex justify-between gap-x-[200px] mt-[200px]">
        <div className="w-[50%] grid grid-cols-3 gap-[30px] h-fit">
          {new Array(treeCnt).fill(0).map((item: number, index: number) => (
            <img src={FarmTreeImage} className="w-full" key={index + item} />
          ))}
          <img
            src={PlusImage}
            className="w-full cursor-pointer"
            onClick={() => setTreeCnt(treeCnt + 1)}
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-20 h-fit">
          {new Array(houseCnt).fill(0).map((item: number, index: number) => (
            <img src={FarmHouseImage} className="w-full" key={index + item} />
          ))}
          <img
            src={PlusImage}
            className="w-full cursor-pointer"
            onClick={() => setHouseCnt(houseCnt + 1)}
          />
        </div>
      </div>
    </div>
  );
}
