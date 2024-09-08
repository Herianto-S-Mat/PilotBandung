import React from 'react';
import { Container, Row, Col, Alert, Button, Tooltip, OverlayTrigger, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { info } from '../../data/data_backend';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

	const [copied, setCopied] = useState(false);
	const handleCopy = async(text) => {
		if(!copied){
			await navigator.clipboard.writeText(text);
			setCopied(true);
		
			setTimeout(() => {
				setCopied(false);
			  }, 2000);
			// Kembalikan teks "Salin" setelah 2 detik
		}
	};

  const [activeOverlay, setActiveOverlay] = useState(null);

  // Fungsi untuk menampilkan overlay
  const handleToggle = (id) => {
    // Jika overlay yang diklik sudah aktif, maka nonaktifkan
    if (activeOverlay === id) {
      setActiveOverlay(null);
    } else {
      // Jika ada overlay lain yang aktif, nonaktifkan dan aktifkan yang baru
      setActiveOverlay(id);
	  setTimeout(() => {
		setActiveOverlay(null);
	  }, 20000);
    }
  };
  
  return (
<Container fluid className="bg-dark mt-5" style={{borderRadius:'1em 1em 0 0'}}>
    <div id='kontak-kami' className='d-flex justify-content-center flex-wrap py-3 mx-auto border-2 border-bottom border-light'>
		{data.filter((info)=> info.entity_name!='Copyright' ).map((data_info, index) => (
			<div key={index} className='text-light m-3'>
				    <OverlayTrigger
						show={activeOverlay === index} 
						trigger="click"
						placement="top"
						rootClose 
						overlay={
							<Tooltip id="tooltip" style={{transform:'translateY(-5em)'}}>
								<p className='bg-dark p-2 bg-opacity-5 rounded'>{data_info.detail}</p>
								<div className='mb-3 w-full d-flex justify-content-center'>
									<ButtonToolbar className="position-relative">
										<ButtonGroup size="sm">
										{['Instagram','WhatsApp'].includes(data_info.entity_name)&& <Button variant="none" className="text-warning border border-warning" href={data_info.detail}>lihat</Button>}
										{['Phone'].includes(data_info.entity_name) && <Button variant="none" className="text-warning border border-warning" href={`tel:${data_info.detail}`}>panggil</Button>}
										<Button variant="none" className="text-warning border border-warning"  onClick={()=>handleCopy(data_info.detail)}>Salin</Button>
										 {copied && 
										 	<div 
												className="copied-message position-absolute text-center bg-dark border text-warning rounded shadow-sm"
												style={{
													top:'0',
													left:'0',
													width:'100%',
													transform:'translateY(-110%)',
													opacity:'50%'

												}}
											>
											 Tersalin!
										   </div>
										}
										</ButtonGroup>
									</ButtonToolbar>
								</div>
						  	</Tooltip>
						}
					>
					{/* <img src={go_to_page} alt="link" onClick={() => handleToggle(index)} /> */}
					{/* <i class="fa-brands fa-instagram"></i> */}
					<i 
						className={`${
							(data_info.entity_name =="Instagram" && "fa-brands fa-instagram") ||
							(data_info.entity_name =='Phone' && "fa-solid fa-phone") ||
							(data_info.entity_name =='WhatsApp' && "fa-brands fa-whatsapp") ||
							(data_info.entity_name =='Alamat kantor' && "fa-solid fa-location-dot")
						} fa-2xl` }
						onClick={() => handleToggle(index)}
					/>
				</OverlayTrigger>			
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
			</div>
		))}
    </div>
	<Row className='p-3'>
	{data.filter((info)=> info.entity_name=='Copyright').map((data_info, index) => (
		<div className='text-center text-warning fs-6' key={index}>
			<b>{data_info.entity_name} @ </b>
			<a>{data_info.detail}</a>
		</div>
	))}
	</Row>
</Container>
  );
};

const tooltip = (
	<Tooltip id="tooltip">
	  <strong>Holy guacamole!</strong> Check this info.
	</Tooltip>
  );