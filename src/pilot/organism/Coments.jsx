import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './organism.css'
import placeholder_img from '/image.png';
// import data from '../../data/coment.json'
import { testimoni } from '../../data/data_backend';
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

export const Coment = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    testimoni
      .then((data_testimoni) => {
        console.log(data_testimoni)
        setData(data_testimoni);
      })
      .catch((error) => {
        console.error('Failed to fetch layanan data:', error);
      });
  }, []);

  // const coment = data
  return (
    <Carousel responsive={responsive} className='pb-5'>
      {data
        .filter(item => item.toggle)  // Filter hanya item dengan toggle bernilai true
        .map((data, i) => (
          <div key={i} className="corousel-multi-item mx-2 border rounded p-2 shadow bg-warning-subtle">
            <ItemCorousel data={data} />
          </div>
        ))
      }
    </Carousel>
  );
}


const ItemCorousel = ({data}) => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <div className='w-100 text-end px-2'>
          <h5>{data.nama}</h5>
          <i className='fst-italic small'>{data.kota_asal}</i>
        </div>
        <img 
          src={data.url_foto} 
          onError={(e) => e.target.src = placeholder_img}
          style={{
            width: '100px', 
            height: '100px', 
            // borderRadius: '20%', 
            border: '1px solid yellow',
            // boxShadow: '0 2px 4px',
            objectFit: 'cover' // Ensures the image maintains aspect ratio
          }}
          alt="Profile"
          className='rounded border border-light'
        />
      </div>
      <div className='pt-2'>
        <p 
          style={{
            textAlign:'justify',
            // marginInline:'1em',
            minHeight:'5em'
          }}
          className='bg-light p-2 rounded'
        >
          {data.kritik_saran}
        </p>
        <div className='d-flex justify-content-between'>
          <div className='fst-bold'>
            {data.jasa}
          </div>
          <div>
          {Array(data.rating)
              .fill()
              .map((_, index) => (
                <span key={index}>❤️</span>
          ))}
          {Array(5-data.rating)
              .fill()
              .map((_, index) => (
                <span key={index}>🩶</span>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}


const ItemCorouselc = ({data}) => {
  return (
    <>
      <img 
        src={data.url_foto!='-'?data.url_foto:placeholder_img} 
        style={{
          width:'100px', 
          height:'100px', 
          transform:'translateY(-50px)', 
          borderRadius:'50%', 
          border:'1px solid yellow',
          boxShadow:'0 2px 4px 4px white'
        }}
      />
      <div style={{transform:'translateY(-40px)'}}>
        <h5>{data.nama}</h5>
        <i>" {data.kota_asal} "</i>
        <br/>
        <p style={{
          textAlign:'justify',
          marginInline:'1em'
        }}>
          {data.kritik_saran}
        </p>
      </div>
    </>
  )
}