import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import userActions from "../redux/action/userActions";
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import lottie from "lottie-web";
import pizzaAnim from "../lotties/pizza-animaton.json";
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

const Verify = (props) => {
  const [redirect, setRedirect] = useState(false);
  const {user, verifyEmail} = props
  const uniqueString = props.params.uniqueString
  let navigate = useNavigate()

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#pizza-animation"),
      animationData: pizzaAnim,
    });
    if(!user){
        verifyEmail(uniqueString);
    }
  }, [verifyEmail,uniqueString,user]);

  if(props.success!==null && redirect===false){
      setTimeout(() => {
        setRedirect(true);
      }, 2500);
  }

  if (redirect) {
    navigate('/')
  }

  return (
    <>
      <Container
        fluid
        className="verify-page-section vh-100 d-flex justify-content-center flex-column align-items-center"
      >
          <Stack gap={5} className="d-flex justify-content-center align-items-center">
          <p className="text-shadow display-6 text-center">
          {props.user ? "¡Benvenuto " + props.user.name + "!" : ""}
        </p>
        <p className="text-shadow text-center text-warning">
          {(props.success!==null || props.success!==undefined) ? (props.success? props.message : props.error) : <Spinner animation="grow" variant="danger" />}
        </p>
        <p className="text-shadow">Redirigiendo a home...</p>
        <div style={{ width: 200, height: 200 }} id="pizza-animation"></div>
</Stack>
          
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    error: state.authReducer.error,
    message: state.authReducer.message,
    success :state.authReducer.success
  };
};

const mapDispatchToProps = {
  verifyEmail: userActions.verifyEmail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Verify);
