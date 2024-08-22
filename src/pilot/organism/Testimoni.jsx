import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './organism.css'
import placeholder_img from '/image.png';
import data from '../../data/coment.json'


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

export const Testimoni = () => {
  const coment = data
  return (
    <Carousel responsive={responsive}>
      {coment.map((data, i)=>(
        <div key ={i} className='text-center mx-5 bg-dark  rounded p-1'>
          <ItemCorousel data ={data}/>
        </div>
      ))}
    </Carousel>
  );
}


const ItemCorousel = ({data}) => {
  return (
    <>
      <img className='w-100 img-fluid rounded'
        src={data.url?data.url:placeholder_img} 
      />
    </>
  )
}
