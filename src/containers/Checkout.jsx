import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

import '../styles/components/Checkout.css'

// checkout es cuando ya vas a pagar y seleccionsr el metodo de envio y llenar tus datos
const Checkout = () => {
   const { state, removeFromCart } = useContext(AppContext)

   const { cart } = state

   const handleRemove = posicion => () => {
      removeFromCart(posicion)
   }

   const handleSumTotal = () => {

      const reducer = (acumulator, currenValue) => acumulator + currenValue.price

      return cart.reduce(reducer, 0)
   }

   return (
      <div className="Checkout">

         <div className="Checkout-content">

            <h3>{(cart.length > 0) ? 'Lista de Pedidos:' : 'Sin pedidos..'}</h3>

            {cart.map((item, x) => (
               <div className="Checkout-item" key={x}>
                  <div className="Checkout-element">
                     <h4>{item.title}</h4>
                     <span>${item.price}</span>
                  </div>
                  <button type="button" onClick={handleRemove(x)}> <i className="fas fa-trash-alt" /> </button>
               </div>
            ))}

         </div>

         {(cart.length > 0) && (
            <div className="Checkout-sidebar">
               <h3>Precio Total: ${handleSumTotal()}</h3>
               <Link to="/checkout/information">
                  <button type="button">Continuar pedido</button>
               </Link>

            </div>
         )}


      </div>
   )
}


export default Checkout
