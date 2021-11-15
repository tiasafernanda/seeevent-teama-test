import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchEvent from "../pages/searchEvent/SearchEvent";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<SearchEvent />} />
      </Routes>
    </div>
  );
}
