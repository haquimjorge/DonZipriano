import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Separator from "../components/Separator";

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <div className="nuestraHistoria">
        {/* <div className="tituloSobreNosotros"> */}
          {/* <h1>Nuestra Historia</h1> */}
        {/* </div> */}
        <div className="internoNuestro">
          <div className="sobreNosotrosTexto">
          <h1  className="tituloSobreNosotros" >Nuestra Historia</h1>
            <p>
              {" "}
              Dos primos, soñadores, apegados a sus raíces, apasionados por la
              cocina, comenzaron Don Zipriano en 2010, nombrandolo en honor a su
              abuelo, quien desde pequeños les transmitio el arte de la cocina
              italiana. Poner en practica estos conocimientos de su herencia y
              al servicio de sus clientes es su mision. En una busqueda
              constante por ofrecer la mayor calidad posible, por ofrecer
              variados sabores que gusten, los primos Jose y Lucrecia llevan ya
              mas de 10 años en el barrio. Ofrecer esta autentica experiencia
              gastronomica Italiana, es un logro posible gracias a el gran
              equipo coordinado para ello.
            </p>
          </div>
          <div className="divImagenSobreNosotros">
            <img
              src="/assets/donZiprianoSobreNosotros.png"
              alt="Imagen de don zipriano"
            />
          </div>
        </div>
      </div>
      <Separator />
      <div className="nuestroChef">
        <div>
          <h1>Nuestro Chef</h1>
        </div>
        <div className="internoNuestro">
          <div className="divImagenSobreNosotros">
            <img src="/assets/chefdz.png" alt="Imagen del Chef" />
          </div>
          <div className="sobreNosotrosTexto">
            Nacido en Napoli, chef executivo, pizzaiolo napoletano. Luigi
            Iavarone llegó a Uruguay por la temporada 2016/2017 con Eatalian
            Style, un emprendimiento gastronómico en La Barra, Punta del este
            con recetas del sud Italia modernizadas, respetando siempre los
            ingredientes y los sabores tradicionales. En el mercado Argentino
            trabajó como chef ex en FILO restaurante y asesorando al grupo A
            PUNTO sobre la pizza napoletana. Era el principio de lo que hoy en
            día es moda en la capital porteña y el mundo: la difusión del
            concepto de Pizza Napoletana y Pizza Napoletana Contemporánea. En la
            temporada 2017/2018 abre las puertas de Il Faro da Luigi en José
            Ignacio, siendo un gran éxito como la mejor propuesta gastronómica
            italiana del Este. Con Il Faro comienza la importación de materia
            prima directamente de Italia, ofreciendo así una gastronomía
            respetuosa de los estándar de calidad requeridos por la tradición
            Italiana, junto a la importación de los hornos Grimaldi. En la
            temporada 2018/2019 pasó al mando de un restaurante icónico de la
            península: L’ Incanto siguiendo con la misma propuesta gastronómica
            y siendo los primeros de Uruguay en afiliarse a la APN (Asociación
            Pizzaiolo Napoletani). Además del asesoramiento en el mercado
            uruguayo en I’Marangatú, Grupo Don Pepperone, y Almacén de pizza.
            Cada vez se hacía más fuerte el desarrollo de la Pizza Napolitana en
            Sur América, así continuo investigando y asesorando el mercado
            argentino: Orno del Grupo Casa Cavia y Brigata del Gruppo Lowell’s,
            entre otros. Para el 2020 comenzó a dar vida al proyecto NAPUL’E’
            basado principalmente en la propuesta de La pizza Napoletana stg y
            della Pizza Napoletana Contemporánea aprobado siempre por la APN.
            Hoy frente al mando de Napule, difundiendo la verdadera cultura de
            la gastronomía tradicional italiana especialmente del sud de Italia
            sin influencia local. Importando materia prima italiana y de
            temporada logra desarrollar la cocina típica de sus abuelos y
            padres, valorando la tradición y adaptándose al mundo actual sin
            perder identidad y naturaleza. Siguiendo tendencias actuales de
            Italia con atención especial en un trabajo sustentable y máximo
            respeto de las materias primas.
          </div>
        </div>
      </div>
      {/* <Separator />
      <div className="nuestraCocina">
                <div>
                <h1>Nuestra Cocina</h1>
                </div>
         <div className="internoNuestro">
                <div>

                </div>
         </div>
      </div> */}
      <Footer />
    </>
  );
};
export default Nosotros;
