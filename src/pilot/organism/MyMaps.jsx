import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Ganti YOUR_GOOGLE_MAPS_API_KEY dengan kunci API Google Maps Anda
const mapContainerStyle = {
  height: '300px',
  width: '100%',
  maxWidth:'800px',
  margin:'auto'
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export const MyMaps = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD5JnKU4S6PCM9Bq7awTZee1TeTAG6p8wU"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

