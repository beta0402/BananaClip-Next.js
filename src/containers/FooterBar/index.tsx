import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import DownloadPart from "./DownloadPart";
import GamePart from "./GamePart";
import LinkPart from "./LinkPart";
import PlayPart from "./PlayPart";
import SupportPart from "./SupportPart";

export default function FooterBar() {
  const location = useLocation();
  const [showFootbar, setShowFootBar] = useState(true);

  useEffect(() => {
    if (
      location.pathname.includes("gameplay") ||
      location.pathname.includes("market")
    )
      setShowFootBar(false);
    else setShowFootBar(true);
  }, [location]);

  return (
    <div>
      {showFootbar && (
        <div className="w-full bg-secondary font-sans">
          <div className="py-[75px] flex w-full justify-center border-b-2 border-primary">
            <div className="w-[70%] flex justify-between wrap">
              <SupportPart />
              <PlayPart />
              <LinkPart />
              <DownloadPart />
              <GamePart />
            </div>
          </div>
          <div className="h-[65px] flex justify-center items-center text-[14px]">
            BananaClip Studios © 2023
          </div>
        </div>
      )}
    </div>
  );
}
