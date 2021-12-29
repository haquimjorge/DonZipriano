import React from "react";

const Mesas = ({ table }) => {
  console.log(table);

  return (
    <>
      <div className="reservas-title">
        <h2>Reservas</h2>
        <h3>- Según Protocolo Covid 19 -</h3>
      </div>
      <div className="mesas-container">
        <div className="suelo-mesas">
          {table.map((table) => {
            return (
              <div className="contenedor-mesa">
                <img
                  className="mesa-disponible"
                  src="/assets/mesadisponible.png"
                  alt="Mesa Disponible"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mesas;
