// recordar que devemos poner la tarjeta de credito en nuestro google console para activar esta api

// si queremos podemos usar esta otra opcion: https://positionstack.com/

import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {

   const [map, setMap] = useState({});

   const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCn0cv5dft9sp37a-zlLpqk6wM55mFTXsQ`;

   useEffect(async () => {

      const response = await axios(API)
      setMap(response.data.results[0].geometry.location)

   }, []);

   return map;
}

export default useGoogleAddress
