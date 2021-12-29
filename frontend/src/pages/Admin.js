import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <>
      <NavBar />
      <h2>pagina de admin</h2>
      <p>aqui tendria que haber un fetcheo a las comidas</p>
      <p>y un diseño bonito como de card, para modificar precio, nombre, descripcion e imagen de menu</p>
      <Footer />
    </>
  );
};

export default Admin;