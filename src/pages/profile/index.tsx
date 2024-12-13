import { Routes, Route, Navigate } from "react-router-dom";

import MainDetail from "./MainDetail";
import ProfileNavBar from "./ProfileNavBar";
import GamePart from "./GamePart";
import ItemPart from "./ItemPart";
import FarmPart from "./FarmPart";
import EarningPart from "./EarningPart";

export default function Profile() {
  return (
    <div className="w-full">
      <MainDetail />
      <ProfileNavBar />
      <Routes>
        <Route path="/" element={<Navigate to="games" />} />
        <Route path="/games" element={<GamePart />} />
        <Route path="/items" element={<ItemPart />} />
        <Route path="/farm" element={<FarmPart />} />
        <Route path="/earnings" element={<EarningPart />} />
      </Routes>
    </div>
  );
}
