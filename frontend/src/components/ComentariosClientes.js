import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";



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
 
  return (
    <>
        <div className="containerCarousel">
            <Carousel>
        {arrayComentarios.map((comentario) => {
            return(
            <Carousel.Item className="col-5" interval={1000}>
            <Row xs={1} md={2} className="g-4">
            <Col>
                    <Card className="cardcarousel">
                         <Card.Img
                          variant="top"
                          className="imagenUserComentarios"
                          variant="top"
                          src={comentario.user.imagenUser}
                        />
                        <Card.Body>
                          <Card.Title  className="text-dark text-sm">{comentario.user.nombre} {comentario.user.apellido}</Card.Title>
                          <Card.Title className="text-dark">{comentario.comentario}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                {/* <div>
                <img
                className="d-block w-100 imagenUserComentarios"
                src={comentario.user.imagenUser}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                <h4>{`${comentario.user.nombre} ${comentario.user.apellido}:`}</h4>
                <p>{comentario.comentario}</p>
                </Carousel.Caption> */}
               </Row>

            </Carousel.Item>            
        )})}
            </Carousel>
        </div>

    </>)
};

export default ComentariosClientes;


//   return (
//     <>
//         <div>
//         <Carousel interval={3000} onSelect={handleSelect}>
//           {arrayComentarios.from({ length: props.cities.length / imagesPerSlide }).map(
//             (_, mapIndex) => (
//               <Carousel.Item key={mapIndex} className="p-2">
//                 <Row xs={1} sm={2} md={2} lg={4} className="g-4">
//                   <CarrouselPack
//                     list={props.cities}
//                     index={currentIndex}
//                     imgPerSlide={imagesPerSlide}
//                   />
//                   <span className="invisible">
//                     {(currentIndex += imagesPerSlide)}
//                   </span>
//                 </Row>
//               </Carousel.Item>
//             )
//           )}
//         </Carousel>
//         </div>
//     </>
//   );


//   return (
//     <>
//     <div>
//     <h1 className="mostpop">Opiniones de nuestros clientes</h1>
//       <Carousel className="carousel">
//         {arrayComentarios.map((comentario) => {
//           return (
//             <Carousel.Item>
//               <Row xs={1} md={2} className="g-4">
//                      <Col>
//                       <Card className="cardcarousel">
//                         <Card.Img
//                           variant="top"
//                           className="imagencard"
//                           variant="top"
//                           src={comentario.user.imagenUser}
//                         />
//                         <Card.Body>
//                           <Card.Title>{comentario.comentario}</Card.Title>
//                           <Card.Title>{comentario.user.nombre} {comentario.user.apellido}</Card.Title>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//               </Row>
//             </Carousel.Item>
//           );
//         })}
//       </Carousel>
//       </div>
//     </>
//   );