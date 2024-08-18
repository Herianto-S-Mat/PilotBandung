import { Link } from 'react-router-dom';
import wa from '/wa.svg'
export const ContactMe = () => {
	const phoneNumber = '+6282129100990'; // Ganti dengan nomor telepon yang diinginkan
  const message = encodeURIComponent(
`saya emesan 
`
);
  return (
    <div className='buble p-2'>
        <Link to={`https://wa.me/${phoneNumber}?text=${message}`} className='text-center'>
        {/* <a href={`https://wa.me/${phoneNumber}?text=${message}`} className='text-center'> */}
            <img src={wa} alt="icon" />
        </Link>
    </div>
  )
}
