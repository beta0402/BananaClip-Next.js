import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

export default function PriceSlider() {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(200);
  const [maxValue2, setMaxValue2] = useState(1156);

  return (
    <div>
      <MultiRangeSlider
        min={0}
        max={1500}
        minValue={200}
        maxValue={1156}
        step={10}
        canMinMaxValueSame={true}
        // onInput={(e: ChangeResult) => {
        //   setMinValue(e.minValue);
        //   setMaxValue(e.maxValue);
        // }}
        onChange={(e: ChangeResult) => {
          setMinValue2(e.minValue);
          setMaxValue2(e.maxValue);
        }}
        label={false}
        ruler={false}
        style={{ border: "none", boxShadow: "none", padding: "15px 0px" }}
        barLeftColor="#C1C1C1"
        barInnerColor="#F0CC0E"
        barRightColor="#C1C1C1"
        thumbLeftColor="white"
        thumbRightColor="white"
      />
      <div className="w-full px-[50px] flex justify-between text-[14px] font-semibold">
        <div>{`${minValue2} $BANA`}</div>
        <div>{`${maxValue2} $BANA`}</div>
      </div>
    </div>
  );
}
