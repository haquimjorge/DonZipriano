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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8109431117177!2d-58.40195068477083!3d-34.58364998046472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9e0e97a297%3A0xd5316c35130d25df!2sJos%C3%A9%20Le%C3%B3n%20Pagano%202697%2C%20C1425%20AOA%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1640796368972!5m2!1ses!2sar"
                    width="800"
                    height="750"
                    style={{border:"0"}}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
                <p className="m-2">Av. Alicia Moreau de Justo 1930, C1107AFN CABA</p>
                </div>
                <div className="horariosNosotros">
                  <h2>Horarios:</h2>
                  <p>Lunes a lunes de 8:00 a 23:00 hs.</p>
                  <p>Reservas de 11:00 a 19:00 hs.</p>
                  {/* <p>Lunes	<span className="cerrado">Cerrado</span></p>
                  <p>Martes	20:00 a 23:50</p>
                  <p>Miércoles	20:00 a 23:50</p>
                  <p>Jueves	20:00 a 23:50</p>
                  <p>Viernes	20:00 a 23:50</p>
                  <p>Sábado  20:00 a 23:50 </p>
                  <p>Domingo  20:00 a 23:00 </p> */}
                   <p>Los horarios pueden variar</p>
                </div>
                
        </div>
    </>
  );
};

export default DondeEncontrarnos;
