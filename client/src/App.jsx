import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/fonts/fonts.css";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Questionnaire from "./pages/Questionnaire";
import Calendar from "./pages/Calendar";
import Question from "./pages/Question";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}

            <Route path="/quiz" element={<Question />}></Route>
            <Route path="/select-package" element={<ProductPage />}></Route>
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
