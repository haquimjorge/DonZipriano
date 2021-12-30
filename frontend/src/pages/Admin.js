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
import tableActions from '../redux/action/tableActions'
import commentsActions from '../redux/action/commentsActions'
import {connect} from 'react-redux'
import { dividerClasses } from "@mui/material";
import Pencil from '../assets/pencil.png'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AdminTabPanel from "../components/AdminTabPanel";
import DefaultFood from '../assets/breakfast.png'
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormR from "react-bootstrap/Form";

const StringInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    
  
    return (
      <div className={props.className}>
        <FloatingLabel label={label} className="mb-3 text-dark">
            {props.tooltip? <OverlayTrigger
                              key="1"
                              placement="top"
                              overlay={
                                <Tooltip id="key">{props.tooltip}</Tooltip>
                              }
                            >
          <FormR.Control className="text-input" {...field} {...props} /></OverlayTrigger> : <FormR.Control className="text-input" {...field} {...props} />}
        </FloatingLabel>
  
        {meta.touched && meta.error ? (
          <p className="text-danger mb-1">{meta.error}</p>
        ) : null}
      </div>
    );
  };

  const SelectInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
      <div className="mb-3 d-flex justify-content-center">
        <label className="text-dark" htmlFor={props.id || props.name}>{label}</label>
        <div className="mb-3 d-flex justify-content-center flex-column">

        <select {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error text-danger text-end">{meta.error}</div>
            ) : null}
            </div>
      </div>
    );
 
  };
