import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Likes from "./Likes";
import "animate.css";

const CardMenu = ({ meal }) => {

  const mealEntradas = meal.filter((meal) => meal.timeFood === "Entrada");

  const mealPlatosPrincipales = meal.filter(
    (meal) => meal.timeFood === "Plato Principal"
  );
  const mealPostres = meal.filter((meal) => meal.timeFood === "Postre");
  const mealBebidas = meal.filter((meal) => meal.timeFood === "Bebestible");

  const [value, setValue] = useState(1000);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="card-menu-container">
        <div className="card-menu animate__animated animate__fadeInLeft">
          <div className="title-menu-container">
            <div className="titulo-menu">
              <h1>Menu </h1>
            </div>
          </div>
          <div className="entradas">
            <h4>Entradas</h4>
            <div className="slider-container-main">
              <div className="slider-container">
                <Slider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuos-slider"
                  min={650}
                  max={1000}
                  valueLabelDisplay="auto"
                  sx={{ color: "#b2102f" }}
                />
              </div>
            </div>
            <div className="platos-entradas">
              {mealEntradas
                .filter((meal) => meal.price <= value)
                .map((entrada) => {
                  return (
                    <div className="card-food-container animate__animated animate__shakeX">
                      <h5>{entrada.name}</h5>
                      <div className="food-content-container ">
                        <div className="card-food-content">
                          <p>{entrada.description}</p>
                          <p>{entrada.type}</p>
                          <p className="precios-menu">$ {entrada.price}</p>
                        </div>
                        <div className="divlikes">
                          <Likes className="like" meal={entrada} />
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
            <div className="slider-container-main">
              <div className="slider-container"></div>
            </div>
            <div className="platos-entradas">
              {mealPlatosPrincipales
                .filter((meal) => meal.price <= value)
                .map((plato) => {
                  return (
                    <div className="card-food-container">
                      <h5>{plato.name}</h5>
                      <div className="food-content-container">
                        <div className="card-food-content">
                          <p>{plato.description}</p>
                          <p>{plato.type}</p>
                          <p className="precios-menu">$ {plato.price}</p>
                        </div>
                        <div className="divlikes">
                          <Likes className="like" meal={plato} />
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
            <h4 className="title-postres">Postres</h4>
            <div className="slider-container-main">
              <div className="slider-container"></div>
            </div>
            <div className="platos-entradas">
              {mealPostres
                .filter((meal) => meal.price <= value)
                .map((postre) => {
                  return (
                    <div className="card-food-container">
                      <h5>{postre.name}</h5>
                      <div className="food-content-container">
                        <div className="card-food-content">
                          <p>{postre.description}</p>
                          <p>{postre.type}</p>
                          <p className="precios-menu">$ {postre.price}</p>
                        </div>
                        <div className="divlikes">
                          <Likes className="like" meal={postre} />
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
            <div className="slider-container-main">
              <div className="slider-container"></div>
            </div>
            <div className="platos-entradas">
              {mealBebidas
                .filter((meal) => meal.price <= value)
                .map((bebida) => {
                  return (
                    <div className="card-food-container">
                      <h5>{bebida.name}</h5>
                      <div className="food-content-container">
                        <div className="card-food-content">
                          <p>{bebida.description}</p>
                          <p>{bebida.type}</p>
                          <p className="precios-menu">$ {bebida.price}</p>
                        </div>
                        <div className="divlikes">
                          <Likes className="like" meal={bebida} />
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
