import React from "react";

import NavActiveIcon from "@/components/Icons/NavActiveIcon";

interface NavItemProps {
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export default function NavBarItem(props: NavItemProps) {
  return (
    <div
      className="w-[50px] h-[30px] flex justify-between items-center cursor-pointer"
      onClick={props.onClick}
    >
      <div>{props.isActive && <NavActiveIcon />}</div>
      {props.icon}
    </div>
  );
}
