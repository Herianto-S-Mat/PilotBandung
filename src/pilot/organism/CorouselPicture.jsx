import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './organism.css'
import placeholder_img from '/image.png';
import { pictures } from '../../data/data_backend';
import { useEffect, useState } from 'react';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 1, 
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

export const CorouselPicture = () => {
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
    <>
      {
        Object.keys(data)
          .filter(type => !['banner', 'logo', 'About Us'].includes(type))
          .map((type, i) => (
            <div className='mb-5' key={i}>
              <h5 className='mx-5 border border-dark bg-secondary text-light rounded p-2'>
                ({data[type].length}) {type}
              </h5>
              <Carousel responsive={responsive} className='mx-5'>
                {data[type].map((item, j) => (
                  <div key={j} className='text-center mx-2 rounded p-1'>
                    <ItemCorousel data={item} />
                  </div>
                ))}
              </Carousel>
            </div>
          ))
      }
    </>
  );
  
}


const ItemCorousel = ({data}) => {
  return (
    <>
      <img 
        alt="gambar"
        className='img-fluid rounded border border-dark'
        style={{maxHeight:'260px', maxWidth:'70%'}}
        src={data.url_gambar?data.url_gambar:placeholder_img} 
      />
      {/* <br />
      <div className='my-2 bg-dark-subtle rounded'>
        <b style={{textWrap:'wrap'}}>{data.nama_gambar}</b>
      </div> */}
    </>
  )
}
