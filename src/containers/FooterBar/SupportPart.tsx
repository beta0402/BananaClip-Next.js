import LogoIcon from "@/components/Icons/LogoIcon";
import LogoTitle from "@/components/LogoTitle";

export default function SupportPart() {
  return (
    <div className="space-y-2">
      <div className="flex gap-x-3 pb-4">
        <LogoIcon size="40px" />
        <LogoTitle />
      </div>
      <div className="text-secondary text-[14px]">Customer Support:</div>
      <div className="text-primary text-[18px] font-semibold">
        Open a Discord Ticket
      </div>
      <div className="text-secondary text-[16px]">4517 Washington Ave. </div>
      <div className="text-secondary text-[16px]">Portstown, BVI 39495</div>
      <div className="text-primary text-[16px] font-semibold">
        info@bananaclip.io
      </div>
    </div>
  );
}
