import LogoIcon from "@/components/Icons/LogoIcon";
import LabelProfile from "./MainDetail/LabelProfile";

export default function EarningPart() {
  return (
    <div className="w-full py-20 flex flex-col items-center gap-y-10">
      <div className="flex flex-col items-end">
        <div className="flex gap-x-3 items-center">
          <LogoIcon size="100px" />
          <div className="text-[100px] font-['Neusharp_Bold'] text-third leading-none">
            26,345
          </div>
        </div>
        <div className="text-[40px] font-['Chronosfer'] text-white leading-none">
          Total Earnings
        </div>
      </div>
      <div className="flex flex-col w-[300px] gap-y-5">
        <LabelProfile title="From Games">
          <div className="flex gap-x-2">
            <LogoIcon size="30px" />
            <div className="text-[30px] font-['Neusharp_Bold'] text-third leading-none">
              2,345
            </div>
          </div>
        </LabelProfile>
        <LabelProfile title="From Engagement">
          <div className="flex gap-x-2">
            <LogoIcon size="30px" />
            <div className="text-[30px] font-['Neusharp_Bold'] text-third leading-none">
              2,345
            </div>
          </div>
        </LabelProfile>
        <LabelProfile title="From Banana Farms">
          <div className="flex gap-x-2">
            <LogoIcon size="30px" />
            <div className="text-[30px] font-['Neusharp_Bold'] text-third leading-none">
              2,345
            </div>
          </div>
        </LabelProfile>
      </div>
    </div>
  );
}
