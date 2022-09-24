import { Card, Button } from "react-bootstrap";

const ItemColor = (props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
    <Card>
      <Card.Body>
        <Card.Title>{props.nombreColor}</Card.Title>
        <hr />
        <Card.Text className="text-center">
        {props.nombreColor}
        <hr />
        </Card.Text>
        <div className="d-flex justify-content-end">
        <Button variant="danger">Borrar</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemColor;
