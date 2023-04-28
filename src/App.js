import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  NounsPage,
  FinsPage,
  Template,
  PFPComparepage,
  JuicyJuPage,
  SushiPage,
  HTFTPage,
  CycloPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/remix" element={<HomePage />} />
        <Route path="/fins" element={<FinsPage />} />
        <Route path="/nouns" element={<NounsPage />} />
        <Route path="/pfpcompare" element={<PFPComparepage />} />
        <Route path="/juicyju" element={<JuicyJuPage />} />
        <Route path="/sushi" element={<SushiPage />} />
        <Route path="/cyclo" element={<CycloPage />} />
        <Route path="/htft" element={<HTFTPage />} />
      </Routes>
    </Router>
  );
}

export default App;
