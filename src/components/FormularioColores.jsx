import { Form, Button, Card } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
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
  );
};

export default FormularioColores;
