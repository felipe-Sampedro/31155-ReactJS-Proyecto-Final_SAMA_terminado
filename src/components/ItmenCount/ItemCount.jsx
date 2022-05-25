import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../CartContext/CartContext'
import CartWidget from '../CartWidget/CartWidget'
import NavBar from '../NavBar/NavBar'

const ItemCount = ({item,onAdd,quantityToAdd}) => {
    
    const [counter,setCounter] = useState(1)
    
/*     const [quantityToAdd, setQuantityToAdd] = useState(null) */

    const {carrito,AddToCart,isInCart}=useContext(GlobalContext)

    function sumar(){
        counter < item.stock && setCounter(counter+1)
    }

    function restar(){
        counter > 1 && setCounter(counter-1)
    }


  return (
    
    <div>
        <p><strong>stock disponible: </strong>{item.stock}</p>
        <div className='d-flex justify-content-between p-2'>
            {quantityToAdd ===0 ?(
               <> 
                    <button onClick={restar}>-</button>
                        <p>{counter}</p>
                    <button onClick={sumar}>+</button>
                </>
            ):(
                <></>
            )}

        </div>
        <div className="d-flex justify-content-center ">
             
            {!isInCart(item.id) ? (
                <button onClick={()=> AddToCart(item,counter)} className='btn btn-outline-dark flex-shrink-0 p-1 m-2'> 
                    Agregar al carrito
                </button>

                ) : (
                    <></>                    
                )}  
            
        </div>
    </div>
  )
}
export default ItemCount

