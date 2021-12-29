import React from "react";

const DondeEncontrarnos = ({ meal }) => {



  return (
    <>

       <div className="contenedorMapa">
            <div>
                <h1>Donde encontrarnos:</h1>
            </div>
            <div className="contenedorIframe" >
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5678.737030154669!2d8.449736927232225!3d44.63038461639959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2d5c79bab6901%3A0xa01d996aa43f2e66!2s15010%20Cavatore%2C%20Alessandria%2C%20Italia!5e0!3m2!1ses!2sar!4v1640359343611!5m2!1ses!2sar"
                    width="800"
                    height="750"
                    style={{border:"0"}}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
                </div>
        </div>
    </>
  );
};

export default DondeEncontrarnos;
