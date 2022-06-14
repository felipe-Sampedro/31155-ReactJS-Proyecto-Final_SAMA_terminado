import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import db  from '../../service/firebase'
import {doc, getDoc,getDocs,collection} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos,setProductos] = useState([])
  const{categoryId} = useParams()
  const{brand} = useParams()
  const getData = async () =>{
  const col = collection(db,'productos')

  const estilos = {
    bgBody:{
        backgroundImage: "Url https://www.freepik.com/premium-vector/hand-painted-pastel-sky-background_13561305.htm?query=backgorund&collectionId=410&&position=13&from_view=collections)",
        backgroundAttachment: "fixed"
    }
  }
  
  try {
    
    const data= await getDocs(col)
    
    const resultado = data.docs.map(doc=>doc ={id:doc.id,...doc.data()})
    const group = resultado.filter((prod)=>prod.categoryId === (categoryId))
    const marca = resultado.filter((prod)=>prod.brand === (brand))
    // const filtro = categoryId ? resultado.filter((prod)=>prod.categoryId === (categoryId)) : data ? resultado.filter((prod)=>prod.brand === (brand)) : 'nada'
    // setProductos(group.length > 0 ? group : resultado)
    // setProductos(marca.length > 0 ? marca : resultado)
    setProductos(group.length>0 ? group : marca.length > 0 ? marca : resultado)
    
    console.log(categoryId.title);
    console.log('categoria '+categoryId);
    console.log('marca '+brand);
  } catch (error) {
      console.log('error al sincronizar con Firebase');
  }
}

useEffect(() => {

  getData()

// }, [categoryId])
}, [categoryId,brand])

return (
    <div className='container-fluid py-5 estilos.bgBody' style={{backgroundImage: `url("https://img.freepik.com/vector-gratis/fondo-lineas-dinamicas-estilo-papel_79603-1847.jpg?w=2000")`,backgroundSize:'cover', backgroundRepeat: 'no-repeat',backgroundAttachment:'Fixed'}}>
    {/* <Link to= {'/Cart'}>Ver Carrito</Link> */}
        {/* <div className="d-flex justify-content-evenly flex-wrap p-4"> */}
        <div className='row justify-content-center px-5'>
            {/* <div className='col-3'> */}
              <ItemList productos={productos}/>
            {/* </div> */}
        </div>

    </div>
  )
}

export default ItemListContainer