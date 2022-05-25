import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { catalogo } from '../../Config';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import db from '../../service/firebase';
import {doc, getDoc,getDocs,collection} from 'firebase/firestore'

const ItemDetailContainer = () => {

const {id} = useParams()
const [item, setItem] = useState([])

const getDataDetail = async () =>{
  const cold = collection(db,'productos')
  
  try {

    const data= await getDocs(cold)

    const resultadod = data.docs.map(doc=>doc ={id:doc.id,...doc.data()})
    const filtro = resultadod.find((prod)=>prod.id === id)
    setItem(filtro  ? filtro : resultadod)


  } catch (error) {
      console.log('error al sincronizar con Firebase');
  }
}


useEffect(() => {
  
  getDataDetail()

  // const detalle = new Promise((resolve,reject) =>{
  //   setTimeout(() => {
  //     resolve(filtro ? filtro : catalogo)
  //   }, 2000);

  // })

  // detalle.then((res) => setItem(res))
  // .catch((err) => console(err))


  // return () => {
  
  // }
}, [])


  return (
    <div>

      {window ? <ItemDetail item={item}/> : <Loader /> }

    </div>
  )
}

export default ItemDetailContainer