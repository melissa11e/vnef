import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Registrar from "../pages/Registrar/Registrar";
import Consultar from "../pages/Consultar/Consultar";
import MenuRetirada from "../pages/MenuRetirada/MenuRetirada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/registrar"
          element={<Registrar />}
        />

        <Route
          path="/menu-retirada"
          element={<MenuRetirada />}
        />
        
        <Route
          path="/consultar"
          element={<Consultar />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;