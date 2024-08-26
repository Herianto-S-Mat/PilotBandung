
import { ConsultButton, WaButton, PageButton, ContactButton } from './MyButton';
import { layanan } from "../../data/data_backend";
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { link_wa } from '../../data/wa';
import { Alert } from 'react-bootstrap';
import { ModalService } from './ModalService';

export const Service = () => {
	const [show, setShow] = useState(null);
  
  
	const handleClose = () => setShow(null);

	const [services, setServices] = useState([]);
    useEffect(() => {
        layanan
            .then(data => {
				let arr = [];
				for(var i = 0; i< data.length; i++){
					if (data[i].no_jasa !== 4){
							arr.push(data[i]);
					}
				}
                setServices(arr); 
            })
            .catch(error => {
                console.error('Failed to fetch layanan data:', error);
            });
    }, []);
	return (		
		<div className="container text-center">
		<div className="row">
		{services.map((service) => (
		  <div className="col-12 col-md-6 col-lg" key={service.no_jasa}>
			<Alert variant={'warning'}>
				<h3 className='py-3 mb-3 text-start border-bottom border-2 border-dark'>{service.judul}</h3>
				<p className=' mb-2 text-start text-justify'>
					{service.url_gambar}
					<br />
					<a className='text-decoration-underline' onClick={() => setShow(service.no_jasa)}>{'baca selengkapnya'}</a>
					{
						show==service.no_jasa && <ModalService show={true} handleClose={handleClose} jasa={service} />
					}
				</p>

				<p className='mt-4 text-end'>
					<ConsultButton message={service.url_wa}>
						konsultasi
					</ConsultButton>
				</p>
				<WaButton message={service.url_wa}>
					Hubungi kami
				</WaButton>
				<ContactButton>
					Hubungi kami
				</ContactButton>
				{createPortal(
					<PageButton message={service.url_wa}>
						{service.judul}
					</PageButton>
					,
					document.getElementById('banner_button')
				)}
			</Alert>
			{/* <ModalService show={show} handleClose={handleClose} modalContent={modalContent} /> */}
		  </div>
		))}	
		</div>
	  </div>
	);
  }