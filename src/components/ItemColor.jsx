import { Card, Button } from "react-bootstrap";

const ItemColor = ({ nombreColor, borrarColor }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card style={{background: 'beige'}}>
        <Card.Body>
          <Card.Title>
            <i className="bi bi-square-fill" style={{color: nombreColor}}> {nombreColor}</i>
            <hr />
          </Card.Title>
          <Card.Text className="text-center" style={{background: nombreColor}}>
          <i className="bi bi-square-fill fs-1" style={{color: nombreColor}}> Color no encontrado</i>
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={() => borrarColor(nombreColor)}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemColor;
