import SearchBar from "@/components/SearchBar";
import CategoryPat from "./CategoryPart";
import ShowOnlyPart from "./ShowOnlyPart";
import PricePart from "./PricePart";
import NormalButton from "@/components/NormalButton";

export default function SettingPart() {
  return (
    <div className="w-[420px] min-w-[420px] h-full overflow-y-auto no-scrollbar px-[60px] py-[30px] space-y-[50px]">
      <SearchBar />
      <CategoryPat />
      <ShowOnlyPart />
      <PricePart />
      <div className="text-[20px] font-semibold">
        <NormalButton title="Update Filter" />
      </div>
      <div className="flex justify-center text-btn_reset text-[20px] font-semibold cursor-pointer">
        Reset Filter
      </div>
    </div>
  );
}
