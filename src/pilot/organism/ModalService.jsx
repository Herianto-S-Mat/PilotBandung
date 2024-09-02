import { useEffect, useState } from 'react';
import { detail_jasa } from '../../data/data_backend';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './organism.css'
import viteLogo from '/vite.svg'

export const ModalService = ({ show, handleClose, jasa })=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    detail_jasa(jasa.no_jasa).then(
      (data_detail_jasa) => {
        setData(data_detail_jasa); 
      }
    )
    .catch(error => {
        console.error('Failed to fetch layanan data:', error);
    }
  );
  },[]);
  console.log(data)
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      centered
      size="xl"
    >
      <Modal.Header 
        closeButton
        className='bg-warning-subtle'
      >
        <Modal.Title>{jasa.judul}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height:'75vh', overflow: 'auto' }}>
        {
          data.map((jasa_detail,i)=>(
            <div key={i} className='text-dark bg-light border border-dark rounded mt-4'>
              <div className='text-justify p-2'>
                <p style={{maxHeight:'250px'}}>
                  <h4 className='p-2 border-2 border-bottom border-dark'>{jasa_detail.judul}</h4>
                  <img 
                    src={viteLogo} 
                    alt="we" 
                    className='p-2 rounded float-end me-3 rounded' 
                    style={{ width: '100%', maxWidth: '200px' }} 
                  />
                  <span dangerouslySetInnerHTML={{ __html: jasa_detail.deskripsi }} />
                </p>
              </div>
            </div>
          ))
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
