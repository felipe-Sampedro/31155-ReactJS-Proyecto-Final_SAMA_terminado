import React, { useContext, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
// import ItemCount from '../ItmenCount/ItemCount'
import { Link, NavLink } from 'react-router-dom'
import { GlobalContext } from '../CartContext/CartContext'

const Card = ({id,categoryId,title,imagenUrl,description,price,stock}) => {

  // const [state, setState] = useState({id,title,stock,imagenUrl})
  const {carrito,AddToCart}=useContext(GlobalContext)

  return (
    <div className="card my-2" style={{width:"18rem"}}>
        <img src={imagenUrl} className="card-img-top" style={{width:"286px", height:'288px'}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
{/*             <p className="card-text" style={{height:'140px'}}>{description}</p> */}
            {/* <p>{price}</p> */}
            {/* <ItemCount stock={stock}/> */}
{/*             <a href="" className="btn btn-primary"  >Ver Detalle */}

            {/* <div>
              <button className='btn btn-info m-2' onClick={()=> AddToCart(state)}>Agregar al Carrito</button>
            </div> */}

            <Link to= {`/item-detail/${id}`} className="btn btn-primary">Ver Detalle</Link>
            
{/*             </a> */}
        </div>
    </div>
  )
}

export default Card