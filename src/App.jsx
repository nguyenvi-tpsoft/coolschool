import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GioiThieu from "./components/GioiThieu";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
      </Routes>
    </>
  );
}
export default App;
