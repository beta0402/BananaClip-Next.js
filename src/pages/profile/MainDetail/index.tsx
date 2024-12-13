import LogoIcon from "@/components/Icons/LogoIcon";
import ProfileImage from "@/assets/image/profilemain.png";
import LabelProfile from "./LabelProfile";
import EditBtn from "./EditBtn";

export default function MainDetail() {
  return (
    <div className="py-[120px] pl-[120px] pr-[60px] flex justify-between gap-x-[60px] items-end">
      <div className="space-y-20">
        <div className="text-[70px] font-['beamweapon'] whitespace-nowrap">
          Chiken Joe
        </div>
        <div className="ml-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <LabelProfile title="Rank">
                <div className="text-[40px] text-third font-['milestone']">
                  69<span className="text-[20px]">th</span>/56,524
                </div>
              </LabelProfile>
            </div>
            <div>
              <LabelProfile title="Member For">
                <div className="text-[40px] text-third font-['milestone']">
                  12 Days
                </div>
              </LabelProfile>
            </div>
            <div>
              <LabelProfile title="Games Played">
                <div className="text-[40px] text-third font-['milestone']">
                  369
                </div>
              </LabelProfile>
            </div>
            <div>
              <LabelProfile title="Minutes Played">
                <div className="text-[40px] text-third font-['milestone']">
                  1,234<span className="text-[20px]">Minutes</span>
                </div>
              </LabelProfile>
            </div>
            <div className="col-span-2">
              <LabelProfile title="Total Rewards">
                <div className="text-[40px] text-third font-['milestone'] flex gap-x-2 items-center">
                  <LogoIcon size="40px" />
                  <span>2,345</span>
                </div>
              </LabelProfile>
            </div>
          </div>
        </div>
      </div>
      <img src={ProfileImage} className="w-[500px]" />
      <EditBtn />
    </div>
  );
}
