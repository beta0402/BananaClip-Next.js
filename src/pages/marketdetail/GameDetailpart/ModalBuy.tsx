import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

import CardImage from "@/assets/image/card.png";
import LogoIcon from "@/components/Icons/LogoIcon";
import NormalButton from "@/components/NormalButton";

export default function ModalBuy() {
  const [donePurchase, setDonwPurchase] = useState(false);
  const [sentWallet, setSentWallet] = useState(false);

  return (
    <div
      data-action="close-modal"
      className="fixed w-screen h-screen inset-0 flex justify-center items-center bg-black/90 z-10"
    >
      <div className="w-[500px] h-[600px] bg-dialog px-[90px] py-8 flex flex-col items-center rounded-[8px]">
        <div className="text-[29px] font-['progress_regular']">
          STEVE THE GUY
        </div>
        <img src={CardImage} className="w-full mt-2" />
        <div className="mt-5 w-full h-[150px] flex flex-col justify-around items-center text-[20px] font-['montserrat'] font-semibold">
          {!donePurchase && (
            <div className="flex gap-x-3">
              <LogoIcon size="35px" />
              <div className="font-['Neusharp_Bold'] text-[24px]">16,726</div>
            </div>
          )}
          {!donePurchase && (
            <div className="w-full h-[50px]">
              <NormalButton
                title="Confirm Purchase"
                onClick={() => setDonwPurchase(true)}
              />
            </div>
          )}
          {donePurchase && (
            <div className="text-[18px] text-lightgreen flex gap-x-2 items-center">
              {sentWallet ? "Sent to Wallet" : "Purchase complete"}
              <FaCheck />
            </div>
          )}
          {donePurchase && (
            <div className="w-full h-[50px]">
              <NormalButton dataAction="close-modal" title="View My NFTs" />
            </div>
          )}
          {donePurchase && !sentWallet && (
            <div className="w-full h-[50px]">
              <NormalButton
                title="Send to Wallet"
                onClick={() => setSentWallet(true)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
