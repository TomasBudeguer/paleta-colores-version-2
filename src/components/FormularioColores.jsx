import { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { consultarAPI, crearColorAPI } from "../helpers/queries";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [color, setColor] = useState([])

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setColor(respuesta);
    });
  }, [color]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      color: "",
    },
  });

  const onSubmit = (datos) => {
    crearColorAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Color creado",
          "El color fue creado correctamente",
          "success"
        );
        reset();
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("color", {
                      required: "Este dato es obligatorio",
                      minLength: {
                        value: 2,
                        message: "Debe ingresar como minimo 5 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Debe ingresar como maximo 50 caracteres",
                      },
                    })}
                  />
                </Col>
              </Row>
              <Form.Text className="text-danger">
            {errors.color?.message}
          </Form.Text>
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
        color={color}
        setColor={setColor}
      ></ListaColores>
    </div>
  );
};

export default FormularioColores;
