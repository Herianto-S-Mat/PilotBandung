import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import placeholder_img from '/image.png';
import true_star from '/star1.svg';
import false_star from '/star0.svg';
import { testimoni } from '../../data/data_backend';
import './organism.css';
import 'react-photo-view/dist/react-photo-view.css';


// Responsive settings for Carousel
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

// Main Testimoni component
export const Testimoni = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    testimoni
      .then((data_testimoni) => {
        setData(data_testimoni);
      })
      .catch((error) => {
        console.error('Failed to fetch layanan data:', error);
      });
  }, []);

  return (
    <Carousel responsive={responsive} className='pb-5'>
      {data
        .filter(item => item.toggle)
        .map((data, i) => (
          <div key={i} className="carousel-multi-item mx-2 border border-dark rounded p-2 shadow bg-warning-subtle">
            <ItemCorousel data={data} />
          </div>
        ))}
    </Carousel>
  );
}

// Component to display each item in the carousel
const ItemCorousel = ({ data }) => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <div className='w-100 text-end px-2 text-dark'>
          <h4 className='fst-bolder' style={{fontWeight:'bold', textShadow:'1px 1px orange'}}>{data.nama}</h4>
          <i className='fst-italic small' style={{fontWeight:'bold', textShadow:'.2px .2px white'}}>{data.kota_asal}</i>
        </div>
        <PhotoViewWrapper url_foto={data.url_foto} />
      </div>
      <div className='pt-2'>
        <p
          style={{ minHeight: '5em' }}
          className='border border-dark bg-light mt-2 p-2 rounded'
          dangerouslySetInnerHTML={{ __html: data.kritik_saran.replace(/\n/g, '<br />') }}
        />
        <div className='d-flex justify-content-between align-items-center'>
          <div className='fst-bold bg-light border border-dark px-1 rounded w-100'>
            {data.jasa}
          </div>
          <RatingStars rating={data.rating} />
        </div>
      </div>
    </>
  );
}

// Component to handle photo view functionality with error handling
const PhotoViewWrapper = ({ url_foto }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    e.target.src = placeholder_img;
    setImageError(true);
  };

  return imageError ? (
    <img
      src={placeholder_img}
      style={{
        width: '100px',
        height: '100px',
        objectFit: 'cover',
      }}
      alt="Profile"
      className='rounded border border-dark'
    />
  ) : (
    <PhotoProvider>
      <PhotoView src={url_foto}>
        <img
          src={url_foto}
          onError={handleImageError}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
          }}
          alt="Profile"
          className='rounded border border-dark'
        />
      </PhotoView>
    </PhotoProvider>
  );
}

// Component to render the star rating
const RatingStars = ({ rating }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='d-flex justify-content-center align-items-center mx-2'>
      {Array(5)
        .fill()
        .map((_, index) => (
          index < rating
          ? <img key={index} src={true_star} alt="star" style={{height:'1em', width:'1em'}} />
          : <img key={index} src={false_star} alt="star" style={{height:'1em', width:'1em'}} />
        ))
      }
      </div>
      <div className='bg-dark text-warning border border-warning rounded px-2'>{rating}/5</div>
    </div>
  );
}
