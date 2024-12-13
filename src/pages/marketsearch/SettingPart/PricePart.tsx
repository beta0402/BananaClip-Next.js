import PriceSlider from "@/components/PriceSlider";

export default function PricePart() {
  return (
    <div className="space-y-3">
      <div className="border-b border-third pb-4 text-[24px] font-semibold">
        Price
      </div>
      <PriceSlider />
    </div>
  );
}
