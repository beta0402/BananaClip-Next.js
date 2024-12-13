import GameSelectCard from "../../../components/GameSelectCard";
import HeaderTitle from "./HeaderTitle";

export default function MarketSelectPart() {
  return (
    <div className="w-full h-full pr-[100px]">
      <HeaderTitle />
      <div className="w-full h-full overflow-y-auto flex flex-wrap no-scrollbar gap-y-6 justify-between pb-[100px]">
        {new Array(16).fill(0).map((_, index: number) => {
          return <GameSelectCard key={index} />;
        })}
      </div>
    </div>
  );
}
