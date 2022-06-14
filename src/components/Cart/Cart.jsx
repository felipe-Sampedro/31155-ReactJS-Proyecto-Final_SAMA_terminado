import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../CartContext/CartContext'
import Formulario from '../Formulario/Formulario'

const Cart = () => {

  const { carrito, removeItem, clear, qtyCompra } = useContext(GlobalContext)
  const totalcosto = carrito.map((c) => c.price * c.cantidad).reduce((prev, curr) => prev + curr, 0)

  return (
    <>
      <div className='container border my-5'>
        <div className='row'>
          <div className='border col-12 col-md-6 overflow-auto' style={{height:'60vh'}}>
            {carrito.length > 0 ? carrito.map((item, index) => (
              <div key={index} className='d-flex justify-content-center p-2 border m-2 my-3 align-items-center mx-2'>
                <img className="card-img-top mb-5 mb-md-0" src={item.imagenUrl} style={{ width: '150px', height: '150px' }} />
                <div>
                  <div className='border' style={{width:"330px"}} >
                   <p className='mb-0'><strong>{item.title}</strong></p>  
                  </div> 
                  <div className='border d-flex justify-content-between align-items-center px-2'>
                    <p className='mb-0'>CANTIDAD</p>
                    <strong>{item.cantidad}</strong>
                  </div>
                  <div className='border d-flex justify-content-between align-items-center px-2'>
                    <p className='mb-0'>COSTO UNITARIO</p>
                    <strong>${item.price}</strong>
                  </div>
                  <div className='border d-flex justify-content-between align-items-center px-2'>
                    <p className='mb-0'>SUBTOTAL</p>
                    <strong>${item.price * item.cantidad}</strong>
                  </div>
                </div>
                <button className='btn btn-warning m-3 d-flex ' style={{ height: '40px' }} onClick={() => removeItem(item.id)}>Borrar</button>
              </div>
              

            )) : 
              <div className='m-5'>
                <h1>EL CARRITO ESTA VACIO</h1>
                <Link to="/">
                  <button className='btn btn-info'>VOLVER A COMPRAR</button>
                </Link>
              </div>
            }

          </div>
          
          {carrito.length > 0 ? (
            <div className='border col col-12 col-md-6 py-5'>
                <Formulario total={totalcosto} compra={carrito} />
            </div>) :
          <></>
        }


        {carrito.length > 0 ? (
          <div className='my-2'>
            {/* <h1>Total: ${carrito.map((c) => c.price * c.cantidad).reduce((prev, curr) => prev + curr, 0)}</h1> */}
            <h1>Total: ${totalcosto}</h1>
          </div>) :
          <></>
        }

        {carrito.length !== 0 ? 
        <div>
          <button className='btn btn-danger m-1' onClick={() => clear()}>BORRAR TODO</button>  
          {/* <button className='btn btn-success m-2'>Terminar mi compra</button> */}
        </div> 
        : <p></p>}

        </div>
      </div>

    </>

  )
}

export default Cart