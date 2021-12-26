const Meal = require('../models/Meal')

const mealControllers = {
    uploadMeal : async (req,res)=>{
        const {name,price,lastPrice,image,description,type,timeFood} = req.body
        try{
            let newMeal = new Meal({name,price,lastPrice,image,description,type,timeFood}).save()
            res.json({success:true, error: null, response: newMeal})

        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)
        }
    },
    getAllMeals : async(req,res)=>{
        try{
            let allMeals = await Meal.find()
            res.json({success:true, error: null, response: allMeals})

        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)
        }
    },
    modifyMeal : async (req,res)=>{
        const {id} = req.body
        try{
            let updatedMeal = await Meal.findOneAndUpdate({_id: id}, { ...req.body })
            res.json({success:true, error: null, response: updatedMeal})
        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)
        }
    },
    deleteMeal : async (req,res)=>{
        try{
            let deletedMeal = await Meal.findOneAndDelete({_id:_id}, {...req.body})
            res.json({success:true, error: null, response: deletedMeal})
        }catch(e){
            res.json({ success: false, error: e, response: null });
            console.error(e)
        }
    }
}

module.exports = mealControllers