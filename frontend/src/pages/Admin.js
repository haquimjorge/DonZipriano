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
      <div>
        <label className="text-dark" htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
 
  };
const Admin = (props) => {
    const [key, setKey] = useState('menu');

    console.log('COMPONENT: LISTA DE MEALS')
    console.log(props.meals)
    const {getMeals, getUsers } = props
    useEffect(()=>{
        getMeals()
        getUsers()
    },[getMeals, getUsers])

    console.log("PROPS.USERS:")
    console.log(props.users)

    const renderEdit = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Editar
        </Tooltip>
      );

      // function handleEdit(id, type){
      //     if(selectedId === id){
      //         setSelectedId('')
      //     }else if(selectedId === "" ){
      //         setSelectedId(id)
      //     }else if(selectedId !== "" && selectedId !==id){
      //       setSelectedId(id)
      //     }
      //   //  aqui capturo el id de la comida y si es precio o no
      // }

  //   let editPencil = <OverlayTrigger
  //   placement="top"
  //   delay={{ show: 25, hide: 25 }}
  //   overlay={renderEdit}
  // >
  //   <img onClick={()=>handleEdit()} src={Pencil} alt='pencil' className="admin-edit-icon"/>
  //   </OverlayTrigger>



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
       
  
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="entryPlates">Entradas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mainPlates">Platos Principales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="deserts">Postres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="drinks">Bebestibles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="upload">Subir Comida</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
          <AdminTabPanel timeFood="entryPlates" meals={entryPlates} />
       
        <AdminTabPanel timeFood='mainPlates' meals={mainPlates} />
        
        <AdminTabPanel timeFood='deserts' meals={deserts} />
      
        <AdminTabPanel timeFood='drinks' meals={drinks} />

    <Tab.Pane eventKey='upload' > 
    <p className="text-dark">adasdkhad</p>
    <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={DefaultFood} />
           <Card.Body className="admin-card-body d-flex flex-column align-items-around justify-content-between">
           <Formik
          initialValues={{
            name: "",
            description: "",
            image: "",
            price:0,
            timeFood:''
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
            typeFood: Yup.string()

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
              console.log(values)

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

           <SelectInput label="Tipo de Comida" name="typeFood">
<option value="">Selecciona el tipo de comida</option>
<option value="Pasteleria">Pasteleria</option>
<option value="Pizza">Pizza</option>
<option value="Pescados">Pescados</option>
<option value="Pastas">Pastas</option>
<option value="Alcohol">Alcohol</option>
<option value="Sin Alcohol">Sin Alcohol</option>
</SelectInput>

            <StringInput
              label="precio"
              name="price"
              type="number"
              placeholder="kevin"
            />
          </Form>
        </Formik>
         
  
           </Card.Body>
           <Card.Footer className="bg-success">
             <small className="text-white d-flex justify-content-end">Subir</small>
           </Card.Footer>
         </Card>  
    
    
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