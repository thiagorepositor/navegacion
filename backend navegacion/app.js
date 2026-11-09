import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

// conexion a la base de datos 
const conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Almendra",
    database: "thiago_pass",
    port: 3306
})

conectar.connect((error) => {
    if (error) {
        console.log("error al conectar la base de datos", error.message)
    } else {
        console.log("conexion exitosa")
    }
})

//prueba
app.get("/prueba", (req, res) => {
    res.json({ mensaje: "esto es una prueba de productos" })
})

app.post("/guardar", (req, res) => {
    const { nombre, categoria, precio, cantidad } = req.body
    conectar.query(
        "INSERT INTO productos(nombre,categoria,precio,cantidad) VALUES (?,?,?,?)",
        [nombre, categoria, precio, cantidad],
        (error, resultado) => {
            if (error) {
                return res.json({ mensaje: "error al registrar el producto" })
            } else {
                return res.json({ mensaje: "producto registrado correctamente" })
            }
        }
    )
})

app.get("/ver", (req, res) => {
    conectar.query("SELECT * FROM productos", (error, resultado) => {
        if (error) {
            return res.json({ mensaje: "no se encuentran los datos" })
        } else {
            return res.json(resultado)
        }
    })
})

app.listen(PORT, () => {
    console.log("servidor en ejecucion en el puerto " + PORT)
})