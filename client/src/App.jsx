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
import ReviewPage from "./pages/ReviewPage";
import QuestionDe from "./pages/QuestionDe";
import QuestionEs from "./pages/QuestionEs";
import NotFound from "./pages/NotFound";
import Master from "./pages/Master";

const WrappedApp = () => {
  const location = useLocation();
  const isGerman = location.pathname.startsWith("/de");
  const isSpanish = location.pathname.startsWith("/es");
  const lang = isSpanish ? "es" : "en";

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  return (
    <div className="App w-full h-screen">
      <NavBar lang={lang} />
      <Routes>
        <>
          {/* Home page routes */}
          <Route path="/" element={<Home lang={lang} />}></Route>
          <Route path="/es" element={<Home lang={lang} />}></Route>
          <Route path="/de" element={<Home lang={lang} />}></Route>

          {/* Questionnaire Routes */}
          <Route path="/quiz" element={<Question lang={lang} />}></Route>
          <Route path="/es/quiz" element={<QuestionEs lang={lang} />}></Route>
          <Route path="/de/quiz" element={<QuestionDe lang={lang} />}></Route>

          {/* Master Class Routes */}
          <Route path="/master" element={<Master lang={lang} />}></Route>
          <Route path="/es/master" element={<Master lang={lang} />}></Route>

          {/* Product Page Routes */}
          <Route
            path="/select-package"
            element={<ProductPage lang={lang} />}
          ></Route>
          <Route
            path="/es/select-package"
            element={<ProductPage lang={lang} />}
          ></Route>
          <Route
            path="/de/select-package"
            element={<ProductPage lang={lang} />}
          ></Route>

          {/* Review Page Routes */}
          <Route path="/reviews" element={<ReviewPage lang={lang} />}></Route>
          <Route path="/es/reviews" element={<ReviewPage lang={lang} />}></Route>

          <Route
            path="/de/reviews"
            element={<ReviewPage lang={lang} />}
          ></Route>

          {/* Default Route Handler */}
          <Route path="*" element={<NotFound lang={lang} />} />
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
