import { useEffect, useState } from 'react';
import axios from 'axios'

import initialState from '../initialState'

// const API = "http://localhost:1337/products" esto es de nuestra backend que generamos con strapy

const API2 = "https://us-central1-gndx-fake-api.cloudfunctions.net/api" // esto del profesor donde consumimos su api de productos

const useInitialState = () => {

   const [state, setState] = useState(initialState)
   const [products, setProducts] = useState([])

   useEffect(() => {

      axios.get(API2).then(response => {
         setProducts(response.data)
      })

   }, [])

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
      products,
      addToCart,
      removeFromCart,
      addToBuyer,
      addNewOrder
   }

}

export default useInitialState

