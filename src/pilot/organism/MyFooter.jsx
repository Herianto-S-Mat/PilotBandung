import React from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { info } from '../../data/data_backend';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CopyText from './CopyText';
import './organism.css'
import { ContactButton } from './MyButton';

export const MyFooter = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
	  info.then(
		(data_info) => {
		  setData(data_info); 
		}
	  )
	  .catch(error => {
		  console.error('Failed to fetch layanan data:', error);
	  }
	);
	}, []);
  return (
<Container fluid className="bg-dark bg-gradient text-warning mt-5" style={{borderRadius:'1em 1em 0 0'}}>
    <Row id='kontak-kami' className='pt-5 p-3'>
		{data.map((data_info, index) => (
			<span className='pb-2' key={index}>
				<b className='mb-1 fs-4 d-block'>{data_info.entity_name}</b>
				<Alert variant='warning text-wrap'>
					{data_info.detail}
					{
					['https://'].includes(data_info.detail.slice(0,8)) && 
					<>
					<div className='d-flex mt-2'>
						<Button variant='warning' className='ms-auto' href={data_info.detail}>Ke { data_info.entity_name }</Button>
					</div>
					</>
					}
					{data_info.entity_name=='Alamat'
						&& createPortal(
							<div className='d-flex mt-3'>
								<Button variant='dark' className=' mx-auto' href={data_info.detail}>
									LIHAT ALAMAT DI MAPS
								</Button>
							</div>
							,
							document.getElementById('button-section-alamat')
						) 
					}
					{data_info.entity_name=='Phone'
						&& createPortal(
							<div className="text-center">
								<h5 className="">
									Segera jadwalkan keperluan anda melalui kontak kami !!!
								</h5>
								<h1 className=" bg-light rounded">{data_info.detail}</h1>
								<div className="py-3">
								<ContactButton to={`https://wa.me/${data_info.detail}?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20layanan%20Pilot%20Bandung.`}> 
									Hubungi Kami 
								</ContactButton>
								</div>
							</div>
							,
							document.getElementById('operation-hours-contact')
						) 
					}
				</Alert>
			</span>
		))}
    </Row>
</Container>
  );
};

