
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Wishlist from './Pages/Wishlist'
import Home from './Pages/Home'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
     <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='cart' element={<Cart/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
