const Meal = require('../models/Meal')

const mealControllers = {
    uploadMeal : async (req,res)=>{
        console.log('esto llega del req.body')
        console.log(req.body)
        const {name,price,lastPrice,image,description,type} = req.body
        try{
            let newMeal = new Meal({name,price,lastPrice,image,description,type}).save()
            res.json({success:true, error: null, response: newMeal})

        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)

        }
    },
    getAllMeals : async(req,res)=>{
        console.log('le pego')
        try{
            let allMeals = await Meal.find()
            res.json({success:true, error: null, response: allMeals})

        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)

        }
    }
}

module.exports = mealControllers