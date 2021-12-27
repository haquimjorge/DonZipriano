import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Forms from "./components/Forms";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import userActions from "./redux/action/userActions";
import { connect } from "react-redux";

function App(props) {
  const { authUser } = props;
  const token = localStorage.getItem("token");
  console.log(token? 'true':'false')

  useEffect(() => {
    if (token) {
      authUser();
    }
  }, [authUser,token]);
  return (
    <>
      {/* <h1>Probando</h1> */}
      <BrowserRouter>
        {/* <ToastContainer autoClose={4000} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/menu" element={<Menu/>}/> */}
          {!token? <Route path="/ingresar" element={<SignIn />} exact /> : '' }
          {!token? <Route path="/registrarse" element={<SignIn />} exact /> : '' }
          
          <Route path="/form" element={<Forms />} exact />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {/* <Forms/> */}
      </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = {
  authUser: userActions.authUser,
};

export default connect(null, mapDispatchToProps)(App);

// {
//   /* <Route path="/reservas" element={<Reservas />}/>
//          <Route path="/registro" element={<Registro />}/> */
// }
