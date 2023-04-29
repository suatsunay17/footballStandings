import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { PremierLeague } from "./components/Leagues/PremierLeague/PremierLeague";
import { LaLiga } from "./components/Leagues/LaLiga/LaLiga";
import { Bundesliga } from "./components/Leagues/Bundesliga/Bundesliga";
import { SerieA } from "./components/Leagues/SerieA/SerieA";
import { Ligue1 } from "./components/Leagues/Ligue1/Ligue1";
import { PremDetails } from "./components/ClubDetails/PremDetails";
import { LaLigaDetails } from "./components/ClubDetails/LaLigaDetails";
import { BundesDetails } from "./components/ClubDetails/BundesDetails";
import { SerieADetails } from "./components/ClubDetails/SerieADetails";
import { Ligue1Details } from "./components/ClubDetails/Ligue1Details";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/premier-league/:teamId" element={<PremDetails />} />
        <Route path="/la-liga" element={<LaLiga />} />
        <Route path="/la-liga/:teamId" element={<LaLigaDetails />} />
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/bundesliga/:teamId" element={<BundesDetails />} />
        <Route path="/serie-a" element={<SerieA />} />
        <Route path="/serie-a/:teamId" element={<SerieADetails />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/ligue-1/:teamId" element={<Ligue1Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
