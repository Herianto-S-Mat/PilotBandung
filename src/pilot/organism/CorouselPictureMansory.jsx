import './organism.css'
import failed_img from '/failed-img.jpg';
import { pictures } from '../../data/data_backend';
import { useEffect, useState } from 'react';


// export const CorouselPicture = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     pictures
//       .then((picture) => {
//         const new_data = picture.reduce((acc, item) => {
//           if (!acc[item.tipe_gambar]) {
//             acc[item.tipe_gambar] = [];
//           }
//           acc[item.tipe_gambar].push(item);
//           return acc;
//         }, {})
//         setData(new_data);
//       })
//       .catch((error) => {
//         console.error('Failed to fetch layanan data:', error);
//       });
//   }, []);  
  
//   return (
//     <>
//       {
//         Object.keys(data)
//           .filter(type => !['banner', 'logo', 'About Us'].includes(type))
//           .map((type, i) => (
//             <div className='mb-5' key={i}>
//               <h5 className='mx-5 border border-dark bg-warning-subtle rounded p-2'> {type} </h5>
//             </div>
//           ))
//       }
//     </>
//   );
  
// }


// const ItemCorousel = ({data}) => {
//   return (
//     <>
//       <img 
//         alt="gambar"
//         className='img-fluid rounded border border-dark'
//         src={data.url_gambar} 
//         onError={(e) => e.target.src = failed_img}
//       />
//       {(!['-', '', 'hide','Hide', '_'].includes(data.nama_gambar)) && (
//         <>
//           <br />
//           <div className='my-2 bg-dark-subtle rounded'>
//             <b style={{textWrap:'wrap'}}>{data.nama_gambar}</b>
//           </div>
//         </>

//       )}
//     </>
//   )
// }


import React from 'react';
import Masonry from 'react-masonry-css';
import { Card, Container } from 'react-bootstrap';

const imageData = [
  // Tambahkan data gambar di sini, misalnya:
  { id: 1, src: 'https://via.placeholder.com/300x400', title: 'Gambar 1' },
  { id: 2, src: 'https://via.placeholder.com/300x300', title: 'Gambar 2' },
  { id: 3, src: 'https://via.placeholder.com/300x500', title: 'Gambar 3' },
  { id: 4, src: 'https://via.placeholder.com/300x350', title: 'Gambar 4' },
  // dan seterusnya
];

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
    <Container className="my-5">
      {
        Object.keys(data)
          .filter(type => !['banner', 'logo', 'About Us'].includes(type))
          .map((type, i) => (
            <div className='mb-5' key={i}>
              <h5 className='border border-dark bg-dark text-warning rounded p-2'> {type.toUpperCase()} </h5>
              <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data[type].map((foto, j) => (
          <Card key={j} className="mb-2 bg-warning-subtle border-warning">
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
