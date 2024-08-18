import { Container} from 'react-bootstrap'
import BrandLogo from '/main-logo.svg'
export const ErrorPage = () => {
  return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="text-center p-5">
          <img src={BrandLogo} className='w-75 mb-5 bg-danger rounded '/>
          <h3 className='text-danger'>Something Wrong in this page</h3>
          <p>
            <a href='/' className='btn bg-dark text-warning m-2'>Go to home</a>
          </p>
        </div>
      </Container>
  )
}
