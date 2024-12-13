import { FaArrowRight } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";

export default function PlayPart() {
    return (
        <div className="space-y-2">
            <div className="text-primary text-[16px] pb-2 font-semibold">PLAY</div>
            <div className="text-secondary text-[14px]">Classic</div>
            <div className="text-secondary text-[14px]">Tower Defense</div>
            <div className="text-secondary text-[14px]">Popular</div>
            <div className="flex gap-x-2 items-center text-[14px]">
                <div className="text-third text-[16px]"><IoRemoveOutline /></div>
                <div>Staking</div>
            </div>
            <div className="text-secondary text-[14px]">Camera & Photo</div>
            <div className="text-secondary text-[14px]">TV & Homes</div>
            <div className="flex gap-x-2 items-center text-third">
                <div>Browse All Product</div>
                <FaArrowRight />
            </div>
        </div>
    )
}