import { Container, Row, Col, Alert } from "react-bootstrap";
import { ContactButton } from "./MyButton";
import { number_wa } from "../../data/wa";

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
						{jam.map((data,i)=>(
							<Alert variant={'warning'} key={i}>
								<div className="text-center">
									<h5 className="text-nowrap text-start">{data.layanan} :</h5>
									<h1 className=" bg-light rounded">{data.operational}</h1>
								</div>
							</Alert>
						))}
						<Alert variant={'success'} id='operation-hours-contact'>
							
						</Alert>
					</div>
        </Col>
      </Row>
    </Container>
  );
}
  
