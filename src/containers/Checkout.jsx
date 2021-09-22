import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Checkout.css'

// checkout es cuando ya vas a pagar y seleccionsr el metodo de envio y llenar tus datos
const Checkout = () =>
(
   <div className="Checkout">
      <div className="Checkout-content">
         <h3>Lista de Pedidos:</h3>mano en el curso

         <div className="Checkout-item">
            <div className="Checkout-element">
               <h4>ITEM name</h4>
               <span>$10</span>
            </div>
            <button type="button"> <i className="fas fa-trash-alt" /> </button>
         </div>
         {/* 
            .
            .
            .
            .
         */}

      </div>

      <div className="Checkout-sidebar">
         <h3>Precio Total: $10</h3>
         <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
         </Link>

      </div>

   </div>
)


export default Checkout
