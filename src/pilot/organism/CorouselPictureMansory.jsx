import './organism.css'
import failed_img from '/failed-img.jpg';
import { pictures } from '../../data/data_backend';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Card, Container } from 'react-bootstrap';

export const GalleryMasonry = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    pictures
      .then((picture) => {
        const new_data = picture.reduce((acc, item) => {
          if (!acc[item.tipe_gambar]) {
            acc[item.tipe_gambar] = [];
          }
          acc[item.tipe_gambar].push(item);
          return acc;
        }, {})
        setData(new_data);
      })
      .catch((error) => {
        console.error('Failed to fetch layanan data:', error);
      });
  }, []);  

  return (
    <Container className="mt-5">
      {
        Object.keys(data)
          .filter(type => !['banner'.toUpperCase(), 'logo'.toUpperCase(), 'About Us'.toUpperCase()].includes(type.toUpperCase()))
          .map((type, i) => (
            <div className='mt-3' key={i}>
              <h5 className='border border-dark bg-dark text-warning rounded p-2 text-center'> {type.toUpperCase()} </h5>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {data[type].map((foto, j) => (
                  <Card key={j} className="mb-2 bg-warning-subtle border-warning overflow-hidden">
                    <Card.Img variant="top" 
                      src={foto.url_gambar} 
                      onError={(e) => e.target.src = failed_img} 
                      alt={foto.title} 
                    />
                    {(!['-', '', 'hide','Hide', '_'].includes(foto.nama_gambar)) && (
                    <Card.Body>
                      <Card.Title>{foto.nama_gambar}</Card.Title>
                    </Card.Body>
                    )}
                  </Card>
                ))}
              </Masonry>
            </div>
          ))
      }
      
    </Container>
  );
};
