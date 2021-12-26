import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
// import Forms from "./components/Forms";

function App() {
  return (
    <>
      {/* <h1>Probando</h1> */}
      <BrowserRouter>
        {/* <ToastContainer autoClose={4000} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservas" element={<Reservas/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
        </Routes>
        {/* <Forms/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

// {
//   /* <Route path="/reservas" element={<Reservas />}/>
//          <Route path="/registro" element={<Registro />}/> */
// }
