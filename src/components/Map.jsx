// AIzaSyCn0cv5dft9sp37a-zlLpqk6wM55mFTXsQ
import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ data }) => {

   const mapStyles = {
      height: "50vh",
      width: "100%"
   }

   const defaultCenter = {
      lat: data.location.lat, lng: data.location.lng
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
