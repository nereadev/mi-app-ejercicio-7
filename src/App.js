import { Container, Row, Button, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="d-flex m-0 p-0 w-100">
        <Row className="central d-flex-row m-0 p-0 col-8 vh-100">
          <Button variant="warning" className="boton gt30 text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos asignados a mayores de 30</Button>
          <Button variant="warning" className="boton tarragona text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos asignados a personas de Tarragona</Button>
          <Button variant="warning" className="boton provincias text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Provincias donde hay equipos</Button>
          <Button variant="warning" className="boton puestos text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Puestos de trabajadores con equipo</Button>
          <Button variant="warning" className="boton edad-media text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Media de edad de trabajadores</Button>
          <Button variant="warning" className="boton orden-edad text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos ordenador por edad</Button>
          <Button variant="warning" className="boton sobremesa text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos de tipo sobremesa</Button>
          <Button variant="warning" className="boton trabajadores-portatil text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Trabajadores con equipo portátil</Button>
          <Button variant="warning" className="boton equipos-tipo text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos organizados por tipo</Button>
          <Button variant="warning" className="boton portatiles-tarragona text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos portátiles asigandos en Tarragona</Button>
          <Button variant="warning" className="boton resumen text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Resumen de equipos asignados</Button>
        </Row>
        <Row className="lado d-flex flex-row justify-content-center align-items-center col-4">
          <Col className="consola container overflow-auto rounded"></Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
