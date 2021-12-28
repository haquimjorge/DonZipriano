import React from "react";
import "animate.css";

const Hero = () => {
  return (
    <div>
      <div className="restaurant-content hero">
        <div className="hero-content">
          <h1 className="benvenuti-tittle maquina-escribir-benvenuti">BENVENUTI</h1>
          <h2 className="main-text-hero">
          Deléitate con la cocina italiana, que se sirve con la amigable hospitalidad de Buenos Aires.
          Dirigido por sus propios dueños, la familia Zipriano, dinastía italiana de restaurantes por décadas, combina servicio atento con un menú amplio, buenos vinos y los ingredientes más frescos.
          </h2>
        </div>
        <div className="hero-banner">
          <img
            className="animate__animated animate__flash"
            id="logo-hero"
            src="/assets/DonZLogo.png"
            alt="Logo Don Zipriano"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
