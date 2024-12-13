import CardImage from "@/assets/image/card.png";
import NormalButton from "@/components/NormalButton";
import AboutPart from "./AboutPart";
import KeyInfoPart from "./KeyInfoPart";
import BuyPart from "./BuyPart";
import AddWishPart from "./AddWishPart";
import ModalBuy from "./ModalBuy";

import useModalVisible, { modalVisibleType } from "@/utils/useModalVisible";

export default function GameDetailPart() {
  const { isModalVisible, setIsModalVisible }: modalVisibleType =
    useModalVisible(false);

  return (
    <>
      <div className="mt-3 flex gap-x-[100px]">
        <img src={CardImage} className="w-[600px] h-[600px]" />
        <div className="w-[640px]">
          <AboutPart />
          <KeyInfoPart />
          <BuyPart />
          <div className="mt-5 w-[300px] h-[50px] font-['Montserrat'] font-bold text-[25px]">
            <NormalButton
              title="Buy Now"
              onClick={() => setIsModalVisible(true)}
            />
          </div>
          <AddWishPart />
        </div>
      </div>
      {isModalVisible && <ModalBuy />}
    </>
  );
}
