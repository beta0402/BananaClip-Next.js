import Image1 from "@/assets/image/profile_item1.png";
import Image2 from "@/assets/image/profile_item2.png";
import Image3 from "@/assets/image/profile_item3.png";

export default function ItemPart() {
  return (
    <div className="grid grid-cols-4 gap-7 p-20">
      <img src={Image1} className="rounded-md w-full" />
      <img src={Image2} className="rounded-md w-full" />
      <img src={Image3} className="rounded-md w-full" />
      <img src={Image2} className="rounded-md w-full" />
      <img src={Image1} className="rounded-md w-full" />
      <img src={Image3} className="rounded-md w-full" />
      <img src={Image3} className="rounded-md w-full" />
      <img src={Image2} className="rounded-md w-full" />
    </div>
  );
}
