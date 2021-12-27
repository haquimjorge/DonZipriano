import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Eventos from "./pages/Eventos";
import Nosotros from "./pages/Nosotros";
// import Forms from "./components/FormEventos";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import userActions from "./redux/action/userActions";
import { connect } from "react-redux";

function App(props) {
  const { authUser } = props;
  const token = localStorage.getItem("token");
  console.log(token ? "true" : "false");

  useEffect(() => {
    if (token) {
      authUser();
    }
  }, [authUser, token]);
  return (
    <>
      {/* <h1>Probando</h1> */}
      <BrowserRouter>
        {/* <ToastContainer autoClose={4000} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/menu" element={<Menu/>}/> */}
          {!token ? <Route path="/ingresar" element={<SignIn />} exact /> : ""}
          {!token ? (
            <Route path="/registrarse" element={<SignUp />} exact />
          ) : (
            ""
          )}

<<<<<<< HEAD
=======
          {/* <Route path="/form" element={<Forms />} exact /> */}
>>>>>>> 6cf3cdb33312240813bd2f9f5a02011e3dfbc93d
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/eventos" element={<Eventos/>} />
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
