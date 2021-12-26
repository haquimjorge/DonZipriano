import axios from 'axios'

const userActions = {
    saveUser : (user) =>{
        return async (dispatch)=>{
            console.log('ACTION: ME LLEGA ESTO DEL COMPONENTE')
            console.log(user)
            let response = await axios.post('http://localhost:4000/api/user/signup', user)
            dispatch({type:"SAVE_USER", payload: response.data.response})
        }
    }
}

export default userActions;
