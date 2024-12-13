import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { profileNavMenuData } from "@/utils/constants";
import ProfileNavBarItem from "./ProfileNavBarItem";

interface menuProps {
  url: string;
  title: string;
}

export default function ProfileNavBar() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>("");
  useEffect(() => {
    setCurrent(window.location.pathname);
  }, []);
  const handleMenuSelect = (page: string) => {
    setCurrent(page);
    navigate(page);
  };

  return (
    <div className="flex gap-x-1 items-center border-2 rounded-[20px] p-1 border-profile_nav w-fit">
      {profileNavMenuData.map((menu: menuProps) => {
        return (
          <ProfileNavBarItem
            key={menu.url}
            title={menu.title}
            onClick={() => handleMenuSelect(menu.url)}
            isActive={current === menu.url}
          />
        );
      })}
    </div>
  );
}
