import React from "react";

interface PropsType {
  title?: String;
  children?: React.ReactNode;
}

export default function LabelProfile(props: PropsType) {
  return (
    <div className="px-[30px] w-full flex flex-col items-center bg-btn_normal rounded-[8px] border border-secondary">
      <div className="text-[25px] text-white font-['Chronosfer']">
        {props.title}
      </div>
      {props.children}
      {/* <div className="text-[40px] text-third font-['milestone']">
        69th/56,524
      </div> */}
    </div>
  );
}
