import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { Link, useNavigate} from "react-router-dom";
import { createOrdenCompra, getProduct, updateProduct } from "../../farebase/farebase";

export const Checkout = () => {
    const datForm = useRef()
    const {carrito, totalPrice,emptyCart} = useCarritoContext()


    let navigate = useNavigate()
    const consultarForm = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current)
        const cliente = Object.fromEntries(datosFormulario)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if(prodBBD.stock >= prodCarrito.quantity) {
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD.id, prodBBD)
                } else {
                    console.log("El stock no es válido")
                }
            })
        })

        const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio}))

        createOrdenCompra(cliente, totalPrice(),aux, new Date().toLocaleString('es-AR', {timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone})).then(ordenCompra => {
           alert(`🛒 Muchas gracias por realizar la compra. Su ID de compra es "${ordenCompra.id}" y el total es de ${totalPrice()}.`)
            emptyCart()
            e.target.reset()
            navigate("/")

        })
        .catch(error =>{
            console.error(error)
        })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                <>
                    <h2>Debe tener productos en el carrito</h2>
                </>
                :
                <div className="container divForm" >
                    <form onSubmit={consultarForm} ref={datForm}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                        <input type="text" className="form-control" name="nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Repetir Email</label>
                        <input type="email" className="form-control" name="emailRepetido"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">DNI</label>
                        <input type="number" className="form-control" name="dni"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Numero telefonico</label>
                        <input type="number" className="form-control" name="celular"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" name="direccion"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                    </form>
                </div>
            }
        </>  
    )
}