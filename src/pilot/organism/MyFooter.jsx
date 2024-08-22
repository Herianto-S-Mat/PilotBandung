import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const MyFooter = () => {
  return (
    <Container className="bg-dark bg-gradient text-light  rounded-top px-5 py-3" >
      	<Row className='justify-content-around' >
		{Object.entries({
				Contact: ['fb', 'instagram', 'blue'],
				Contact2: ['fb', 'instagram', 'blue'],
				Contact3: ['fb', 'instagram', 'blue'],
				Contact4: ['fb', 'instagram', 'blue'],
			}).map(([key, value], index) => (
			<Col key={index}  sm={6} md={4} lg={3} className='p-3'>
				<h5>{key}</h5>
				<div className='d-block px-3'>
					{value.map((m, i) => (
					<div key={i}>- {m}</div>
					))}
				</div>
			</Col>
		))}
      	</Row>
    </Container>
  );
};

