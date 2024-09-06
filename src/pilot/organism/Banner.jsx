import './organism.css';
import { Container, Row } from 'react-bootstrap';
import { banner, bannerpic } from '../../data/data_backend';
import { useEffect, useState } from 'react';

export const Banner = () => {
  const [data, setData] = useState({ judul_jasa: null, deskripsi_jasa: null });
  const [picture, setPicture] = useState({ gambar: null });

  useEffect(() => {
    banner
      .then((data_banner) => {
        setData(data_banner);
      })
      .catch((error) => {
        console.error('Failed to fetch layanan data:', error);
      });

    bannerpic
      .then((data_pic) => {
        setPicture(data_pic[0]);
        
      })
      .catch((error) => {
        console.error('Failed to fetch layanan data:', error);
      });
  }, []);

  // Extract URL from picture state
  
  const backgroundImageUrl = picture.url_gambar ? `url(${picture.url_gambar})` : '';

  return (
    <Container fluid style={{ textAlign: 'center', padding: 0, margin: 0 }}>
      <Row
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0 0 1em 1em',
          margin: '0',
          width: '100%',
        }}
      >
        <div
          style={{
            paddingTop: '3em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '400px',
            borderRadius: '0 0 1em 1em',
            width: '100%',
          }}
          className='vh-100 bg-dark bg-opacity-75 text-light'
        >
          <h3>Welcome To</h3>
          <h1 className='py-3' style={{ fontSize: '2.5em' }}>{data.judul_jasa}</h1>
          <p>" {data.deskripsi_jasa} "</p>
          <div
            id='banner_button'
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '.5em',
            }}
            className='pt-3 text-light'
          >
            {/* div#banner_button elemen target portal untuk button list jasa */}
          </div>
        </div>
      </Row>
    </Container>  
  );
};
