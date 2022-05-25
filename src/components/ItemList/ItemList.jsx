import React from 'react'
import Item from '../Item/Item'
import Loader from '../Loader/Loader';

const ItemList = ({productos}) => {

  return (
    <>
      {productos.length > 0 ? (
        productos.map((producto,index) => (
          <div key={index}>
            {<Item id={producto.id} categoryId={producto.categoryId} title={producto.title} imagenUrl={producto.imagenUrl} description={producto.description} price={producto.price} stock={producto.stock}/>}
{/*             <Item key={index} productos={producto}/> */}
         
          </div>
        ))
      ) : (
        <h5><Loader/></h5>
      )}
    </>
  );
};
export default ItemList
