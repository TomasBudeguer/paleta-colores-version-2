import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor("");
  };

  const borrarColor = (nombre) => {
    let arregloModif = arregloColores.filter((item) => (item !== nombre))
    setArregloColores(arregloModif)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicColor">
              <Form.Label>Administrar colores</Form.Label>
              <div className="d-flex">
                <img
                  src="https://quiz.upsocl.com/q/wp-content/uploads/2016/11/mm3.jpg"
                  alt="color"
                  className="me-4"
                />
                <Form.Control
                  type="text"
                  placeholder="Ingrese un color. Ej: azul"
                  className="w-100"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <ListaColores arregloColores={arregloColores} borrarColor={borrarColor}></ListaColores>
    </div>
  );
};

export default FormularioColores;
