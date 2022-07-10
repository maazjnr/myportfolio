import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/pages";
import SocialMedia from "./components/SocialMedia";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Pages />
      <SocialMedia />
      </BrowserRouter>
    </div>
  );
}

export default App;
