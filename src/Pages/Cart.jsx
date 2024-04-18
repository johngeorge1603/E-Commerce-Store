import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart } from '../Slice/cart'
import { clearCart } from '../Slice/cart'





function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const cartTotal = () => {
    if(cartArray.length>0) {
      setTotal(cartArray.map(item => item.price).reduce((a,b) => a+b,0))
    }
    else {
      setTotal(0)
    }
  }

  const handleClear = () => {
    dispatch(clearCart());
    alert(`Order has been placed!`);
    navigate('/')
  }

  useEffect(() => {
    cartTotal()
  },[cartArray])

  return (
    <div style={{marginTop:'100px'}} className='pe-5 pb-4'>
      {
        cartArray.length>0? 

        <div className='row mt-5 '>

          <div className='col-lg-8 text-center mx-auto'>
            <table className='table shadow border border-dark '>
              <thead >
                <tr className='fs-6'>
                  <th className='bg-info text-light'>#</th>
                  <th className='bg-info text-light'>Product</th>
                  <th className='bg-info text-light'>Image</th>
                  <th className='bg-info text-light'>Price</th>
                  <th className='bg-info text-light'>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartArray.map((product, index) => (
                    <tr key={index}>
                  <td>{index+1}</td>
                  <td className=''>{product.title}</td>
                  <td><img className='rounded-pill' src= {product.thumbnail} alt="" height={'50px'}/></td>
                  <td>${product.price}</td>
                  <td><Button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-danger'><i class="fa-solid fa-trash-can text-light"></i></Button></td>
                </tr>
                  ))
                }
                
              </tbody>
            </table>
          </div>

          <div className='col-3'>
              <div className='border border-dark mb-3 bg-body-tertiary p-3 w-100 rounded-3'>
                  <h5 className='text-info text-center fw-bold mb-3'>
                    CART SUMMARY
                  </h5>
                  <h6>Total Products: <span className='text-danger'>{cartArray.length}</span></h6>
                  <h6>Total Price: <span className='text-success'>${total}</span></h6>
                  <div className='text-end'>
                    <button onClick={() => handleClear()} className='btn btn-warning mt-5 rounded fw-bold'>Proceed</button>
                  </div>
              </div>

          </div>

        </div>

        :

        <div className='d-flex flex-column align-items-center justify-content-between'>
          <p className='text-danger fs-4 bg-body-tertiary p-4 rounded-5 border'>Cart Empty :/</p>
          <Link style={{textDecoration:'none'}} className='btn btn-primary rounded' to={'/'}>
          Back to Home
          </Link>
        </div>

      }
    </div>
  )
}

export default Cart