import mongoose from "mongoose"//Va hace nuestra conexion a la base de datos

let url = process.env.URI_MONGO//Direccion de la base de datos, El URI_MONGO esta guardada en .env


//Esta la version Generica de JavaScript
// mongoose.connect(url)
// .then(()=> console.log("base de datos conectada"))
// .catch(error => console.log(error))

async function coneccionBaseDeDatos() {
    try{
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error);
    }
}

coneccionBaseDeDatos()