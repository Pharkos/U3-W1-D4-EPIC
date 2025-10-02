import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

const BookList = function () {
  console.log("fantasy", fantasy);
  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="g-4">
        {fantasy.map((book) => (
          <Col key={book.asin}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ transition: "transform 0.2s" }}
            >
              <Card.Img
                variant="top"
                src={book.img}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold">{book.title}</Card.Title>
                <Card.Text className="text-muted">
                  <strong> Price : </strong>
                  {book.price} $
                </Card.Text>
                <Button variant="success">Add to Favorites</Button>
              </Card.Body>
            </Card>
            ;
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
