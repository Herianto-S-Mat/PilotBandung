import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Container, Row } from 'react-bootstrap';

// Define map center coordinates for Bandung
const center = [-6.9478, 107.6410];

// Marker position (same as center)
const markerPosition = [-6.9478, 107.6410];

// Define a more precise bounding box around Bandung
const bbox = [
  center[1] - 0.0008, // minLng (reduce the spread)
  center[0] - 0.0008, // minLat (reduce the spread)
  center[1] + 0.0008, // maxLng (reduce the spread)
  center[0] + 0.0008  // maxLat (reduce the spread)
].join(',');

// Embed map URL
const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`;

export const CombinedMap = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <Container>
      <Row>
      {showMap ? (
          <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={markerPosition}>
              <Popup>
                Location: 6°56'52.4"S 107°38'29.6"E <br /> Customize this content as needed.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div style={{ height: '500px', width: '100%' }}>
            <iframe
              title="Embedded Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapUrl}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Row>
      <Row id='button-section-alamat'></Row>
    </Container>
  );
};
