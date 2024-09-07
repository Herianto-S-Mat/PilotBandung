import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

// Define map center coordinates for Bandung
const center = [-6.9479, 107.6415];

// Update bbox to ensure it includes the marker
const bbox = [
  center[1] - 0.0008, // minLng
  center[0] - 0.0008, // minLat
  center[1] + 0.0008, // maxLng
  center[0] + 0.0008, // maxLat
].join(',');

// Embed map URL with marker
const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${center[0]},${center[1]}`;

const styles = {
  mapRoot: {
    height: '400px',
    width: '100%',
  },
};

export const CombinedMap = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <Container>
      <Row>
        <div style={styles.mapRoot}>
          <iframe
            title="Embedded Map"
            width="100%"
            height="100%"
            className='rounded border border-2 border-dark'
            src={mapUrl}
            allowFullScreen
          ></iframe>
        </div>
      </Row>
      <Row id='button-section-alamat'>
      <div className='d-flex mt-3'>
        <Button variant='dark' className=' mx-auto' href={mapUrl}>
            LIHAT ALAMAT DI MAPS
          </Button>
        </div>
      </Row>
    </Container>
  );
};
