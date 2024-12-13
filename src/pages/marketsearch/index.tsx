import MarketSelectPart from "./MarketSelectPart";
import SettingPart from "./SettingPart";

export default function MarketSearchPage() {
  return (
    <div className="fixed left-[50px] right-0 top-[75px] bottom-0 flex justify-between font-[montserrat]">
      <SettingPart />
      <MarketSelectPart />
    </div>
  );
}
