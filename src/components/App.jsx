import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from '../context/darkModeContext';
import { Navbar } from './Navbar/Navbar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/cart'
import { CarritoProvider } from '../context/CartContext';
import { createProducts } from '../farebase/farebase.js';
export const App = () => {
    //createProducts()

  return (
    <div className='contenedorApp'>
      <BrowserRouter>
      <CarritoProvider>
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
        </CarritoProvider>      
        </BrowserRouter>
    </div>
  )
}