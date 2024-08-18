import { Carousel } from "react-bootstrap";
import { ContactButton } from './MyButton';
import data from '../../data/service.json';

export const Service = () => {
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
					<ContactButton to={service.link}>
						Hubungi Kami
					</ContactButton>
				</Carousel.Caption>
			</Carousel.Item>
      ))}
    </Carousel>
  );
}

