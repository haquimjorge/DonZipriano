import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormEventos from "../components/FormEventos";

const Eventos = () => {
  return (
    <>
      <NavBar />
      <div class='wave-top'></div>
      <h1 className="tituloEventos">Consultas por eventos</h1>
      <div className="contenedorEventos">
        <div className="contenedorDescripcionEventos">
          <p>
            Don Zipriano es la sede ideal para eventos privados y corporativos!
            Ofreciendo un extenso salon contamos con mas de 25 mesas, cocina, equipo de sonido, y
            staff disponible para servir comida. Tambien esta la posibilidad de contratar a nuestro chef y su equipo de cocina, entre quienes esta incluido el barman con una carta de mas de 50 tragos.
             Hacemos todo tipo de eventos especiales desde encuentros de negocios, recepciones, Bar Mitzvahs, casamientos, fiestas de 15, etc.</p>
             <p>Estamos disponibles para hacer reuniones de planeamiento y hacer un menu a gusto del cliente para el evento.</p>
             <p>Complete el siguiente formulario y nos contactaaremos brevemente via mail, o contactenos a +54 11 3540-2027 (Whatsapp) / 4672-3089 (telefono del local)</p>
        </div>
        <div className="contenedorLogoEventos">
          <img src="/assets/DonZLogo.png" alt="Logo Don Zipriano" />
        </div>
      </div>
      <div className="contenedorFormEventos">
      <FormEventos />
      </div>
      <Footer />
    </>
  );
};

export default Eventos;
