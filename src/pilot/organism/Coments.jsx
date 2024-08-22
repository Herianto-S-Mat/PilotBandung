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

export const Coment = () => {
  const coment = data
  return (
    <Carousel responsive={responsive} className='pt-5'>
      {coment.map((data, i)=>(
        <div key ={i} className='text-center .corousel-multi-item alert alert-dark mx-2'>
          <ItemCorousel data ={data}/>
        </div>
      ))}
    </Carousel>
  );
}


const ItemCorousel = ({data}) => {
  return (
    <>
      <img 
        src={data.url?data.url:placeholder_img} 
        style={{
          width:'100px', 
          height:'100px', 
          transform:'translateY(-50px)', 
          borderRadius:'50%', 
          border:'5px solid white'
        }}
      />
      <div style={{transform:'translateY(-40px)'}}>
        <h5>{data.name}</h5>
        <i>" {data.title} "</i>
        <br/>
        <p style={{
          textAlign:'justify',
          marginInline:'1em'
        }}>
          {data.comentnya}
        </p>
      </div>
    </>
  )
}
