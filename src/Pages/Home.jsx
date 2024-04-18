import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Slice/wishlist';
import { addToCart } from '../Slice/cart';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';



function Home() {

    const data = useFetch('https://dummyjson.com/products');
    console.log(data);

    const dispatch = useDispatch();


  return (
    <div>
      <Row style={{marginTop:'60px'}}>
          <MDBCarousel interval={2000}>
          <MDBCarouselItem itemId={1} interval={2000}>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg' style={{height:'350px', objectFit:'cover', objectPosition:'top'}} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src='https://m.media-amazon.com/images/G/31/img23/lenovo/D/1500x300._CB594502981_.png' style={{height:'350px', objectFit:'cover', objectPosition:'top'}} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/pc/gamingacc/1500x300_hedder_1.jpg' style={{height:'350px', objectFit:'cover', objectPosition:'top'}} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/CommunitySale/2023/LP/updates/_D106945245-_WLD_OnePlus_CommunitySale_Dec23_DesktopTallHero_3000x1200._CB570514551_.jpg' style={{height:'350px', objectFit:'cover', objectPosition:'top'}} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
      </Row>

    <Row  className='ps-5 mt-5'> 
      {
        data?.length>0? data?.map((product, index) =>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',}} className='bg-body-tertiary rounded'>
            <Card.Img variant="top" src={product?.thumbnail} style={{height:'13rem'}} className='rounded'/>
            <Card.Body>
              <Card.Title style={{height:'3rem'}}>{product?.title.slice(0,22)}</Card.Title>
              <Card.Text style={{height:'9rem'}} className='itemDes'>
                <p>{product?.description.slice(0,80)}...</p> 
                <p className='text-danger fw-bold'>${product?.price}</p>
              </Card.Text>

              <div className='align-items-center justify-content-between d-flex'>
              <Button onClick={() => dispatch(addToWishlist(product))} className='btn btn-info'><i class="fa-solid fa-heart"></i></Button>
              <Button onClick={() => dispatch(addToCart(product))} className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
            </Card>
          </Col>
        )) : <p>Nothing to Display</p>
         }
    </Row>
    </div>
  )
}

export default Home