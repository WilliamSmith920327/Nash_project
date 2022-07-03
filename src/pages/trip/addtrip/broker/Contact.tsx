import { Col, Row, Form, Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileUploader } from 'components';

const Contact = (props: any) => {
    const {previous} = props;
    return (
        <>
            <Modal.Header className='modal-colored-header bg-success' closeButton>
                <Modal.Title>CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Card className="text-center p-3">
                            <h5>
                                <b>BROKER NAME</b>
                            </h5>
                            <p>
                                <b>BROKER </b> MC
                            </p>
                            <p>
                                <b>AGENT NAME</b>
                            </p>
                            <p>
                                <b>AGENT PHONE</b>
                            </p>
                            <p>
                                <b>AGENT EMAIL</b>
                            </p>
                            <Card.Footer>
                                <Link className='btn btn-primary' to="/trip/addtrip/broker/newcontact">
                                    EDIT BUTTON
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Form>
                                <Form.Group className="m-3">
                                    <Form.Label htmlFor="exampleEmail2">CREDIT SCORE</Form.Label>
                                    <Form.Control type="text" name="score" id="exampleEmail2" readOnly/>
                                </Form.Group>
                                <Form.Group className="m-3">
                                    <Form.Label>SCORE PROOF</Form.Label>
                                    <FileUploader />
                                </Form.Group>
                                <Form.Group className="m-3">
                                    <Form.Label>BROKER AGREEMENT</Form.Label>
                                    <FileUploader />
                                </Form.Group>
                            </Form>                                
                        </Card>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button onClick={previous} variant="info">
                    Previous
                </Button>
                <Button variant="success" type="submit">
                    Next
                </Button>
            </Modal.Footer>
        </>
    )
};

export default Contact;