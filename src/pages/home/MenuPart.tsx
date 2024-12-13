import GameImage1 from "@/assets/image/game1.png";
import GameImage2 from "@/assets/image/game2.png";
import GameImage3 from "@/assets/image/game3.png";
import GameImage4 from "@/assets/image/game4.png";

export default function MenuPart() {
  const options = [
    "Trending Now",
    "Recently Played",
    "Originals",
    "Updated",
    "Multiplayer",
    "2 Player",
    "Casual",
    "Clicker",
    "Adventure",
  ];

  return (
    <div>
      {options.map((item: string) => {
        return (
          <div className="space-y-1 mt-2 mr-3" key={item}>
            <div className="text-[30px] font-semibold font-[roboto] pt-5">
              {item}
            </div>
            <div className="w-full gap-x-3 grid grid-cols-4">
              <img
                src={GameImage1}
                className="rounded-md w-full cursor-pointer hover:blur-sm"
              ></img>
              <img
                src={GameImage2}
                className="rounded-md w-full cursor-pointer hover:blur-sm"
              ></img>
              <img
                src={GameImage3}
                className="rounded-md w-full cursor-pointer hover:blur-sm"
              ></img>
              <img
                src={GameImage4}
                className="rounded-md w-full cursor-pointer hover:blur-sm"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
