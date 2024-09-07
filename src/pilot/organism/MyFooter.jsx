import React from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { info } from '../../data/data_backend';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CopyText from './CopyText';
import './organism.css'
import { ContactButton, WaButton } from './MyButton';
import go_to_page from '/goto_page.svg'

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
    <Row id='kontak-kami' className='pt-5 p-3 w-100'>
		{data.filter((info)=> info.entity_name!='Copyright' ).map((data_info, index) => (
			<Col md={6} xxl={3} key={index}  style={{ display: data_info.entity_name.includes('google') ? 'none' : '' }}>
				<p className='mb-1 fs-5'>
					{data_info.entity_name}
				</p>				
				<Alert variant='warning' className='text-wrap d-flex align-items-center'>
					<span className='me-auto'>
						  {data_info.entity_name !== "Phone" && !data_info.entity_name.includes("kantor")
							? `Visit our ${data_info.entity_name}`
							: data_info.entity_name.includes("kantor")
							? data_info.detail
							: `Contact us via ${data_info.detail}`}
					</span>
					{['https://'].includes(data_info.detail.slice(0,8)) && (
						<Button variant='none' className='ms-auto' href={data_info.detail}>
						<img src={go_to_page} alt="link" />
						</Button>)
					}
					{data_info.entity_name=='Phone'
						&& createPortal(
							<div className="text-center">
								<h5>
									Segera jadwalkan keperluan anda melalui kontak kami !!!
								</h5>
								<h1 className=" bg-light rounded py-3">{data_info.detail}</h1>
								<WaButton message={`Halo!!! Saya mau menanyakan layanan Pilot Bandung, saya ada jadwal`}> 
									Hubungi Kami 
								</WaButton>
								<ContactButton> 
									Hubungi Kami 
								</ContactButton>
							</div>
							,
							document.getElementById('operation-hours-contact')
						) 
					}
				</Alert>
			</Col>
		))}
    </Row>
	<Row className='p-3'>
	{data.filter((info)=> info.entity_name=='Copyright').map((data_info, index) => (
		<Alert variant='light' className='text-center' key={index}>
			<b>{data_info.entity_name} @ </b>
			<a>{data_info.detail}</a>
		</Alert>
	))}
	</Row>
</Container>
  );
};

