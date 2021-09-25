import { useState } from 'react';
import initialState from '../initialState'

const useInitialState = () => {

   const [state, setState] = useState(initialState)

   // creamos las funciones que cambiaran el estado asi como un reducers o acciones que tendra nuestro context o estado global, recibiremos el payload

   // creamos esta funcion para agregar al carrito
   const addToCart = payload => {
      setState({
         ...state,
         cart: [...state.cart, payload]
      })
   }

   // eliminar del carrito
   const removeFromCart = payload => {
      setState({
         ...state,
         // cart: state.cart.filter(item => item.id !== payload.id)
         cart: state.cart.filter((_, posicion) => posicion !== payload)
      })
   }

   const addToBuyer = payload => {
      setState({
         ...state,
         buyer: [...state.buyer, payload]
      })
   }

   const addNewOrder = payload => {
      setState({
         ...state,
         orders: [...state.orders, payload]
      })
   }

   return {
      state,
      addToCart,
      removeFromCart,
      addToBuyer,
      addNewOrder
   }

}

export default useInitialState

