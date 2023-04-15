import { useCount } from "../../hoocks/useCount"

export const ItemCount = ({ ValInicial, min, max }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <>
      <button className="btn btn-dark" onClick={minus}>-</button>
      {count}
      <button className="btn btn-dark" onClick={sum}>+</button>
      <button className="btn btn-dark" onClick={reset}>Reset</button>
      <button className="btn btn-light">Agregar al Carrito</button>
    </>
  )
}