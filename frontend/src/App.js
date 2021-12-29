import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Eventos from "./pages/Eventos";
import Nosotros from "./pages/Nosotros";
// import Forms from "./components/FormEventos";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import React, { useEffect } from "react";
import Account from "./pages/Account";
import userActions from "./redux/action/userActions";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Verify from './pages/Verify'
import Admin from './pages/Admin'
import withRouter from "./utilities/withRouter";

const VerifyDinamic = withRouter(Verify)

function App(props) {
  const { authUser } = props;
  const token = localStorage.getItem("token");
  console.log('este es el usuario actual')
  if(props.user){

      console.log(props.user.role)
  }

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

          {props.user && props.user.role === "Admin" && <Route path="/admin" element={<Admin />}/>}
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="*" element={<Home />} />
          <Route path="/account" element={<Account />}/>
          <Route path="/verificacion/:uniqueString" element={<VerifyDinamic />}/>
        </Routes>
        {/* <Forms/> */}
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user
    }
}


const mapDispatchToProps = {
  authUser: userActions.authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// {
//   /* <Route path="/reservas" element={<Reservas />}/>
//          <Route path="/registro" element={<Registro />}/> */
// }
