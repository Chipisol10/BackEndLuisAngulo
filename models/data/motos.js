import "dotenv/config.js"
import '../../config/database.js'
import Moto from '../Moto.js'

const motos = [
    { name: "Ninja ZX-10R", 
        mark: "Kawasaki", 
        price: 15000, 
        year: "2023" 
    },
    { name: "CBR1000RR-R",
         mark: "Honda", 
         price: 18000, 
         year: "2023" 
    },
    { name: "R1", 
        mark: "Yamaha",
        price: 17000, 
        year: "2022"
    },
    { name: "Panigale V4", 
        mark: "Ducati", 
        price: 22000, 
        year: "2023" 
    },
    { name: "GSX-R1000", 
        mark: "Suzuki", 
        price: 16000,
        year: "2022" 
    },
    { name: "S1000RR", 
        mark: "BMW", 
        price: 20000, 
        year: "2023" },
    { name: "Street Triple",
        mark: "Triumph", 
        price: 12000, 
        year: "2023" },
    { name: "MT-09", 
        mark: "Yamaha", 
        price: 11000, 
        year: "2021" },
    { name: "Hypermotard 950", 
        mark: "Ducati", 
        price: 14000,
         year: "2022" },
    { name: "Z900", 
        mark: "Kawasaki", 
        price: 13000, 
        year: "2023" }
  ];

  Moto.insertMany(motos)
  