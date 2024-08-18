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
        <Navbar key={expand} expand={expand} className="mb-3 fixed-top py-0 rounded" style={{}}>
          <Container className='bg-warning-subtle py-2 mt-0 shadow-sm'>
            <Navbar.Brand href="#"><h1>Pilot Bandung</h1></Navbar.Brand>
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
                    <NavDropdown.Item href="/ksdf">Jasa Supir</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/kf">Rental Mobil + Driver</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/ksdfdwe">
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
