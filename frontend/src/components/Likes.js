import React, { useState } from "react";
import mealActions from "../redux/action/mealActions";
import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import toasty from "./Toast";

const Likes = (props) => {
  const token = localStorage.getItem("token");
  const { meal, likeMeal, user } = props;
  const _id = user ? user._id: null;

  const [mealLikes, setMealLikes] = useState(meal.iLikeIt);
  const [likeIcon, setLikeIcon] = useState(true);

  
  let like  = mealLikes.includes(_id) ? (
      <FcLike className="pointer" />
    ) : (
      <FaHeart className="pointer" />
    );


  const likeI = async () => {
    setLikeIcon(!likeIcon);
    if (!_id) {
      toasty("error", "debes estar registrado para dar likes");
    } else {
      let response = await likeMeal(meal._id, token);
      setMealLikes(response.data.response);
    }
  };
  return (
    <div onClick={likeI}>
      {like}
      <p>{mealLikes.length}</p>
    </div>
  );
};
const mapDispatchToProps = {
  likeMeal: mealActions.likeMeal,
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
