import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import HomePage from "@/pages/home";
import GamePlay from "@/pages/gameplay";
import MarketSearchPage from "@/pages/marketsearch";
import MarketDetailPage from "@/pages/marketdetail";
import Profile from "@/pages/profile";
import StakingPage from "@/pages/staking";

import HeaderBar from "@/containers/HeaderBar";
import NavBar from "@/containers/NavBar";
import FooterBar from "@/containers/FooterBar";

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <div className="w-full pt-[75px] pl-[50px]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gameplay" element={<GamePlay />} />
          <Route path="/marketsearch" element={<MarketSearchPage />} />
          <Route path="/marketdetail" element={<MarketDetailPage />} />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="*" element={"Comming soon."} />
        </Routes>
      </div>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
