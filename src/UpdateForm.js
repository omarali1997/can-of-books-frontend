import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            {/* {this.props.currentBook.title} */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Title</Form.Label>
                                <Form.Control type="text" placeholder="Book Title" 
                                name="bookTitle" defaultValue={this.props.currentBook.title} />
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" placeholder="Book Description" 
                                name="bookDescription" defaultValue={this.props.currentBook.description} />
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Status</Form.Label>
                                <Form.Control type="text" placeholder="Book Status" 
                                name="bookStatus" defaultValue={this.props.currentBook.status} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>                      
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateForm;