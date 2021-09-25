// AIzaSyCn0cv5dft9sp37a-zlLpqk6wM55mFTXsQ
import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {

   const mapStyles = {
      height: "50vh",
      width: "100%"
   }

   const defaultCenter = {
      lat: 19.426761, lng: -99.1718796
   }

   return (
      <LoadScript googleMapsApiKey="AIzaSyCn0cv5dft9sp37a-zlLpqk6wM55mFTXsQ">
         <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={12}
            center={defaultCenter}
         >
            <Marker position={defaultCenter} />
         </GoogleMap>
      </LoadScript>
   )
}

export default Map
