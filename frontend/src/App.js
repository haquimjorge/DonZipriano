import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
// import Menu from "./pages/Menu";
import Home from "./pages/Home";

// import Forms from "./components/Forms";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      {/* <h1>Probando</h1> */}
      <BrowserRouter>
        {/* <ToastContainer autoClose={4000} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/menu" element={<Menu/>}/> */}
          <Route path="/signin" element={<SignIn />} exact />
          
         
          <Route path="/form" element={<Forms />} exact />
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
