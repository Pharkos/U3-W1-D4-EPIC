import { Col, Container, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

const AllTheBooks = function (props) {
  console.log("Array", props);
  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="g-4">
        {props.map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
