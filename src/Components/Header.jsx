import React from 'react'
import { Badge } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
  const wishlist= useSelector((state) => state.wishlistReducer)
  const cart= useSelector((state) => state.cartReducer)


  return (
    <>
        <Navbar expand="lg" className="bg-warning ps-3 pe-3 fixed-top">
        <Navbar.Brand className='text-dark fs-4 fw-bold text-start'>
            <Link to={'/'} className=' text-decoration-none text-dark fs-4 fw-bold text-start'>
                <i class="fa-brands fa-nfc-symbol fa-spin-pulse fa-lg me-2"></i>
                <i>E-CART</i> 
            </Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link>
                <Link to={'/wishlist'}  className='fs-6 fw-bold text-decoration-none text-dark'>
                     Wishlist
                    <i class="fa-solid fa-heart ms-2"></i>
                     <Badge   Badge className='bg-info text-white rounded-5 p-2'>{wishlist.length}</Badge>
                </Link>
                </Nav.Link>

            <Nav.Link >
                <Link to={'/cart'} className='fs-6 fw-bold ms-3 text-decoration-none text-dark'>
                    Cart
                    <i class="fa-solid fa-cart-shopping ms-2"></i>
                    <Badge className='bg-success text-white rounded-5 p-2'>{cart.length}</Badge>
                </Link>
                </Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header