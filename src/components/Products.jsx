import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css'
import AppContext from '../context/AppContext';

const Products = () => {

   const { products, addToCart } = useContext(AppContext)

   // const { products } = state

   // esta forma asemos que devuelva una funcion para que sea pasado a un componente que esta referencia ala funcion devuelva una funcion
   const handleAddToCart = product => () => {
      addToCart(product)
   }

   return (
      <div className="Products">
         <div className="Products-items">
            {
               products.map(product => (
                  <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
               ))
            }
         </div>
      </div>
   )
}


export default Products
