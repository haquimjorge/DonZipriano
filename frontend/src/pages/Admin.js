import {React, useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import mealActions from '../redux/action/mealActions'
import userActions from '../redux/action/userActions'
import {connect} from 'react-redux'
import { dividerClasses } from "@mui/material";
import Pencil from '../assets/pencil.png'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Admin = (props) => {
    const [key, setKey] = useState('menu');
    const [selectedId, setSelectedId] = useState('')
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        props.getMeals()
        props.getUsers()
    },[])

    console.log("PROPS.USERS:")
    console.log(props.users)

    const renderEdit = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Editar
        </Tooltip>
      );

      function handleEdit(id, type){
          if(selectedId === id){
              setSelectedId('')
          }else if(selectedId === "" ){
              setSelectedId(id)
          }else if(selectedId !== "" && selectedId !==id){
            setSelectedId(id)
          }
        //  aqui capturo el id de la comida y si es precio o no
      }

    let editPencil = <OverlayTrigger
    placement="top"
    delay={{ show: 25, hide: 25 }}
    overlay={renderEdit}
  >
    <img onClick={()=>handleEdit()} src={Pencil} alt='pencil' className="admin-edit-icon"/>
    </OverlayTrigger>



    let entryPlates =props.meals.filter(meal=> meal.timeFood === "Entrada")
    let mainPlates =props.meals.filter(meal=> meal.timeFood === "Plato Principal")
    let deserts =props.meals.filter(meal=> meal.timeFood === "Postre")
    let drinks =props.meals.filter(meal=> meal.timeFood === "Bebestible")

    console.log('COMPONENT: ESTO ME LLEGA DE PROPS.MEALS')
    console.log(props.meals)
    console.log('COMPONENT: ESTA ES ENTRADA')
    console.log(entryPlates)
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
      <Tab eventKey="menu" title="Menú" className="min-vh-100 tabsAdmin ">
        {/* <p>este es el menu</p> */}
       
  
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">entradas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">platos principales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">postres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">bebestibles</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first" className="bg-dark">
          <p>entradas</p>
          <div className="d-flex flex-wrap">
          {entryPlates.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Title className="text-dark">{plate.name}</Card.Title></Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{edit? <input value='estoy ditando ctm'></input> : <Card.Text className="text-dark">{plate.description}</Card.Text>}</Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Text className="text-dark">{plate.price}</Card.Text></Col>
               </Row> 
           </Card.Body>
           <Card.Footer className="bg-danger">
             <small className="text-white d-flex justify-content-end">Eliminar</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
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
        <Tab.Pane eventKey='third'>
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
        <Tab.Pane eventKey="fourth">
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
      <Tab className="tabsAdmin" eventKey="usuarios" title="Usuarios">      
 
             <div className="d-flex flex-wrap">
             {props.users.map(user => 
              <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12 cardUsersAdmin">
              <Card.Img variant="top" className="userImageEnAdmin" rounded src={user.image} />
              <Card.Body>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Text className="text-light">nombre: {`${user.name} ${user.lastName}`}</Card.Text></Col>
                  </Row>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0">{ <Card.Text className="text-light">mail: {user.email}</Card.Text>}</Col>
                  </Row>
              </Card.Body>
              <Card.Footer className="bg-danger">
                <small className="text-white d-flex justify-content-end">Eliminar</small>
              </Card.Footer>
            </Card>  
               )}
               </div>

      </Tab>
      <Tab className="tabsAdmin" eventKey="reservas" title="Reservas">
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
      users: state.usersReducer.users,
    };
  };
  
  const mapDispatchToProps = {
    getMeals: mealActions.fetchMeal,
    getUsers: userActions.getUsers
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);