import './Navbar.css'
import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return(
        <nav className="navbar">
            <h2>Skin Care Products</h2>

                <div className="contenedorNavbar" id="navbar">
                    <button className='inicio'>INICIO</button>
                    <button className='limpieza'>PRODUCTOS DE LIMPIEZA</button>
                    <button className='hidratacion'>PRODUCTOS DE HIDRATACIÓN</button>
                    <button className='nocturno'>PRODUCTOS DE USO NOCTURNO</button>
                    <button className='lociones'>LOCIONES FACIALES</button>
                    <button className='solar'>PROTECCIÓN SOLAR</button>
                    <button className='contacto'>CONTACTO</button>
                    <button className='quienesSomos'>¿QUIÉNES SOMOS?</button>
                </div>
                <CartWidget/>
        </nav>
    )
}