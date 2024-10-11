import "dotenv/config.js"
import '../../config/database.js'
import Zapato from '../Zapato.js'

const zapatos = [
    {
      name: "Air Max 90",
      brand: "Nike",
      size: 42,
      color: "Blanco",
      price: 120,
      material: "Cuero",
      year: "2023",
      gender: "Unisex",
      inStock: true,
      rating: 4.8
    },
    {
      name: "Ultraboost",
      brand: "Adidas",
      size: 44,
      color: "Negro",
      price: 180,
      material: "Sintético",
      year: "2023",
      gender: "Hombre",
      inStock: true,
      rating: 4.7
    },
    {
      name: "Old Skool",
      brand: "Vans",
      size: 41,
      color: "Negro/Blanco",
      price: 70,
      material: "Lona",
      year: "2022",
      gender: "Mujer",
      inStock: false,
      rating: 4.5
    },
    {
      name: "Chuck Taylor",
      brand: "Converse",
      size: 43,
      color: "Rojo",
      price: 65,
      material: "Lona",
      year: "2021",
      gender: "Unisex",
      inStock: true,
      rating: 4.6
    },
    {
      name: "Gel-Kayano 27",
      brand: "ASICS",
      size: 45,
      color: "Azul",
      price: 160,
      material: "Malla",
      year: "2023",
      gender: "Hombre",
      inStock: false,
      rating: 4.9
    },
    {
      name: "Classic Slip-On",
      brand: "Vans",
      size: 40,
      color: "Blanco",
      price: 50,
      material: "Lona",
      year: "2022",
      gender: "Mujer",
      inStock: true,
      rating: 4.4
    },
    {
      name: "Pegasus 39",
      brand: "Nike",
      size: 43,
      color: "Gris",
      price: 110,
      material: "Malla",
      year: "2023",
      gender: "Hombre",
      inStock: true,
      rating: 4.7
    },
    {
      name: "Yeezy Boost 350",
      brand: "Adidas",
      size: 42,
      color: "Beige",
      price: 220,
      material: "Sintético",
      year: "2023",
      gender: "Unisex",
      inStock: false,
      rating: 4.9
    },
    {
      name: "Wave Rider 25",
      brand: "Mizuno",
      size: 44,
      color: "Verde",
      price: 140,
      material: "Malla",
      year: "2022",
      gender: "Hombre",
      inStock: true,
      rating: 4.6
    },
    {
      name: "Superstar",
      brand: "Adidas",
      size: 41,
      color: "Blanco/Negro",
      price: 90,
      material: "Cuero",
      year: "2023",
      gender: "Unisex",
      inStock: true,
      rating: 4.8
    }
  ];
  Zapato.insertMany(zapatos)