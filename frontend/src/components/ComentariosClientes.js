import React from "react";
import { Carousel, Row } from "react-bootstrap";
import BotonModalComentario from "./BotonModalComentario";
import CardComentarios from './CardComentarios'
import commentsActions from '../redux/action/commentsActions'
import {useEffect} from 'react'
import {connect} from 'react-redux'



let arrayComentarios = [
  
    {  
        comentario: "Me gusto la calidad de la pasta y la salsa, lo recomiendo!",
        user:{ nombre: "Marcelo",
        apellido: "Labraña",
            imagenUser: 'https://i.pinimg.com/originals/d1/cf/62/d1cf6294a3f560bb63f42367810b1d32.jpg'}
            
        
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



const ComentariosClientes = (props) => {
 

    useEffect(()=>{
      props.getComments()
      
      //if(!(props.comments.length>0))props.getComments()
      
    },[])
    console.log(props.comments)

    const handleSelect = (_, e) => {
        if (e !== undefined) {
          e.target.className.includes("next")
            ? currentIndex >= props.comments.length
              ? (currentIndex = 0)
              : (currentIndex = currentIndex + imagesPerSlide)
            : currentIndex <= 0
            ? (currentIndex = props.comments.length - imagesPerSlide)
            : (currentIndex = currentIndex - imagesPerSlide);
        }
      };
    

    const imagesPerSlide = 2;
    let currentIndex = 0;

  return (
    <>
    <div className="containerCarousel">
          <Carousel onSelect={handleSelect} interval={6000}>
          {Array.from({ length: props.comments.length / imagesPerSlide  }).map(
            (_, mapIndex) => (
              <Carousel.Item key={mapIndex} className="p-2">
                <Row xs={1} sm={1} md={1} lg={2} className="g-4">
                  <CardComentarios
                    list={props.comments}
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
        <div className="botonModalComentarioHome">
          <BotonModalComentario/>
        </div>
        </div>

    </>)
};

const mapStateToProps = (state) => {
  return {
    comments: state.commentsReducer.comments
  };
};

const mapDispatchToProps = {
  getComments: commentsActions.getComments
};

export default connect(mapStateToProps, mapDispatchToProps)(ComentariosClientes);

