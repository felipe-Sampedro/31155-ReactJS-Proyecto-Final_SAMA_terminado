import React, { useContext, useState } from 'react'
import db from '../../service/firebase'
import {collection,getDocs,getDoc,doc, addDoc,updateDoc} from 'firebase/firestore'
import { GlobalContext } from '../CartContext/CartContext'
/* import { async } from '@firebase/util' */

const useFirebase = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    // const {setLoading}=useContext(GlobalContext)

    const fetchGetDataCollection= async () => {
        // setLoading(true)
        try {
            const data = collection(db,"productos")
            const col = await getDocs(data)
            const response = col.docs.map(doc => doc = {id:doc.id,...doc.data()})
            setProductos(response)
            // setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchGetIndividualProduct= async ({id}) => {
        // setLoading(true)
        try {
            const document = doc(db,"productos",id)
            const response = await getDoc(document)
            let result =response.data()
            setProducto({id:response.id,...result})
            // setLoading(false)
        } catch (error) {
            console.log('errorIndividual');
        }
    }


    const fetchGenerateTicket= async ({datos}) => {
        // setLoading(true)
        try {
            const col = collection(db,"ordenes")
            const order = await addDoc(col,datos)
            // setLoading(false)
            console.log(order.id);
        } catch (error) {
            console.log('error al cargar');
        }
    }


    // const fetchUpdateDoc = async ({id}) =>{
    //     const orderDoc = doc (db,"productos",id);
    //     try {
    //         await updateDoc(orderDoc,{price:8000})
    //         console.log('el precio se actualizo correctamente');
    //     } catch (error) {
    //         console.log('error');
    //     }

    // }


  return {
      producto,
      productos,
      fetchGetDataCollection,
      fetchGetIndividualProduct,
      fetchGenerateTicket,
  }
}

export default useFirebase