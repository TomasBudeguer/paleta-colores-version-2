import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI, consultarAPI } from "../helpers/queries";

const ItemColor = ({ color, setColor }) => {
  const borrarColor = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el color?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorAPI(color._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              setColor(respuesta);
            });

            Swal.fire(
              "Color eliminado!",
              "El color fue correctamente eliminado.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error!",
              "Intente realizar esta operacion mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card style={{background: 'beige'}}>
        <Card.Body>
          <Card.Title>
            <i className="bi bi-square-fill" style={{color: color.color}}> {color.color}</i>
            <hr />
          </Card.Title>
          <Card.Text className="text-center" style={{background: color.color}}>
          <i className="bi bi-square-fill fs-1" style={{color: color.color}}> Color no encontrado</i>
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={borrarColor}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemColor;
