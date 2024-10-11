import { Schema, model } from "mongoose";

let collection = 'users'
let shema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:true},
    role: {type:String, required:true},
},{
    timestamps:true
})

let User = model(collection,shema)
export default User