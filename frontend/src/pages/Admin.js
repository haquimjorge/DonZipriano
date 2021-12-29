import {React, useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import mealActions from '../redux/action/mealActions'
import {connect} from 'react-redux'
import { dividerClasses } from "@mui/material";
import Pencil from '../assets/pencil.png'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AdminTabPanel from "../components/AdminTabPanel";

const Admin = (props) => {
    const [key, setKey] = useState('menu');
    const [selectedId, setSelectedId] = useState('')
    const [editType, setEditType] = useState("");
    const [editInput, setEditInput] = useState('')
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        props.getMeals()
    },[])
    const renderEdit = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Editar
        </Tooltip>
      );

      function handleEdit(id, input, type){
          switch(type){
            case "name":
                console.log("paso por el name")
                setEditType(type)
                setEditInput(input)
                if(selectedId === id && editType === type){
                    setSelectedId('')
                    console.log(1)
                }else if(selectedId === "" ){
                    setSelectedId(id)
                    console.log(2)
                }else if(selectedId !== "" && selectedId !==id){
                  setSelectedId(id)

                  console.log(3)
                }
                break
            case 'description':
                console.log("paso por el description")
                setEditType(type)
                setEditInput(input)
                if(selectedId === id && editType === type){
                    setSelectedId('')
                }else if(selectedId === "" ){
                    setSelectedId(id)
                    
                }else if(selectedId !== "" && selectedId !==id){
                  setSelectedId(id)

                }
                break
            
            case 'price':
                console.log("paso por el price")
                setEditType(type)
                setEditInput(input)
                if(selectedId === id && editType === type){
                    setSelectedId('')
                }else if(selectedId === "" ){
                    setSelectedId(id)
                }else if(selectedId !== "" && selectedId !==id){
                  setSelectedId(id)
                }
                break
            default:
                return{

                      }
          }

          
        //  aqui capturo el id de la comida y si es precio o no
      }

    let editPencil=(plate,type) => <OverlayTrigger
    placement="top"
    delay={{ show: 25, hide: 25 }}
    overlay={renderEdit}
  >
    <img onClick={()=>handleEdit(plate._id,plate[type], type)} src={Pencil} alt='pencil' className="admin-edit-icon"/>
    </OverlayTrigger>



    let entryPlates =props.meals.filter(meal=> meal.timeFood === "Entrada")
    let mainPlates =props.meals.filter(meal=> meal.timeFood === "Plato Principal")
    let deserts =props.meals.filter(meal=> meal.timeFood === "Postre")
    let drinks =props.meals.filter(meal=> meal.timeFood === "Bebestible")

  return (
    <>
      <NavBar />
      <Container>
          <div>
      <h2>Panel de Administración</h2>
      <p>Bienvenido al panel de administracion. Aqui podras gestionar tu pagina facilmente.</p>
          </div>

          <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="menu" title="Menú" className="min-vh-100">
        <p>este es el menu</p>
       
  
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="entryPlates">entradas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mainPlates">platos principales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="deserts">postres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="drinks">bebestibles</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
          {/* <AdminTabPanel timeFood="entryPlates" meals={entryPlates} /> */}
         <Tab.Pane eventKey="entryPlates">
          <p>entradas</p>
          <div className="d-flex flex-wrap">
          {entryPlates.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body className="admin-card-body d-flex flex-column align-items-around justify-content-between">
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'name')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'name'?  <OverlayTrigger
                              key="1"
                              placement="top"
                              overlay={
                                <Tooltip id="key">Presiona enter para editar</Tooltip>
                              }
                            ><input value={editInput} onChange={(e) => setEditInput(e.target.value)} /></OverlayTrigger> : <Card.Text className="text-dark">{plate.name}</Card.Text>}</Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'description')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'description'?  <textarea className="admin-textarea" rows="3" value={editInput} onChange={(e) => setEditInput(e.target.value)}></textarea> : <Card.Text className="text-dark">{plate.description}</Card.Text>}</Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'price')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'price'?  <input value={editInput} onChange={(e) => setEditInput(e.target.value)}></input> : <Card.Text className="text-dark">${plate.price}</Card.Text>}</Col>
               </Row> 
           </Card.Body>
           <Card.Footer className="bg-danger">
             <small className="text-white d-flex justify-content-end">Eliminar</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane> 
        <Tab.Pane eventKey="mainPlates">
        <p>platos principales</p>
        <div className="d-flex flex-wrap">
          {mainPlates.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body>
             <Card.Title className="text-dark">{plate.name}</Card.Title>
             <Card.Text className="text-dark">
               {plate.description}
             </Card.Text>
             <Card.Text className="text-dark">
               {plate.price}
             </Card.Text>
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey='deserts'>
            <p>postres</p>
            <div className="d-flex flex-wrap">
          {deserts.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body>
             <Card.Title className="text-dark">{plate.name}</Card.Title>
             <Card.Text className="text-dark">
               {plate.description}
             </Card.Text>
             <Card.Text className="text-dark">
               {plate.price}
             </Card.Text>
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="drinks">
            <p>bebestibles</p>
            <div className="d-flex flex-wrap">
          {drinks.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body>
             <Card.Title className="text-dark">{plate.name}</Card.Title>
             <Card.Text className="text-dark">
               {plate.description}
             </Card.Text>
             <Card.Text className="text-dark">
               {plate.price}
             </Card.Text>
           </Card.Body>
           <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        
   
   
    
        
       
 
        
      </Tab>
      <Tab eventKey="usuarios" title="Usuarios">
      <p>este es el usuarios</p>
      </Tab>
      <Tab eventKey="reservas" title="Reservas">
      <p>este es el reservas</p>
      </Tab>
    </Tabs>


      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      meals: state.mealsReducer.meals,
    };
  };
  
  const mapDispatchToProps = {
    getMeals: mealActions.fetchMeal
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);