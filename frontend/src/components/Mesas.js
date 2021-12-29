import React from "react";
import { NavLink } from "react-router-dom";

const Mesas = ({ table, user }) => {
  console.log(table);
  console.log(user)

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

                {(table.availability||(user && (user.email==table.email) ) )?
                  <NavLink className="tables-link" to={`/tables/${table._id}`}>


                    <img
                      onClick={() => console.log(table._id)}
                      className="mesa-disponible"
                      src="/assets/mesadisponible.png"
                      alt="Mesa Disponible"
                    />

                  </NavLink>
                  :<img 
                  className="mesa-disponible"
                  src="/assets/mesanodisponible.png"
                  alt="Mesa No Disponible"
                  />
                }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mesas;
