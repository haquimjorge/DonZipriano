import React from "react";

const MainChef = () => {
  return (
    <>
      <div className="chef-content hero">
        <div className="hero-content chef-container">
          <div className="menu-container">
            <img id="chef-pic" src="/assets/menudz.png" alt="Imagen del Chef" />

            <h1 className="benvenuti-tittle">IL NOSTRO MENU</h1>
          </div>
        </div>
        <div className="hero-banner chef-banner">
          <img id="chef-pic" src="/assets/chefdz.png" alt="Imagen del Chef" />
          <h2 className="nombre-chef">Brangi Hubine</h2>
          <div className="subtittle-brangi">
          <h4>
            NAPOLETANO NON SI È PER LA RESIDENZA MA PER SENSO D'APPARTENENZA
          </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainChef;
