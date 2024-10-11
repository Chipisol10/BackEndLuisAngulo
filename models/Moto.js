import { Schema, model } from "mongoose";

let collection = 'motos'
let moto = new Schema({
    name: {type:String, required:true},
    mark: {type:String, required:true},
    price: {type:Number, required:true},
    year: {type:String, required:true},
},{
    timestamps:true
})

let Moto = model(collection,moto)
export default Moto