import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Slice/wishlist';
import { addToCart } from '../Slice/cart';


function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch();

  const wishlistToCart= (product) => {
    dispatch(removeFromWishlist(product.id));
    dispatch(addToCart(product))
  }
  return (
    <Row style={{marginTop:'100px'}} className='ps-5 pb-4'> 
      {
        wishlistArray?.length>0? wishlistArray?.map((product, index) =>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',}} className='bg-body-tertiary rounded'>
            <Card.Img variant="top" src={product?.thumbnail} style={{height:'13rem'}} className='rounded'/>
            <Card.Body>
              <Card.Title style={{height:'3rem'}}>{product?.title.slice(0,22)}</Card.Title>
              <Card.Text style={{height:'9rem'}}>
                <p>{product?.description.slice(0,80)}...</p>
                <p className='text-danger fw-bold'>${product?.price}</p>
              </Card.Text>

              <div className='align-items-center justify-content-between d-flex'>
              <Button onClick={() => dispatch(removeFromWishlist(product.id))} className='btn btn-danger'><i class="fa-solid fa-trash-can text-light"></i></Button>
              <Button onClick={() => wishlistToCart(product)} className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
            </Card>
          </Col>
        )) : <div className='d-flex flex-column align-items-center justify-content-between'>
          <p className='text-danger fs-4 bg-body-tertiary p-4 rounded-5 border'>Wishlist Empty :/</p>
          <Link style={{textDecoration:'none'}} className='btn btn-primary rounded' to={'/'}>
          Back to Home
          </Link>
        </div>
         }
    </Row>
  )
}

export default Wishlist