const Admin = (props) => {
    const [key, setKey] = useState('menu');
    console.log('COMPONENTE: PROPS.SUCCESS')
    console.log(props.success)
    console.log('COMPONENT: LISTA DE MEALS')
    console.log(props.meals)
    const {getMeals, getUsers, getTables, getComments } = props
    useEffect(()=>{
        getMeals()
        getUsers()
        getTables()
        getComments()
    },[getMeals, getUsers, getTables, getComments])

   

    console.log("PROPS.USERS:")
    console.log(props.users)

    console.log("PROPS.COMMENTS:")
    console.log(props.comments)

    function cleanSuccess(){
        props.setSuccess(null)
    }


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
      <Tab eventKey="menu" title="Menú" className="min-vh-100 tabsAdmin ">
        {/* <p>este es el menu</p> */}
       
  
    <Tab.Container id="left-tabs-example" defaultActiveKey="entryPlates" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link className="admin-menu-items" eventKey="entryPlates">Entradas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="admin-menu-items" eventKey="mainPlates">Platos Principales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="admin-menu-items" eventKey="deserts">Postres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="admin-menu-items" eventKey="drinks">Bebestibles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="admin-menu-items" eventKey="upload">Subir Comida</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
          <AdminTabPanel timeFood="entryPlates" meals={entryPlates} title='Entradas' />
       
        <AdminTabPanel timeFood='mainPlates' meals={mainPlates} title='Platos Principales' />
        
        <AdminTabPanel timeFood='deserts' meals={deserts} title='Postres' />
      
        <AdminTabPanel timeFood='drinks' meals={drinks} title='Bebestibles' />

    <Tab.Pane eventKey='upload'> 
    <div className="d-flex justify-content-center flex-column align-items-center">
    <p className="text-white text-center display-6 bg-danger p-1 rounded shadow text-shadow">Subir Comida</p>

    
    {!props.success?  <Card className="col-12 col-md-10 col-xxl-6 col-xl-6 col-lg-8 col-sm-12 col-xs-12 p-2 admin-card-upload">
           <Card.Img variant="top" src={DefaultFood} />
           <Card.Body className="admin-card-body d-flex flex-column align-items-around justify-content-between">
           <Formik
          initialValues={{
            name: "",
            description: "",
            image: "",
            price:0,
            timeFood:'',
            type:''
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Debe tener 15 caracteres maximo")
              .trim()
              .required("Este campo es obligatorio"),
            description: Yup.string()
              .max(200, "Debe tener 200 caracteres maximo")
              .trim()
              .required("Este campo es obligatorio"),
            image: Yup.string().required("Este campo es obligatorio"),
            type: Yup.string()

            .oneOf(
              ['Pasteleria', 'Pizza', 'Pescados', 'Alcohol', 'Sin Alcohol','Pastas'],
              'Tipo invalido'
            )

            .required('Requerido'),
            timeFood: Yup.string()

             .oneOf(

               ['Entrada', 'Plato Principal', 'Postre', 'Bebestible'],

               'Tiempo invalido'

             )

             .required('Requerido'),
            price : Yup.number().required("Debe ser un numero")
          })}
          onSubmit={(values, { setSubmitting}) => {
              props.uploadMeal(values)
          }}
        >
          <Form>
              <StringInput
                label="Nombre"
                name="name"
                type="text"
                placeholder="kevin"
                className="w-100"
              />
              <SelectInput label="Tipo de Comida" name="type">
<option value="">Selecciona el tipo de comida</option>
<option value="Pasteleria">Pasteleria</option>
<option value="Pizza">Pizza</option>
<option value="Pescados">Pescados</option>
<option value="Pastas">Pastas</option>
<option value="Alcohol">Alcohol</option>
<option value="Sin Alcohol">Sin Alcohol</option>
</SelectInput>

              <StringInput
                label="Descripcion"
                name="description"
                type="textarea"
                as="textarea"
                placeholder="kevin"
                className="w-100"
              />
            

            <StringInput
              label="URL de Imagen"
              name="image"
              type="text"
              placeholder="kevin"
            />
            
            <SelectInput label="Time Food" name="timeFood">
             <option value="">Selecciona el tiempo de comida</option>
             <option value="Entrada">Entrada</option>
             <option value="Plato Principal">Plato Principal</option>
             <option value="Postre">Postre</option>
             <option value="Bebestible">Bebestible</option>
           </SelectInput>

           

            <StringInput
              label="precio"
              name="price"
              type="number"
              placeholder="kevin"
            />
<div className="d-flex justify-content-center">

            <button className="w-100 admin-submit-button" type="submit" >Subir</button>
</div>
          </Form>
        </Formik>
         
  
           </Card.Body>
         </Card>
         
         :  
         <div className="d-flex justify-content-center flex-column align-items-center">
             <p className="display-6 text-success text-shadow">Comida cargada exitosamente</p>
             <button className="w-100 admin-submit-button" onClick={()=> props.cleanSuccess()} >Subir otra</button>  
         </div> 
         }
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
      
      <div className="d-flex flex-wrap">
             {props.tables.map(table => 
              <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12 cardTablesAdmin">
                        <Card.Body>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Text className="text-dark">mail: {`${table.email}`}</Card.Text></Col>
                  </Row>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0">{ <Card.Text className="text-dark"> comensales: {table.amountPeople}</Card.Text>}</Col>
                  </Row>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0">{ <Card.Text className="text-dark"> Disponibilidad: {table.availability}</Card.Text>}</Col>
                  </Row>
              </Card.Body>
              <Card.Footer className="bg-danger">
              </Card.Footer>
            </Card>  
               )}
               </div>
      </Tab>
      <Tab className="tabsAdmin" eventKey="comentarios" title="Comentarios">
      
      <div className="d-flex flex-wrap">
             {props.comments.map(comment => 
              <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12 cardTablesAdmin">
                        <Card.Body>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Text className="text-dark">mail: {`${comment.user.email}`}</Card.Text></Col>
                  </Row>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0"><Card.Text className="text-dark">mail: {`${comment.user.nombre} ${comment.user.apellido}`}</Card.Text></Col>
                  </Row>
                  <Row>
                      <Col xs={11} sm={11} lg={11} md={11} className="p-0">{ <Card.Text className="text-dark"> comentario:{comment.comentario}</Card.Text>}</Col>
                  </Row>
              </Card.Body>
              <Card.Footer className="bg-danger">
              </Card.Footer>
            </Card>  
               )}
               </div>
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
      success: state.mealsReducer.success,
      comments: state.commentsReducer.comments,
      tables: state.tableReducer.tables };
  };
  
  const mapDispatchToProps = {
    getMeals: mealActions.fetchMeal,
    getUsers: userActions.getUsers,
    uploadMeal : mealActions.uploadMeal,
    cleanSuccess: mealActions.cleanSuccess,
    getTables: tableActions.fetchTable,
    getComments: commentsActions.getComments

  };
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);