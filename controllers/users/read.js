import User from "../../models/User.js"

let allUser = async(req,res,next) =>{
try{
    let {name,role} = req.query
    console.log(name)
    console.log(role)
    let query = {}

    if (name) {
        query.name = {$regex: '^'+name, $options: 'i'}
    }
    //$regex
    //$eq
    //$ne
    //$in: [1,2,3]
    //$nin:[1,2,3]
    //$gte: new Date('2023-01-01'), $lte: new Date ('2023-12-31')
    //$exists : true
    //$size: 4
    
    let all = await User.find(query)  
    return res.status(200).json({
        response: all
    })
} catch (error) {
    next(error)
}
}

let userByRole = async(req,res,next) =>{
    try{
        
        let roleQuery = req.params.x
        let all = await User.find({role: roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
       next(error)
    }
    }

export {allUser,userByRole} 