import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext, { GlobalContext } from '../CartContext/CartContext'
import useFirebase from '../Hooks/useFirebase'

const Formulario = ({total,compra}) => {
   const {clear} = useContext(GlobalContext)
  // const {clear} = CartContext()
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


    const onSubmit = (e)=>{
      e.preventDefault();
/*       if (validarTodoLleno([email,nombre,apellido,celular])){
        Swal.fire({
          title:"Oopps",
          text:"Faltan campos por completar",
          icon:"error"
        })
        return;
      }
      Swal.fire({
        title:"Genial",
        text:"Su orden de compra se genero correctamente",
        icon:"Succes"
      }) */
      fetchGenerateTicket({datos:formulario})
      clear()
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormulario({...formulario,buyer:{...formulario.buyer,[name]:value}})
    }

  return (
    <form action="" className='container'>

      <h3>DATOS PERSONALES</h3>
        <div>
            <input className="form-control mb-3" type="text" name="email" value={email} onChange={handleChange} placeholder="E-mail*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="Nombre*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="apellido" value={apellido} onChange={handleChange} placeholder="Apellido*" aria-label="default input example"></input>
            <input className="form-control mb-3" type="text" name="celular" value={celular} onChange={handleChange} placeholder="Celular*" aria-label="default input example"></input>
        </div>
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