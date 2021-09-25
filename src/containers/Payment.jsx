// para probar el metodo de pago de paypal usamos un generados de tarjeta de prueba en la siguiente pagina despues los datos los completas nomas ya que lo que estamos utilizando de paypal es todo de prueba(sandbox en la aplicacion de tu cuenta esta todo de tallado)

import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2' // compopnente de tercero buscar en npm
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'

const Payment = () => {

   const { state, addNewOrder } = useContext(AppContext)
   const { cart, buyer } = state
   const history = useHistory()

   const paypalOptions = {
      clientId: 'AZHlgDpqA3fKTn8xbmQECW-03XQ5_dMJxsqM3PLehz4RJz3TOOFEJ0J3Kp-aAjatpfNzOnCVJwkJROhY',
      intent: 'capture',
      currency: 'USD'
   }

   const buttonStyles = {
      layout: 'vertical',
      shape: 'rect'
   }

   // convertir esto en un utileria y exportarlo en donde se use
   const handleSumTotal = () => {

      const reducer = (acumulator, currenValue) => acumulator + currenValue.price

      return cart.reduce(reducer, 0)
   }

   const handlePaymentSuccess = (data) => {

      // revisamos si fue existoso el paso, esto lo asemos por que ya probamos que datos viene y asi podemos validar
      if (data.status === 'COMPLETED') {

         // creamos la orden que guardaremos en nuestro context
         const newOrder = {
            buyer,
            product: cart,
            payment: data
         }

         // guardamos usando una funcion de nuestro context como si fuera redux
         addNewOrder(newOrder)

         history.push("/checkout/success")


      }
   }

   return (
      <div className="Payment">
         <div className="Payment-content">
            <h3>Resumen del pedido:</h3>
            {cart.map(item => (
               <div className="Paymen-item" key={item.id}>
                  <div className="Payment-element">
                     <h4>{item.title}</h4>
                     <span>
                        $
                        {''}
                        {item.price}
                     </span>
                  </div>
               </div>
            ))}
            <div className="Payment-button">
               <PayPalButton
                  paypalOption={paypalOptions}
                  buttonStyles={buttonStyles}
                  amount={handleSumTotal()}
                  onButtonReady={() => console.log('Start Payment')}
                  onSuccess={data => handlePaymentSuccess(data)}
                  onError={error => console.log(error)}
                  onCancel={data => console.log(data)}
               />
            </div>
         </div>
      </div>
   )
}

export default Payment