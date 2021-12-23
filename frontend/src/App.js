import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1>Probando</h1>
      <BrowserRouter>
        {/* <ToastContainer autoClose={4000} /> */}
        {/* <Routes>
         <Route path="/" element={<Home />} exact/>
         <Route path="/menu" element={<Menu/>}/>
         
    </Routes>  */}
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/reservas" element={<Reservas />}/>
         <Route path="/registro" element={<Registro />}/> */
}
