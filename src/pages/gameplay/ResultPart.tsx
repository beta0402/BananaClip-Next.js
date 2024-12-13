import LogoIcon from "@/components/Icons/LogoIcon";

export default function ResultPart() {
  return (
    <div className="w-[600px] py-[40px] px-[70px] flex flex-col items-center gap-y-2 font-semibold rounded-[28px] bg-dialog font-['Neusharp_Bold']">
      <div className="text-[40px]">Match Results</div>
      <div className="flex gap-x-2">
        <LogoIcon size="60px" />
        <div className="text-[30px]">+2,134 BANA</div>
      </div>
      <div className="grid grid-cols-2 text-[24px]">
        <div className="flex flex-col items-center gap-y-1 pb-4 pr-4 border-b border-r">
          <div>Top Position</div>
          <div>33</div>
        </div>
        <div className="flex flex-col items-center gap-y-1 pb-4 pl-4 border-b">
          <div>Highest BANA</div>
          <div className="flex gap-x-2">
            <LogoIcon size="40px" />
            <div>3,145</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-1 pt-4 pr-4 border-r">
          <div>Time Alive</div>
          <div>2m 33s</div>
        </div>
        <div className="flex flex-col items-center gap-y-1 pt-4 pl-4">
          <div>BANA Eaten</div>
          <div className="flex gap-x-2">
            <LogoIcon size="40px" />
            <div>4,565</div>
          </div>
        </div>
      </div>
    </div>
  );
}
