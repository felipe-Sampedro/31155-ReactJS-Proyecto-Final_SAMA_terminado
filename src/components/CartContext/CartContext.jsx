import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    let qtyCompra = {}
    let itemCount = 0


    const AddToCart = (producto,cantidadcomprada) => {
        
        qtyCompra={...producto,qtyCompra:cantidadcomprada}
        producto.cantidad=cantidadcomprada

        const repetido = carrito.find((carr)=>carr.id=== Number(producto.id))

        repetido ? carrito.map(p=> p.id===producto.id? qtyCompra=(cantidadcomprada) : 0) :setCarrito([...carrito,producto])

        itemCount = producto.cantidad
        console.log('cartwidget' + cantidadcomprada);
    }

    const AddItem = (item,quantity)=>{
      const agregado = {item,quantity}
    }


    const removeItem = (id)=>{
      const remover = carrito.filter((ref)=>ref.id !== id)

      setCarrito(remover)

    }

    const isInCart = (id) =>{
      return carrito.some(e => e.id===id)
    }


    const clear = () =>{
      setCarrito([])
      qtyCompra= 0
    }


  return (
    <GlobalContext.Provider value= {{carrito,setCarrito,qtyCompra,itemCount,AddToCart,removeItem,clear,isInCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext