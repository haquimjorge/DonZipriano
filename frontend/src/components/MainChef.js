import React from "react";
import {Link} from "react-router-dom"

const MainChef = () => {
  return (
    <>
      <div className="chef-content hero">
        <div className="hero-content chef-container">
          <div className="menu-container">
            <img id="chef-pic" src="/assets/menudz.png" alt="Imagen del menu" />
            <Link to="/Menu"><h1 className="benvenuti-tittle-nostro"> IL NOSTRO MENU</h1></Link>
            
          </div>
        </div>
        <div className="hero-banner chef-banner">
          <img id="chef-pic" src="/assets/chefdz.png" alt="Imagen del Chef" />
          <h2 className="nombre-chef">Brangi Hubine</h2>
          <div className="subtittle-brangi">
          <h4>
            "Napoletano non si è per la residenza ma per senso d' appartenenza"
          </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainChef;
