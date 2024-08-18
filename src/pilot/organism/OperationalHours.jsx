import { Container, Row, Col, Alert } from "react-bootstrap";
import { ContactButton } from "./MyButton";

export const OperationalHours = () => {
	const jam = [
		{
			'layanan': 'Supir Saja',
			'operational' : '24 jam'
		},
		{
			'layanan': 'Rental Mobil + Driver',
			'operational' : '24 jam'
		},
	]
  return (
    <Container>
      <Row>
        <Col>
          <div 
						className="m-auto  my-2"
						style={{
							maxWidth:'600px'
						}}
					>
						{jam.map((data)=>(
							<Alert variant={'success'}>
								<div className="text-center">
									<h5 className="text-nowrap text-start">{data.layanan} :</h5>
									<h1 className=" bg-light rounded">{data.operational}</h1>
								</div>
							</Alert>
						))}
						<Alert variant={'warning'}>
							<div className="text-center">
								<h5 className="">
									Segera jadwalkan keperluan anda melalui kontak kami !!!
								</h5>
								<h1 className=" bg-light rounded">085234xxxxxx </h1>
								<div className="py-3">
									<ContactButton to={'/sdcsd'}> 
										Hubungi Kami 
									</ContactButton>
								</div>
							</div>
						</Alert>
					</div>
        </Col>
      </Row>
    </Container>
  );
}
  
