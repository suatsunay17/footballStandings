import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { PremierLeague } from "./components/Leagues/PremierLeague/PremierLeague";
import { LaLiga } from "./components/Leagues/LaLiga/LaLiga";
import { Bundesliga } from "./components/Leagues/Bundesliga/Bundesliga";
import { SerieA } from "./components/Leagues/SerieA/SerieA";
import { Ligue1 } from "./components/Leagues/Ligue1/Ligue1";
import { Footer } from "./components/Footer/Footer";
import { ClubDetails } from "./components/ClubDetails/ClubDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/la-liga" element={<LaLiga />} />
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/serie-a" element={<SerieA />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/details/:teamId" element={<ClubDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
