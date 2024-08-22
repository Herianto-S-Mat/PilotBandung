import { Carousel, Container } from "react-bootstrap";
import { ConsultButton, ContactButton } from './MyButton';
import data from '../../data/service.json';
import { layanan } from "../../data/layanan";
import { useEffect, useState } from "react";

export const Services = () => {
	
  return (
    <Carousel controls={false}>
      {data.map((service) => (
        <Carousel.Item interval={2000} key={service.id} >
				<div
					className="rounded"
					style={{
						height: "400px",
						backgroundImage: `url(${service.imageUrl}&grayscale)`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
				/>
				<Carousel.Caption className='text-dark bg-light rounded p-2 mb-5 bg-opacity-75 border border-2 border-warning'>
					<h2>{service.title}</h2>
					<p>{service.description}</p>
					<p>{service.description}</p>
					<ContactButton to={service.link}>
						Hubungi Kami
					</ContactButton>
				</Carousel.Caption>
			</Carousel.Item>
      ))}
    </Carousel>
  );
}

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
				console.log(arr); // Set the data into state
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
			<div className='text-dark shadow rounded p-2 pt-2 pb-4 mb-5 bg-opacity-75'>
				<h3 className='py-3 mb-3 text-start border-bottom border-2'>{service.judul}</h3>
				<p className='px-3 mb-2 text-start'>
					{service.url_gambar}
				</p>
				<p className='px-3 mb-2 text-end'>
					<ConsultButton to={service.url_wa}>
						konsultasi
					</ConsultButton>
				</p>
				<p className='px-3 mb-2 text-start'>
					<a href="">{'baca selengkapnya'}</a>
				</p>
				<ContactButton to={service.url_wa}>
					Hubungi kami
				</ContactButton>
			</div>
		  </div>
		))}	
		</div>
	  </div>
	);
  }