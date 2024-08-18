import gif from '/add.gif'
import './organism.css'
import { Container, Row} from 'react-bootstrap';
import { PageButton } from './MyButton';


export const Banner = () => {
  return (
      <Container style={{
        textAlign: 'center',
      }}>
        <Row style={{
            backgroundImage: `url(${gif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius:'0 0 1em 1em'
          }}>
          <div style={{paddingTop: '3em', display:'flex', flexDirection:'column', justifyContent:'center', minHeight:'400px', borderRadius:'0 0 1em 1em'}} className='vh-100 bg-dark bg-opacity-75 text-light '>
            <h4 className='text'>Welcome To Web</h4>
            <h1>Pilot Bandung</h1>
            <p>" Layanan untuk membantu kenyamanan perjalanan anda "</p>
            <div style={{display:'flex',justifyContent:'center', flexWrap:'wrap', gap:'.5em', borderTop:'2px solid #FEFAE0'}} className='pt-3 text-light'>
              <PageButton link={'ada'}>
                Jasa Supir
              </PageButton>
              <PageButton link={'ada'}>
                Rental + Driver
              </PageButton>
              <PageButton link={'ada'}>
                Wisata Bandung
              </PageButton>
            </div>        
          </div>
        </Row>        
      </Container>
  );
}
