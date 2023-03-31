import './App.css'
/*import { ItemCount } from './ItemCount/IntemCount.jsx'*/
import { Navbar } from './Navbar/Navbar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  return (
    <div className='contenedorApp'>
      <Navbar/>
      <ItemListContainer greeting={'Productos de Skincare'}/>
    </div>
  )
}

/*<ItemCount/>*/