import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import db  from '../../service/firebase'
import {doc, getDoc,getDocs,collection} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos,setProductos] = useState([])
  const{categoryId} = useParams()
  const getData = async () =>{
  const col = collection(db,'productos')
  
  try {

    const data= await getDocs(col)

    const resultado = data.docs.map(doc=>doc ={id:doc.id,...doc.data()})
    const group = resultado.filter((prod)=>prod.categoryId === (categoryId))
    setProductos(group.length > 0 ? group : resultado)

  } catch (error) {
      console.log('error al sincronizar con Firebase');
  }
}

useEffect(() => {

  getData()

}, [categoryId])

return (
    <div className='bg-info'>ItemListContainer
    <Link to= {'/Cart'}>Ver Carrito</Link>
        <div className="d-flex justify-content-evenly flex-wrap p-4">
          <ItemList productos={productos}/>
        </div>

    </div>
  )
}

export default ItemListContainer