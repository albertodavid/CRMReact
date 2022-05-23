import React from 'react'
import FormUser from '../components/FormUser'

const NuevoCliente = () => {
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900 '>Nuevo Cliente</h1>
        <p>Llena los siguientes campos para registrar un cliente</p>
        <FormUser />
    </>
  )
}

export default NuevoCliente