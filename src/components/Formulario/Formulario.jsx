import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext, { GlobalContext } from '../CartContext/CartContext'
import Swal from 'sweetalert2'
// import {validarTodoLleno} from '../Helpers/Helpers'
import useFirebase from '../Hooks/useFirebase'

const Formulario = ({total,compra}) => {
   const {clear} = useContext(GlobalContext)
   const {validarTodoLleno} = useContext(GlobalContext)
  const{fetchGenerateTicket}=useFirebase()
    
    const [formulario, setFormulario] = useState({
        buyer:{
            email:"",
            nombre:"",
            apellido:"",
            celular:""
        },
        total:total,
        items:compra,
    })

    const [error, setError] = useState({})

    const {
        buyer:{email,nombre,apellido,celular}}=formulario

      console.log('el email es '+email);
      console.log(validarTodoLleno(email,nombre,apellido,celular));

    const onSubmit = (e)=>{
      e.preventDefault();
      if (validarTodoLleno(email,nombre,apellido,celular)==false){
        Swal.fire({
          title:"ERROR",
          text:"Faltan campos obligatorios(*) por completar",
          icon:"error"
        })
        return;
      }
      Swal.fire({
        title:"PEDIDO APROBADO",
        text:"Su orden de compra se genero correctamente",
        icon:"Success",
        timer:5000
      })

      fetchGenerateTicket({datos:formulario})
      clear()
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormulario({...formulario,buyer:{...formulario.buyer,[name]:value}})
    }

  return (
    
    <form action="" onSubmit={onSubmit} className='container border'>

      <h3>DATOS PERSONALES</h3>
      {Object.keys(formulario.buyer).map((key,index)=>(
            <input 
            key={index}
            className="form-control mb-3" 
            type="text" 
            name={`${key}`} 
            value={key.value} 
            onChange={handleChange} 
            placeholder={`${key}*`} 
            aria-label="default input example">
            </input>

      ))}
        {/* <div>
            <input className="form-control mb-3" type="text" name="email" value={email} onChange={handleChange} placeholder="E-mail*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="Nombre*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="apellido" value={apellido} onChange={handleChange} placeholder="Apellido*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="celular" value={celular} onChange={handleChange} placeholder="Celular*" aria-label="default input example"></input>
        </div> */}
        <div>
          <button className='btn btn-primary m-3' onClick={onSubmit}>TERMINAR LA COMPRA</button>
            <Link to="/">
                <button className='btn btn-secondary m-3'>VOLVER A COMPRAR</button>
            </Link>
        </div>
    </form>
  )
}

export default Formulario