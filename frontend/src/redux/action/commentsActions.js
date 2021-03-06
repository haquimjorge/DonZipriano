import axios from "axios";

const commentsActions = {
  postComment: ({user,comment}) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      let response = await axios.post(
        `https://don-zipriano.herokuapp.com/api/comments/`,{user,comment},{
            headers:{
            'Authorization':'Bearer '+ token
          }});
    dispatch({ type: "POST_COMMENT", payload:response.data.resp});
    };
  },

//   getCommentsByUser: (userId) => {
//     const token = localStorage.getItem('token')
//     return async (dispatch, getState) => {
//       let comments = await axios.get(
//         `http://localhost:4000/api/comments/${userId}`,null,{
//             headers:{
//             'Authorization':'Bearer '+ token
//           }});
//           // console.log(comments)
//     dispatch({ type: "GET_COMMENTS", payload:comments});
//   };
// },
  getComments: () => {
    
    return async (dispatch, getState) => {
      let response = await axios.get(
        `https://don-zipriano.herokuapp.com/api/comments/`);
    dispatch({ type: "GET_COMMENTS", payload:response.data.comments});
  };
},

deleteComment:(token, commentId) => {      
  return async (dispatch, getState) => {
    try{
      let response = await axios.delete(`https://don-zipriano.herokuapp.com/api/comments/${commentId}`
      , {
        headers : {
          Authorization: 'Bearer '+ token
        }
      }
      )
      
      dispatch({ type: "DELETE_COMMENT", payload:commentId})
    }catch (error){
      console.log(error)
    }
    
  }
},

};

export default commentsActions;
