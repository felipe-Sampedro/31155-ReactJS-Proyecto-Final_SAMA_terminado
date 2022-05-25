import React, { useContext } from 'react'
import { GlobalContext } from '../CartContext/CartContext'
import NavBar from '../NavBar/NavBar'

const CartWidget = () => {

    const {carrito} = useContext(GlobalContext)

  return (
    <div>

    </div>
  )
}

export default CartWidget