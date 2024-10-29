import User from "../../models/User.js"

const update = async (req,res,next)=> {
try {
    let user = req.body
    await User.updateOne(
        {_id: user._id},//condiciones de busqueda
        {auto: user.auto}
    )
    
} catch (error) {
    next(error)
}
}

export {update}