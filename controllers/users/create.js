import User from "../../models/User.js";

let create = async (req,res) =>{
    try {
        let user = req.body
        let all =  await User.create(user)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {create}