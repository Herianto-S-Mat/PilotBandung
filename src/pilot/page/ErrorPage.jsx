import { Container} from 'react-bootstrap'
import BrandLogo from '/untitled.png'
export const ErrorPage = () => {
  return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="text-center p-5">
          <h1 className='pb-3'>PILOT BANDUNG</h1>
          <img src={BrandLogo} className='mb-5 bg-danger rounded' style={{width:'300px', maxWidth:'50%'}}/>          
          
          <p className='text-danger'>
            Maaf jika mengalami gangguan!!!
            <br />
            <br />
            Halaman ini sedang dalam proses pengembangan sehingga belum berfungsi optimal
          </p>
          
          {/* <p>
            <a href='/' className='btn bg-dark text-warning m-2'>Go to home</a>
          </p> */}
        </div>
      </Container>
  )
}
