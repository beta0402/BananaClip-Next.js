import CategoryItem from "@/components/CategoryItem";

export default function CategoryPat() {
  return (
    <div className="space-y-3 text-[19px] font-semibold">
      <CategoryItem title="BananaClip" cnt="2,234" />
      <CategoryItem title="Blobio" cnt="122" />
      <CategoryItem title="overload" cnt="5,321" />
      <CategoryItem title="Banana TD" cnt="265" />
      <CategoryItem title="Dinglebop" cnt="234" />
      <div className="w-full flex justify-center">
        <div className="text-[16px] text-fourth font-normal cursor-pointer">
          Show more
        </div>
      </div>
    </div>
  );
}
