import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from '../context/darkModeContext';
import { Navbar } from './Navbar/Navbar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/cart'

export const App = () => {
  return (
    <div className='contenedorApp'>
      <BrowserRouter>
        <DarkModeProvider>  
            <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/product/:id' element={<ItemDetailContainer/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h1>404 Not Found</h1>}/>
              </Routes>
        </DarkModeProvider>      
        </BrowserRouter>
    </div>
  )
}
