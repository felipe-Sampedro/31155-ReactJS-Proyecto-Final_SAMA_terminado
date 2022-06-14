import React, { useContext } from 'react'
import { GlobalContext } from '../CartContext/CartContext'
import NavBar from '../NavBar/NavBar'

const CartWidget = () => {

    const {carrito} = useContext(GlobalContext)

  return (
    <div>
        <p className='p-2' style={{marginBottom:'0',fontSize:"25px"}}>{carrito.map((cw)=>cw.cantidad).reduce((prev, curr) => prev + curr, 0)}</p>
    </div>
  )
}

export default CartWidget