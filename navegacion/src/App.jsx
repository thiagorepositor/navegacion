import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"


import Login from "./Login"
import Registro from "./Registro"
import Dashboard from "./Dashboard"
import Productos from "./Productos"
import Contacto from "./Contactos"

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Registro" element={<Registro></Registro>}></Route>
        <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path="/contactos" element={<Contacto></Contacto>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
