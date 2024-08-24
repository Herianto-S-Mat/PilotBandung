import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button, Container, Row } from 'react-bootstrap';

// Ganti YOUR_GOOGLE_MAPS_API_KEY dengan kunci API Google Maps Anda
const mapContainerStyle = {
  height: '300px',
  width: '100%',
  maxWidth:'800px',
  margin:'auto'
};

const center = {
  lat: -6.9478889,
  lng: 107.6415556,
};

const markerPosition = {
  lat: -6.2088,  // Koordinat penanda
  lng: 106.8456  // Koordinat penanda
};

export const MyMaps = () => {
  return (
    <Container>
      <Row>
        <LoadScript
          googleMapsApiKey="AIzaSyD5JnKU4S6PCM9Bq7awTZee1TeTAG6p8wU"
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
        </LoadScript>
      </Row>
      <Row id='button-section-alamat'></Row>
    </Container>
  );
};

export const MapComponent = () => {
  const mapUrl = "https://www.google.com/maps/dir//-6.9478889,107.6415556/@-6.9478309,107.6413193,19.85z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};
