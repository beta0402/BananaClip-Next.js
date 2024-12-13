import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { navMenuData } from "@/utils/constants";
import NavBarItem from "./NavBarItem";

interface menuProps {
  url: string;
  icon: React.ReactNode;
}

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState<string>("");
  useEffect(() => {
    setCurrent(window.location.pathname.slice(1));
  }, [location]);
  const handleMenuSelect = (page: string) => {
    setCurrent(page);
    navigate(page);
  };

  return (
    <div className="fixed top-[75px] left-0 space-y-[10px] w-[50px]">
      {navMenuData.map((menu: menuProps) => {
        return (
          <NavBarItem
            key={menu.url}
            icon={menu.icon}
            onClick={() => handleMenuSelect(menu.url)}
            isActive={current.startsWith(menu.url)}
          />
        );
      })}
    </div>
  );
}
