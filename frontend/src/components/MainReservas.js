import React from "react";
import {Link} from "react-router-dom"

const MainReservas = () => {
  return (
    <>
      <div className="reservas-content hero container">

      <Link to="/Reservas"><h1 className="pasta-title hsyreservas">HORARIOS Y RESERVAS</h1></Link>
        <div className="hero-content chef-container">
          <div className="reservas-container">
            <h2 className="benvenuti-tittle">Restaurante:</h2>
            <p>
            lunes a lunes de 8:00 a 23:00 hs.
            </p>
            <p>
            Reservas de 11:00 a 19:00 hs.
            </p>
          </div>
        </div>
        <div className=" chef-banner">
        <div className="reservas-container">
            <h2 className="benvenuti-tittle" >Take Away de Pizza:</h2>
            <p>
            lunes a lunes de 8:00 a 23:00 hs.
            </p>
            <p className="pb-5">
            Hacé tu pedido por <a target="_blank" href="https://api.whatsapp.com/send?phone=1135402027&text=Me%20interesa%20contactarme%20con%20alguien%20del%20restaurant">Whatsapp</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainReservas;
