import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: asin
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("fetchComments");
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkN2E2NTNhMzhjYjAwMTVmNjNkNGEiLCJpYXQiOjE3MTk0OTkzNjUsImV4cCI6MTcyMDcwODk2NX0._sLOFwceL_eYGDe30nmimOoigh2oUxvTNmf4O1ZVrUM",
        "Content-Type": "application/json"
      }
    });

    if (resp.ok) {
      alert("commento inviato");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il tuo commento"
          name="comment"
          value={newComment.comment}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRate">
        <Form.Select
          aria-label="Rate"
          name="rate"
          value={newComment.rate}
          onChange={handleChange}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
      </Form.Group>
      <Button variant="dark" className="mb-3" type="submit">
        Invia commento
      </Button>
    </Form>
  );
};

export default AddComment;
