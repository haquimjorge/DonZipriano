import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import Separator from "../components/Separator";
import gorrochef from "../assets/gorrochef.png";
import pizzanosotros from '../assets/pizzanosotros.png'
import banderaitaliana from '../assets/banderaitaliana.png'

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <div className="nuestraHistoria">
        <div className="internoNuestro">
          <div className="sobreNosotrosTexto">
            <h1 className="tituloSobreNosotros">Nuestra Historia</h1>
            <p>
              {" "}
              Somos dos primos, soñadores, apegados a nuestras raíces,
              apasionados por la cocina. Comenzamos Don Zipriano en 2010,
              nombrandolo en honor a nuestro querido abuelo, quien vino de
              Italia en 1960 y desde pequeños nos transmitio el arte de la
              cocina italiana. Poner en practica estos conocimientos de nuestra
              herencia, y al servicio de nuestros clientes, es nuestra mision.
              En una busqueda constante por ofrecer la mayor calidad posible,
              por ofrecer variados sabores que gusten, llevamos ya mas de 10
              años en el barrio. Ofrecer esta autentica experiencia gastronomica
              Italiana, es un logro posible gracias a el gran equipo coordinado
              para ello, y al cariño que le ponemos dia a dia. "Dar de comer es
              un acto de amor".
            </p>
          </div>
          <div className="divImagenSobreNosotros">
            <img
            className="imagen-historia"
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
            <div className="d-flex align-items-center justify-content-around ">
              <p className="col-8">
                Nacido en Napoli, chef executivo, pizzaiolo napoletano. Brangi
                Hubine llegó a Uruguay por la temporada 2016/2017 con Eatalian
                Style, un emprendimiento gastronómico en La Barra, Punta del
                este con recetas del sud Italia modernizadas, respetando siempre
                los ingredientes y los sabores tradicionales.{" "}
              </p>
              <img className="gorrochef" src={gorrochef} alt="gorrochef" />
            </div>

            <div className="d-flex align-items-center justify-content-around p-2">
              <img className="pizzanosotros" src={pizzanosotros} alt="pizzanosotros" />
              <p className="col-8">
              En el mercado Argentino trabajó como chef ex en FILO restaurante y
              asesorando al grupo A PUNTO sobre la pizza napoletana.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-evenly">
              <p >
              Hoy frente al mando de DonZipriano, difundiendo la verdadera
              cultura de la gastronomía tradicional italiana especialmente del
              sud de Italia sin influencia local. Importando materia prima
              italiana y de temporada logra desarrollar la cocina típica de sus
              abuelos y padres, valorando la tradición y adaptándose al mundo
              actual sin perder identidad y naturaleza. Siguiendo tendencias
              actuales de Italia con atención especial en un trabajo sustentable
              y máximo respeto de las materias primas.
              </p>
              <img className="banderaitaliana" src={banderaitaliana} alt="banderaitaliana" />
            </div>
          
          </div>
        </div>
      </div>
      <Separator />
      <DondeEncontrarnos />
      <Footer />
    </>
  );
};
export default Nosotros;
