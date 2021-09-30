import React, { useContext } from 'react'
import Map from '../components/Map'
import AppContext from '../context/AppContext'
import address from '../data/address'
import '../styles/components/Success.css'
// import useGoogleAddress from '../hooks/useGoogleAddress'

const Success = () => {
   const { state } = useContext(AppContext)
   const { buyer } = state

   // comentamos esto ya que no tenemos acceso ala api de geocode de google por que debo poner mi tarjeta de credito por eso usaremos un mock para la prueba 
   // const location = useGoogleAddress(buyer[0].address)
   const { results } = address
   const location = results[0].geometry

   return (
      <div className="Succes">
         <div className="Success-content">
            <h2>{buyer[0].name} Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias a tu dirección:</span>
            <div className="Success-map">
               <Map data={location} />
            </div>
         </div>
      </div>
   )
}

export default Success