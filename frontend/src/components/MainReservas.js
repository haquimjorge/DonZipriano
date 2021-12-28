import React from "react";

const MainReservas = () => {
  return (
    <>
      <div className="reservas-content hero container">
        <h1 className="pasta-title hsyreservas">HORARIOS Y RESERVAS</h1>
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
            Hacé tu pedido por WhatsApp
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainReservas;
