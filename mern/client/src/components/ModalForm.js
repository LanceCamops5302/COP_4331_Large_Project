import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

function ModalForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
    rating: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newVideo = { ...formData};

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setFormData({ url: "", rating: ""});
  }

  return (
    <>
      <Button variant="success" onClick={() => setShowModal(true)}>
        Add a clip
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a clip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="url">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a YouTube URL"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;