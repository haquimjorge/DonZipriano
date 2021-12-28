import React from "react";
import { Carousel, Row } from "react-bootstrap";
import CardComentarios from './CardComentarios'



let arrayComentarios = [
  
    {  
        comentario: "Me gusto la calidad de la pasta y la salsa, lo recomiendo!",
        user:{ nombre: "Marcelo",
        apellido: "Labraña",
            imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}
            
        
    },
    {  
        comentario: "muy buen servicio, buena carta de vinorem impsum",
        user:{ nombre: "Jorge",
        apellido: "Haquim",
        imagenUser: 'https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1571829929929-XRB9VF9242RNUKBBX55E/DwayneBrownStudio_OttawaLinkedInHeadshots_ClaireBrown.jpg?format=1000w'}
        
    },
{  
   comentario: "Muy buena la calidad de la pizza.",
   user:{ nombre: "Gabriel ",
   apellido: "Cejas",
   imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}


},
{  
   comentario: "No me gusto el postre, pero los camareros muy buena onda.",
   user:{ nombre: "Esteban",
   apellido: "Maldonado",
   imagenUser: 'https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1571829929929-XRB9VF9242RNUKBBX55E/DwayneBrownStudio_OttawaLinkedInHeadshots_ClaireBrown.jpg?format=1000w'}

 
},
    {  
        comentario: "muy buen servicio, buena carta de vinorem impsum",
        user:{ nombre: "Kevin",
        apellido: "Von Hausen",
        imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}

        
    },
    {  
        comentario: "muy buen servicio, buena carta de vinorem impsum",
        user:{ nombre: "Micaela",
        apellido: "Zampone",
        imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}

        
    },
{  
   comentario: "muy buen servicio, buena carta de vinorem impsum",
   user:{ nombre: "Jorge",
   apellido: "Haquim",
   imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}

 
},
{  
   comentario: "muy buen servicio, buena carta de vinorem impsum",
   user:{ nombre: "Jorge",
   apellido: "Haquim",
   imagenUser: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg'}

 
},
];



const ComentariosClientes = () => {
 
    const handleSelect = (_, e) => {
        if (e !== undefined) {
          e.target.className.includes("next")
            ? currentIndex >= arrayComentarios.length
              ? (currentIndex = 0)
              : (currentIndex = currentIndex + imagesPerSlide)
            : currentIndex <= 0
            ? (currentIndex = arrayComentarios.length - imagesPerSlide)
            : (currentIndex = currentIndex - imagesPerSlide);
        }
      };
    

    const imagesPerSlide = 2;
    let currentIndex = 0;

  return (
    <>
        <Carousel onSelect={handleSelect} interval={3000}>
          {Array.from({ length: arrayComentarios.length / imagesPerSlide  }).map(
            (_, mapIndex) => (
              <Carousel.Item key={mapIndex} className="p-2">
                <Row xs={1} sm={1} md={1} lg={2} className="g-4">
                  <CardComentarios
                    list={arrayComentarios}
                    index={currentIndex}
                    imgPerSlide={imagesPerSlide}
                  />
                  <span className="invisible">
                    {(currentIndex += imagesPerSlide)}
                  </span>
                </Row>
              </Carousel.Item>
            )
          )}
        </Carousel>
              
    </>)
};

export default ComentariosClientes;

