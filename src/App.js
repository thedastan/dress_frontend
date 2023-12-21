import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CategoryDetail from "./pages/category-detail/CategoryDetail";
import DressDetail from "./pages/dress-detail/DressDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-detail/:name/:id" element={<CategoryDetail />} />
        <Route path="/dress-detail/:id" element={<DressDetail />} />
      </Routes>
    </>
  );
}

export default App;
