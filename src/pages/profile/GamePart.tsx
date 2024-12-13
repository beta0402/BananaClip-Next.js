import Image1 from "@/assets/image/profilegame1.png";
import Image2 from "@/assets/image/profilegame2.png";
import Image3 from "@/assets/image/profilegame3.png";

export default function GamePart() {
  return (
    <div className="grid grid-cols-3 gap-10 p-20">
      <img src={Image1} className="rounded-md w-full" />
      <img src={Image2} className="rounded-md w-full" />
      <img src={Image3} className="rounded-md w-full" />
      <img src={Image3} className="rounded-md w-full" />
      <img src={Image1} className="rounded-md w-full" />
      <img src={Image2} className="rounded-md w-full" />
    </div>
  );
}
