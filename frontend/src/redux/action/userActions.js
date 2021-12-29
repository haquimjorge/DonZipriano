import axios from "axios";

const userActions = {
  saveUser: (user) => {
    return async (dispatch) => {
      console.log("ACTION: ME LLEGA ESTO DEL COMPONENTE");
      console.log(user);
      let response = await axios.post(
        "http://localhost:4000/api/user/google",
        user
      );
      if (response.data.response) {
        localStorage.setItem("token", response.data.token);
      }

      dispatch({
        type: "SAVE_USER",
        payload: { user: response.data.response, error: response.data.error, message:response.data.message },
      });
    };
  },
  authUser: () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem("token");
        const user = await axios.get(
          "http://localhost:4000/api/user/autenticar",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );

        dispatch({ type: "IS_AUTH", payload: user.data.response });
        return { response: user.data.response };
      } catch (e) {
        return { error: "Unauthorized user, try login again" };
      }
    };
  },
  logOut: () => {
    return (dispatch) => {
      localStorage.clear();
      alert("Logging out...");
      dispatch({ type: "LOG_OUT", payload: {} });
    };
  },
  signIn: (user) => {
    return async (dispatch) => {
      let response = await axios.post(
        "http://localhost:4000/api/user/ingresar",
        user
      );
      if (response.data.response) {
        localStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: "SIGN_IN",
        payload: { user: response.data.response, error: response.data.error },
      });
    };
  },
  modify: (userMod) => {
    return async (dispatch) => {
      console.log("HOLA")
      let response = await axios.put('http://localhost:4000/api/user/modificar', userMod)
      if (response.data.success) dispatch({
        type: "SIGN_IN",
        payload: { user: response.data.response, error: response.data.error }
      })
      else return response.data.error
    }
  },
  signUp: (user) => {
    return async (dispatch) => {
      let response = await axios.post(
        "http://localhost:4000/api/user/registrar",
        user
      );
      if (response.data.response) {
        localStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: "SAVE_USER",
        payload: { user: response.data.response, error: response.data.error, message: response.data.message },
      });
    };
  },
  verifyEmail : (uniqueString)=>{
      return async (dispatch)=>{
          let response = await axios.get("http://localhost:4000/api/verify/"+uniqueString)
          if (response.data.response) {
            localStorage.setItem("token", response.data.token);
          }
          dispatch({
            type: "SAVE_USER",
            payload: { user: response.data.response, error: response.data.error, message:response.data.message, success: response.data.success },
          });

      }
  }
}
 

  export default userActions;
