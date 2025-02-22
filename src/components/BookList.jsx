import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {                               //!CAMBIATO LA CLASSE IN FUNZIONE  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState("");

  const changeAsin = (newAsin) => {
    setSelectedAsin(newAsin);
  };

  
  useEffect(() => {                                                 //!UTILIZZO useEffect 
    console.log(`Il libro selezionato è cambiato: ${selectedAsin}`);
  }, [selectedAsin]);

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col md={8}>
          <Row>
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    changeAsin={changeAsin}
                    selectedAsin={selectedAsin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;







/* import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea"; */

/* class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: ""
  };

  changeAsin = newAsin => {
    this.setState({ selectedAsin: newAsin });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col md={8}>
            <Row>
              {this.props.books
                .filter(b => b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map(b => (
                  <Col xs={12} md={3} key={b.asin}>
                    <SingleBook book={b} changeAsin={this.changeAsin} selectedAsin={this.state.selectedAsin} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
 */