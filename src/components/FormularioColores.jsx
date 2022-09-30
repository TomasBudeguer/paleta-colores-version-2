import { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const colorRegExp = new RegExp(
    /^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/
  );

  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("arregloColoresKey")) || [];
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("arregloColoresKey", JSON.stringify(arregloColores));
  }, [arregloColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorRegExp.test(color)) {
      setArregloColores([...arregloColores, color]);
      setColor("");
    } else {
      alert("corregir los datos");
    }
  };

  const borrarColor = (nombre) => {
    let arregloModif = arregloColores.filter((item) => item !== nombre);
    setArregloColores(arregloModif);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicColor">
              <Form.Label>Administrar colores</Form.Label>
              <Row>
                <Col sm={12} md={4} lg={2} className="text-center">
                  <img
                    src="https://i.ibb.co/m665qp7/paleta-ejemplo.webp"
                    alt="color"
                    className="mb-2 w-100"
                  />
                </Col>
                <Col sm={12} md={8} lg={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese un color. En hex, rgb, rgba, hsl o hsla"
                    className="w-100"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                  />
                </Col>
              </Row>
              {/* <div className="d-flex">
                
                
              </div> */}
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <ListaColores
        arregloColores={arregloColores}
        borrarColor={borrarColor}
      ></ListaColores>
    </div>
  );
};

export default FormularioColores;
