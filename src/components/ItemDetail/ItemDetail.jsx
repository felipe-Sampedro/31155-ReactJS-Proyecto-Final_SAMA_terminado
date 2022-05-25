import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../CartContext/CartContext';
import ItemCount from '../ItmenCount/ItemCount'


const ItemDetail = ({item}) => {

    const [cantCompra, setCantCompra] = useState(0)

    function onAdd(quantityToAdd,ref){
        console.log('La cantidad agregada al carrito es: ' + quantityToAdd +' de la referencia '+ ref);
        setCantCompra(quantityToAdd)
    }

    const [state, setState] = useState([])

    const {carrito,AddToCart,isInCart}=useContext(GlobalContext)
    // const [windowcount, setWindowCount] = useState({id:window.id,title:window.title,stock:window.stock})
/*     const [windowcount, setWindowCount] = useState({}) */



  return (
    <div>
        <section className="py-1">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.imagenUrl} alt="..." /></div>
                    <div className="col-md-6" style={{backgroundColor:"lightgray"}}>
                        <h1 className="display-5 fw-bolder">{item.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>PRECIO: {item.price}</span>
                        </div>
                        <p className="lead">{item.description}</p>
                        <div className='d-flex justify-content-center' /* style={{width:'250px'}} */>
                        
                        {!isInCart(item.id) ?
                            <ItemCount item={item} onAdd={onAdd} quantityToAdd={cantCompra}/>
                        : 
                            <Link to="/cart">
                                <button className='btn btn-success m-2'>Ver carrito</button>
                             </Link>
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ItemDetail