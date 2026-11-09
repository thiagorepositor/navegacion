
import { useNavigate } from "react-router-dom"
import Nav from "./nav"


function Dashboard(){

    
    let navigate=useNavigate()
    function llevarLogin(){
        navigate("/productos")
    }
    function regresar(){
        navigate("/")
    }
    return(
        <div>
            <Nav></Nav>
            <h1>bienvenido</h1>
            <button onClick={llevarLogin}>REGISTRAR PRODUCTOS</button><br />
            <button onClick={regresar}>inicio</button>
        </div>
    )
}
export default Dashboard