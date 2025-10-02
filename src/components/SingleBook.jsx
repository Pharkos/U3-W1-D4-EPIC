import { Button, Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col>
      <Card
        className="h-100 shadow-sm border-0"
        style={{ transition: "transform 0.2s" }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fw-bold">{props.book.title}</Card.Title>
          <Card.Text className="text-muted">
            <strong> Price : </strong>
            {props.book.price} $
          </Card.Text>
          <Button variant="success">Add to Favorites</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
