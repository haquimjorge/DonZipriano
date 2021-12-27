import React from "react";
import "animate.css";

const CardMenu = ({ meal }) => {
  console.log(meal);

  const mealEntradas = meal.filter((meal) => meal.timeFood === "Entrada");
  const mealPlatosPrincipales = meal.filter(
    (meal) => meal.timeFood === "Plato Principal"
  );
  const mealPostres = meal.filter((meal) => meal.timeFood === "Postre");
  const mealBebidas = meal.filter((meal) => meal.timeFood === "Bebestible");

  console.log(mealEntradas);
  console.log(mealPlatosPrincipales);
  console.log(mealPostres);
  console.log(mealBebidas);

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
            <div className="platos-entradas">
              {mealEntradas.map((entrada) => {
                return (
                  <div className="card-food-container animate__animated animate__backInLeft">
                    <h5>{entrada.name}</h5>
                    <div className="food-content-container ">
                      <div className="card-food-content">
                        <p>{entrada.description}</p>
                        <p>{entrada.type}</p>
                        <p className="precios-menu">$ {entrada.price}</p>
                      </div>
                      <div
                        className="card-food-pic"
                        style={{
                          backgroundImage: `URL(${entrada.image})`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="plato-principal">
            <h4>Platos Principales</h4>
            <div className="platos-entradas">
              {mealPlatosPrincipales.map((plato) => {
                return (
                  <div className="card-food-container">
                    <h5>{plato.name}</h5>
                    <div className="food-content-container">
                      <div className="card-food-content">
                        <p>{plato.description}</p>
                        <p>{plato.type}</p>
                        <p className="precios-menu">$ {plato.price}</p>
                      </div>
                      <div
                        className="card-food-pic"
                        style={{
                          backgroundImage: `URL(${plato.image})`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="postre">
            <h4>Postres</h4>
            <div className="platos-entradas">
              {mealPostres.map((postre) => {
                return (
                  <div className="card-food-container">
                    <h5>{postre.name}</h5>
                    <div className="food-content-container">
                      <div className="card-food-content">
                        <p>{postre.description}</p>
                        <p>{postre.type}</p>
                        <p className="precios-menu">$ {postre.price}</p>
                      </div>
                      <div
                        className="card-food-pic"
                        style={{
                          backgroundImage: `URL(${postre.image})`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bebestible">
            <h4>Bebidas</h4>
            <div className="platos-entradas">
              {mealBebidas.map((bebida) => {
                return (
                  <div className="card-food-container">
                    <h5>{bebida.name}</h5>
                    <div className="food-content-container">
                      <div className="card-food-content">
                        <p>{bebida.description}</p>
                        <p>{bebida.type}</p>
                        <p className="precios-menu">$ {bebida.price}</p>
                      </div>
                      <div
                        className="card-food-pic"
                        style={{
                          backgroundImage: `URL(${bebida.image})`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
