import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./assets/fonts/fonts.css";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Questionnaire from "./pages/Questionnaire";
import Calendar from "./pages/Calendar";
import Question from "./pages/Question";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { initMetaPixel, trackPageView } from "./api/FacebookPixel";

const WrappedApp = () => {
  const location = useLocation();

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  return (
    <div className="App w-full h-screen">
      <NavBar />
      <Routes>
        <>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}

          <Route path="/quiz" element={<Question />}></Route>
          <Route path="/select-package" element={<ProductPage />}></Route>
        </>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
  );
}

export default App;
