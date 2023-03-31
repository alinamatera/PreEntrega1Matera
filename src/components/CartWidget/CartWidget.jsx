import './CartWidget.css'
import logoCarrito from './assets/logoCarrito.png'

export const CartWidget = ({ cantCarrito }) =>{
    return (
        <div className='cartWidget'>
            <img className='logoCarrito'src={logoCarrito} alt="cart-widget" />
            0
        </div>
    )
}