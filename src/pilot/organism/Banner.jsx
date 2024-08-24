import gif from '/add.gif'
import './organism.css'
import { Container, Row} from 'react-bootstrap';
import { banner } from '../../data/data_backend';
import { useEffect, useState } from 'react';

export const Banner = () => {
  const [data, setData] = useState({judul_jasa:null, deskripsi_jasa:null});

  useEffect(() => {
    banner.then(
      (data_banner) => {
        setData(data_banner); 
      }
    )
    .catch(error => {
        console.error('Failed to fetch layanan data:', error);
    }
  );
  }, []);
  return (
      <Container style={{
        textAlign: 'center',
      }}>
        <Row style={{
            // backgroundImage: `url(${gif})`,
            backgroundImage: `url(https://adminpilotbandung.web.app/asset/Image_9.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius:'0 0 1em 1em'
          }}>
          <div style={{paddingTop: '3em', display:'flex', flexDirection:'column', justifyContent:'center', minHeight:'400px', borderRadius:'0 0 1em 1em' }} className='vh-100 bg-dark bg-opacity-75 text-light '>
            <h3>Welcome To Profile</h3>
            <h1  className='py-3' style={{fontSize:'2.5em'}}>{data.judul_jasa}</h1>
            <p>" {data.deskripsi_jasa} "</p>
            <div id='banner_button' style={{display:'flex',justifyContent:'center', flexWrap:'wrap', gap:'.5em'}} className='pt-3 text-light'>
              {/* div#banner_button elemen target portal untuk button list jasa*/}
            </div>        
          </div>
        </Row>        
      </Container>
  );
}
