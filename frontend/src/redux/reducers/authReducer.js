const initialState = {
    user:null,
    error:null

}

const authReducer = (state=initialState, action)=>{
   
    switch(action.type){
        case "SAVE_USER":
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default authReducer