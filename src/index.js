import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apropos from "./a-propos.jsx";
import Contact from "./contact.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* mise en place du router */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
