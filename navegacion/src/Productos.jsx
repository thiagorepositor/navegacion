import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Productos(){
    const[nombre,setNombre]=useState();
    const[categoria,setCategoria]=useState();
    const[precio,setPrecio]=useState();
    const[cantidad,setCantidad]=useState();
    const navigate =useNavigate();
    async function guardar(){
        let respuesta=await fetch("http://localhost:3000/guardar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                categoria:categoria,
                precio:precio,
                cantidad:cantidad
            })
        })   
        let datos=await respuesta.json()
        //setmensaje(datos.mensaje)
        alert(datos.mensaje)     
    }
    function regresar(){
        navigate("/")
    }
    

    return(
        <div>
            <h2>REGISTRO DE LOS PRODUCTOS</h2>
            <input type="text" placeholder="nombre del producto" onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="categoria del producto" onChange={(e)=>setCategoria(e.target.value)} />
            <input type="text" placeholder="precio del producto" onChange={(e)=>setPrecio(e.target.value)} />
            <input type="text" placeholder="cantidad del producto" onChange={(e)=>setCantidad(e.target.value)} />
            <button onClick={guardar}>enviar</button><br />
            <button onClick={regresar}>inicio</button>

        </div>
    )
}
export default Productos