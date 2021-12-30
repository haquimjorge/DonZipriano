const Meal = require("../models/Meal");

const mealControllers = {
  uploadMeal: async (req, res) => {
    const { name, price, lastPrice, image, description, type, timeFood } =
      req.body;
    try {
      let newMeal = await new Meal({
        name,
        price,
        lastPrice,
        image,
        description,
        type,
        timeFood,
      }).save();
      res.json({ success: true, error: null, response: newMeal });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  getAllMeals: async (req, res) => {
    try {
      let allMeals = await Meal.find();
      res.json({ success: true, error: null, response: allMeals });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  modifyMeal: async (req, res) => {
    const { id, valor } = req.body;
    try {
      let updatedMeal = await Meal.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        {new:true}
      );
      res.json({ success: true, error: null, response: updatedMeal });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  deleteMeal: async (req, res) => {
    try {
      let deletedMeal = await Meal.findOneAndDelete({ _id: req.params.mealId });
    //   esto me devuelve la meal eliminada 
      res.json({ success: true, error: null, response: deletedMeal });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  likeMeal: (req, res) => {

    Meal.findOne({ _id: req.params.id })
      .then((meal) => {
        if (meal.iLikeIt.includes(req.user._id)) {
          Meal
            .findOneAndUpdate(
              { _id: req.params.id },
              { $pull: { iLikeIt: req.user._id } },
              { new: true }
            )
            .then((newLike) =>
            {console.log(newLike)
              return res.json({ success: true, response: newLike.iLikeIt })
            }
                 
            )
            .catch((error) => console.log(error));
        } else {
          Meal
            .findOneAndUpdate(
              { _id: req.params.id },
              { $push: { iLikeIt: req.user._id } },
              { new: true }
            )
            .then((newLike) =>
              {console.log(newLike)
                return res.json({ success: true, response: newLike.iLikeIt })}
            )
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  },
};

module.exports = mealControllers;
