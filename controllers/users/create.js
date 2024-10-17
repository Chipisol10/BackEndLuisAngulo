import User from "../../models/User.js";

let create = async (req,res,next) =>{
    try {
        let user = req.body
        let all =  await User.create(user)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create}