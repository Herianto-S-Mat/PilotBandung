
import { ConsultButton, ContactButton, PageButton } from './MyButton';
import { layanan } from "../../data/data_backend";
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { link_wa } from '../../data/wa';
import { Alert } from 'react-bootstrap';

export const Service = () => {
	const [services, setServices] = useState([]);

    useEffect(() => {
        layanan
            .then(data => {
				let arr = [];
				for(var i = 0; i< data.data.length; i++){
					if (data.data[i].no_jasa !== 4){
							arr.push(data.data[i]);
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
		{services.map((service, i) => (
		  <div className="col-12 col-md-6 col-lg" key={i}>
			{/* <div className='shadow rounded p-2 pt-2 pb-4 mb-5 bg-opacity-75'> */}
			<Alert variant={'warning'}>
				<h3 className='py-3 mb-3 text-start border-bottom border-2 border-dark'>{service.judul}</h3>
				<p className='px-3 mb-2 text-start'>
					{service.url_gambar}
				</p>
				<p className='px-3 mb-2 text-end'>
					<ConsultButton to={service.url_wa}>
						konsultasi
					</ConsultButton>
				</p>
				<p className='px-3 mb-2 text-start'>
					<a href={link_wa}>{'baca selengkapnya'}</a>
				</p>
				<ContactButton to={service.url_wa}>
					Hubungi kami
				</ContactButton>
				{createPortal(
					<PageButton link={service.url_wa}>
						{service.judul}
					</PageButton>
					,
					document.getElementById('banner_button')
				)}
			</Alert>
			{/* </div> */}
		  </div>
		))}	
		</div>
	  </div>
	);
  }