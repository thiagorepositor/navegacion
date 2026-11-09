import { Link } from "react-router-dom";
function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/registro">registro</Link></li>
                    <li><Link to="/dash">dashboard</Link></li>
                    <li><Link to="/productos">producto</Link></li>
                    <li><Link to="/contactos">contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav