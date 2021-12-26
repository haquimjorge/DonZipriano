import React from "react";

const CardMenu = ({ meal }) => {
  console.log(meal);
  return (
    <>
      <div className="card-menu-container">
        <div className="card-menu">
          <div className="title-menu-container">
            <div className="logo-menu">
              <img
                id="logo-nav"
                src="/assets/DonZLogo.png"
                alt="Logo Don Zipriano"
              />
            </div>
            <div className="titulo-menu">
              <h1>Menu - Don Zipriano</h1>
            </div>
          </div>
          <div className="entradas">
            <h4>Entradas</h4>
            <div className="platos-entradas"></div>
          </div>
          <div className="plato-principal">
            <h4>Platos Principales</h4>
          </div>
          <div className="postre">
            <h4>Postres</h4>
          </div>
          <div className="bebestible">
            <h4>Bebidas</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
