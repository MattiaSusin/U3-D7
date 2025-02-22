import{ useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedAsin, changeAsin }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (book.asin === selectedAsin) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [book.asin, selectedAsin]);

  return (
    <Card
      style={{
        border: book.asin === selectedAsin ? "3px solid red" : "3px solid #ebebeb"
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        onClick={() => {
          changeAsin(book.asin);
        }}
      />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;



/* import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //   selected: false
  // };

  render() {
    return (
      <Card style={{ border: this.props.book.asin === this.props.selectedAsin ? "3px solid red" : "3px solid #ebebeb" }}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            // devo modificare lo stato nel livello superiore
            // ora abbiamo una prop che contiene la funzione in grado di modificare lo stato al livello superiore! (changeAsin)
            this.props.changeAsin(this.props.book.asin);
            // this.setState({ selected: !this.state.selected });
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>

          {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */
   /*      </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
 */ 