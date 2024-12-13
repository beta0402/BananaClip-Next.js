import { CiHeart } from "react-icons/ci";
import { PiCopyBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function AddWishPart() {
  return (
    <div className="mt-5">
      <div className="w-full flex justify-between">
        <div className="flex gap-x-2 text-[14px] font-['montserrat'] text-secondary items-center">
          <div className="text-[20px]">
            <CiHeart />
          </div>
          <div>Add to Wishlist</div>
        </div>
        <div className="flex gap-x-2 text-[14px] font-['montserrat'] text-secondary items-center">
          <div>Share NFT:</div>
          <div className="text-[20px] flex gap-x-2">
            <PiCopyBold />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="text-[14px] font-sans text-secondary">
        100% Guaranteed Safe Checkout
      </div>
    </div>
  );
}
