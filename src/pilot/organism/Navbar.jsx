import {
    Container, 
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from 'react-bootstrap';
import './organism.css'


export const MyNavbar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 fixed-top py-0 " bg="none" data-bs-theme="dark">
          <Container className='bg-dark py-2 mt-0 shadow-sm' style={{borderRadius:'0 0 1em 1em'}}>
            <Navbar.Brand href="#"><h1 className='text-light'>Pilot Bandung</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pilot Bandung
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" variant="underline">
                  <Nav.Link href="#action1">Beranda</Nav.Link>
                  <NavDropdown
                    title="Layanan Kami"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/ksdf" className='text-light'>Jasa Supir</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/kf" className='text-light'>Rental Mobil + Driver</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/ksdfdwe" className='text-light'>
                      Wisata Bandung
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Kontak Kami</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export const MyNavbarr = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top bg-none">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}