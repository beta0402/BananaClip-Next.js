import LogoIcon from "@/components/Icons/LogoIcon";
import SelectOptionPart from "./SelectOptionPart";
import TotalActivePart from "./TotalActivePart";
import YourActivePart from "./YourActivePart";

export default function StakingPage() {
  return (
    <div className="relative px-[120px] py-[80px] left-0 right-0 bg-black font-['Chronosfer']">
      <div className="border-[5px] rounded-[20px] border-white w-full p-[20px]">
        <div className="flex gap-x-5 items-end">
          <div>
            <LogoIcon size="80px" />
          </div>
          <div className="text-[90px] text-white leading-none">
            Staking Portal
          </div>
        </div>
        <div className="m-[10px] flex justify-around p-10">
          <SelectOptionPart />
          <div className="space-y-20">
            <TotalActivePart />
            <YourActivePart />
          </div>
        </div>
      </div>
    </div>
  );
}
