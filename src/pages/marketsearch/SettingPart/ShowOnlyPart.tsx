import ShowOnlyItem from "@/components/ShowonOnlyItem";

export default function ShowOnlyPart() {
  return (
    <div className="space-y-3">
      <div className="border-b border-third pb-4 text-[24px] font-semibold">
        Show Only
      </div>
      <ShowOnlyItem title="In Game Assets" cnt="2,234" />
      <ShowOnlyItem title="NTF's" cnt="122" />
      <ShowOnlyItem title="Skins" cnt="2,234" />
      <ShowOnlyItem title="Perks" cnt="2,234" />
      <ShowOnlyItem title="Passes" cnt="2,234" />
    </div>
  );
}
