import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav'; 


function BarraNavegacion() {

  const [categorias, setCategorias] = useState([])
  const listaCategorias = new Set();

  const cargarCategorias = async () => {
    try {
      const response = await fetch("/noticias.json");
      const data = await response.json();
      data.map((n) => listaCategorias.add(n.categoria)); // En un Set se añaden valores con .add()
      setCategorias(Array.from(listaCategorias)) // Error, es Array.FROM no sArray.valueOf(listaCategorias)

    } catch (error) {
      console.log("Error al cargar las noticias", error)
    }
  }

  useEffect(() => {
    cargarCategorias();
  }, [])

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link href="/">App de noticias</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          {categorias.map((c) =>
              <>
              <NavDropdown.Item href={"/categorias/" + c}>{c}</NavDropdown.Item><br/>
              </>
          )}
        </NavDropdown>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion;