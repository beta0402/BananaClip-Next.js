import LogoIcon from "@/components/Icons/LogoIcon";

export default function BuyPart() {
  return (
    <div className="py-2 mt-6 border-b flex gap-x-3 items-center">
      <LogoIcon size="40px" />
      <div className="text-[26px] font-['neusharp_bold']">10,000</div>
      <div className="text-[18px] text-secondary line-through font-sans">
        19999.00
      </div>
      <div className="px-[10px] py-[5px] text-[14px] rounded-[2px] font-sans bg-slider_active font-semibold">
        51% OFF
      </div>
    </div>
  );
}
