import GameSelectCard from "@/components/GameSelectCard";

export default function RelatedPart() {
  return (
    <div className="mt-[60px]">
      <div className="text-[24px] font-['montserrat'] font-semibold">
        Related NFTs
      </div>
      <div className="w-full flex gap-x-4 overflow-x-auto">
        {new Array(9).fill(0).map((_, index: number) => {
          return <GameSelectCard key={index} />;
        })}
      </div>
    </div>
  );
}
