import { useNavigate } from "react-router-dom"
import Nav from "./nav"

function Login(){
    let navigate=useNavigate()
    function llevarDash(){
        navigate("/dash")
    }
    return(
        <div>
            <Nav></Nav>
            <input type="text" placeholder="escriba correo" />
            <input type="password" placeholder="escriba password" />
            <button onClick={llevarDash}>aceptar</button>
        </div>
    )
}
export default Login