import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NounsPage from "./pages/NounsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nouns" element={<NounsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
