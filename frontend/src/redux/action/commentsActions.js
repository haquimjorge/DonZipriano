import axios from "axios";

const commentsActions = {
  postComment: ({user,comment}) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      let response = await axios.post(
        `http://localhost:4000/api/comments/`,{user,comment},{
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
        `http://localhost:4000/api/comments/`);
          // console.log(comments)

    //console.log(comments)
    dispatch({ type: "GET_COMMENTS", payload:response.data.comments});
  };
},

deleteComment:(token, commentId) => {      
  // console.log(commentId)
  return async (dispatch, getState) => {
    try{
      let response = await axios.delete(`http://localhost:4000/api/comments/${commentId}`
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
