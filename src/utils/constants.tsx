import HomeIcon from "@/components/Icons/HomeIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import MarketIcon from "@/components/Icons/MarketIcon";

export const navMenuData = [
  { url: "home", icon: <HomeIcon /> },
  { url: "search", icon: <SearchIcon /> },
  { url: "profile", icon: <ProfileIcon /> },
  { url: "marketsearch", icon: <MarketIcon /> },
];

export const profileNavMenuData = [
  {
    url: "/profile/games",
    title: "My Games",
  },
  {
    url: "/profile/items",
    title: "My Items",
  },
  {
    url: "/profile/farm",
    title: "Banana Farm",
  },
  {
    url: "/profile/earnings",
    title: "Earnings",
  },
];
