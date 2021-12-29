import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
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
              Somos dos primos, soñadores, apegados a nuestras raíces, apasionados por la
              cocina. Comenzamos Don Zipriano en 2010, nombrandolo en honor a nuestro querido
              abuelo, quien vino de Italia en 1960 y desde pequeños nos transmitio el arte de la cocina
              italiana. Poner en practica estos conocimientos de nuestra herencia, y
              al servicio de nuestros clientes, es nuestra mision. En una busqueda
              constante por ofrecer la mayor calidad posible, por ofrecer
              variados sabores que gusten, llevamos ya
              mas de 10 años en el barrio. Ofrecer esta autentica experiencia
              gastronomica Italiana, es un logro posible gracias a el gran
              equipo coordinado para ello, y al cariño que le ponemos dia a dia.
              "Dar de comer es un acto de amor".
            </p>
          </div>
          <div className="divImagenSobreNosotros">
            <img
              src="/assets/donZiprianoSobreNosotrosEdit.png"
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
        <div className="internoNuestro" id="textoChef">
          <div className="divImagenSobreNosotros" id="imagenChef">
            <img src="/assets/brangi.jpg" alt="Imagen del Chef" />
          </div>
          <div className="sobreNosotrosTexto">
            <p> Nacido en Napoli, chef executivo, pizzaiolo napoletano. Brangi Hubine llegó a Uruguay por la temporada 2016/2017 con Eatalian
            Style, un emprendimiento gastronómico en La Barra, Punta del este
            con recetas del sud Italia modernizadas, respetando siempre los
            ingredientes y los sabores tradicionales.
            </p>
            
            <p>En el mercado Argentino
            trabajó como chef ex en FILO restaurante y asesorando al grupo A
            PUNTO sobre la pizza napoletana. Era el principio de lo que hoy en
            día es moda en la capital porteña y el mundo: la difusión del
            concepto de Pizza Napoletana y Pizza Napoletana Contemporánea.
            </p>
            <p> En la
            temporada 2017/2018 abre las puertas de Il Faro da Luigi en José
            Ignacio, siendo un gran éxito como la mejor propuesta gastronómica
            italiana del Este.</p> 
            <p>Con Il Faro comienza la importación de materia
            prima directamente de Italia, ofreciendo así una gastronomía
            respetuosa de los estándar de calidad requeridos por la tradición
            Italiana, junto a la importación de los hornos Grimaldi.</p>
            <p> En la
            temporada 2018/2019 pasó al mando de un restaurante icónico de la
            península: L’ Incanto siguiendo con la misma propuesta gastronómica
            y siendo los primeros de Uruguay en afiliarse a la APN (Asociación
            Pizzaiolo Napoletani). Además del asesoramiento en el mercado
            uruguayo en I’Marangatú, Grupo Don Pepperone, y Almacén de pizza.</p>
            <p> Cada vez se hacía más fuerte el desarrollo de la Pizza Napolitana en
            Sur América, así continuo investigando y asesorando el mercado
            argentino: Orno del Grupo Casa Cavia y Brigata del Gruppo Lowell’s,
            entre otros. Para el 2020 comenzó a dar vida al proyecto NAPUL’E’
            basado principalmente en la propuesta de La pizza Napoletana stg y
            della Pizza Napoletana Contemporánea aprobado siempre por la APN.</p>
            <p>Hoy frente al mando de Napule, difundiendo la verdadera cultura de
            la gastronomía tradicional italiana especialmente del sud de Italia
            sin influencia local. Importando materia prima italiana y de
            temporada logra desarrollar la cocina típica de sus abuelos y
            padres, valorando la tradición y adaptándose al mundo actual sin
            perder identidad y naturaleza. Siguiendo tendencias actuales de
            Italia con atención especial en un trabajo sustentable y máximo
            respeto de las materias primas.</p>
          </div>
        </div>
      </div>
     <Separator />
     <DondeEncontrarnos/>
      <Footer />
    </>
  );
};
export default Nosotros;
