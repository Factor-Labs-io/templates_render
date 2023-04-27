import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  NounsPage,
  FinsPage,
  Template,
  PFPComparepage,
  JuicyJuPage,
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
      </Routes>
    </Router>
  );
}

export default App;
