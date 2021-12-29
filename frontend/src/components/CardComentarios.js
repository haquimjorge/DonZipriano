import React from "react";
import { Card, Col } from "react-bootstrap";



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





const CardComentarios = (props) => {
    
    const {imgPerSlide, index} = props
    return (
    <>
       {arrayComentarios.slice(index, index + imgPerSlide).map((comentario) => (
        <Col key={comentario.user.nombre}>
          <Card className="d-flex cardComentarios wrap">
            {/* <Card.ImgOverlay> */}
            <Card.Img variant="top" className="imagenUserComentarios" src={comentario.user.imagenUser} alt={comentario.user.apellido} />
              <div className="comentarioUsuario">
                  <Card.Title className="text-light col-6 text-center image-title">
                  {`${comentario.user.nombre} ${comentario.user.apellido}:`}
                  </Card.Title>
                  <Card.Text className="text-light col-6 text-center image-title">
                  {`"${comentario.comentario}"`}
                  </Card.Text>
              </div>
            {/* </Card.ImgOverlay> */}
          </Card>
        </Col>
      ))}
    </>)
};

export default CardComentarios;
