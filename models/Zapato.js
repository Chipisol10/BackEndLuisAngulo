import { Schema, model } from "mongoose";

let collection = "zapatos"
const shoeSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    material: { type: String, required: true },
    year: { type: String, required: true },
    gender: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    rating: { type: Number, required: true }
  });
  
  const Zapato = model(collection, shoeSchema);
  
  export default Zapato