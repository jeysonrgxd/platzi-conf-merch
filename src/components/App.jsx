import React, { useState } from 'react';
import '../styles/components/app.css';

const App = () => {
   const [stateNombre, setStateNombre] = useState('jeyson');

   const handleClick = () => {
      setStateNombre((state) => `${state} ramos garcia`);
   };

   return (
      <div>
         <h1>Hola mundo como estas {stateNombre}</h1>
         <button type="button" onClick={handleClick}>
            mostrar apellido
         </button>
      </div>
   );
};

export default App;
