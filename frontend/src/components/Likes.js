import React, { useState } from "react";
import mealActions from "../redux/action/mealActions";
import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import toasty from "./Toast";

const Likes = (props) => {
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");

  const { meal, likeMeal } = props;
  const [mealLikes, setMealLikes] = useState(meal.iLikeIt);
  const [likeIcon, setLikeIcon] = useState(true);
  console.log(meal.iLikeIt)
  let like =
    mealLikes[0] && mealLikes[0].includes(_id) ? (
      <FcLike className="pointer" />
    ) : (
      <FaHeart className="pointer" />
    );
  
  const likeI = async () => {
    setLikeIcon(false);
    if (!_id) {
      toasty("error", "You must be registered to like this activity");
    } else {
      let response = await likeMeal(meal._id, token);
      setMealLikes(response.data.response);
    }
    setLikeIcon(true);
  };
  return (
    <div onClick={likeIcon ? likeI : null}>
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
    _id: state.authReducer_id,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
