import React from 'react'

const Helpers = () => {

    const validarTodoLleno = (email,nombre,apellido,celular)=>{
        if (email.length >0  && nombre.length >0 && apellido.length >0 && celular.length >0){
            true
        } 
        else {
             false
        }
    }


  return (
    <div>
        
    </div>
  )
}

export default Helpers