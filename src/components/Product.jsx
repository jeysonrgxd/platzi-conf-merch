import React from 'react'

const Product = ({ product, handleAddToCart }) => {

   const { image, title, price, description } = product

   return (
      <div className="Products-item">
         {/* esto es cuando utilizamos strapy 
            <img src={`http://localhost:1337${image[0].url}`} alt="" /> 
         */}
         <img src={image} alt="" />

         <div className="Product-item-info">
            <h2>{title}
               <span> $ {price}</span>
            </h2>
            <p>{description}</p>
         </div>
         {/* usamos esta forma de referencia ala funcion handleAddToCart pero no estamos ejecutando esta funcion esta devolviendo una funcion */}
         <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
      </div>
   )
}

export default Product
