import './Navbar.css'
import { Categorias } from './Categorias/Categorias'
import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                    <Categorias />
                </div>
                <CartWidget cantCarrito={0} />
            </div>
        </nav>
    )
}