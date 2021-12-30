import React from "react";

const DondeEncontrarnos = ({ meal }) => {



  return (
    <>

       <div className="contenedorMapa">
            <div>
                <h2>Donde encontrarnos:</h2>
            </div>
            <div className="contenedorIframe" >
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.319888104349!2d-58.367169184650294!3d-34.621355665938815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb96756ef42b%3A0xe81b5b162482c0cf!2sMindHub!5e0!3m2!1ses-419!2sar!4v1640796919692!5m2!1ses-419!2sar"
                    width="800"
                    height="750"
                    style={{border:"0"}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <p className="m-2">Av. Alicia Moreau de Justo 1930, C1107AFN CABA</p>
                </div>
                <div className="horariosNosotros">
                  <h2>Horarios:</h2>
                  <p>Martes a Domingo de 20hs a 01hs.</p>
                  <p>Lunes cerrado</p>
                  <p>Reservas de 11:00 a 19:00 hs.</p>
                  
  
                </div>
                
        </div>
    </>
  );
};

export default DondeEncontrarnos;
