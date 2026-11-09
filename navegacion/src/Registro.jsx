import { useNavigate } from "react-router-dom"

function Registro(){
    let navigate=useNavigate()
    function llevarLogin(){
        navigate("/")
    }
    function regresar(){
        navigate("/")
    }
    return(
        <div>
            <h1>registrarse</h1>
            <input type="text" placeholder="escriba su nombre" />
            <input type="text" placeholder="escriba su aplellido" />
            <input type="text" placeholder="escriba correo" />
            <input type="password" placeholder="escriba password" />
            <button onClick={llevarLogin}>registrarse</button><br />
            <button onClick={regresar}>inicio</button>
        </div>
    )
}
export default Registro