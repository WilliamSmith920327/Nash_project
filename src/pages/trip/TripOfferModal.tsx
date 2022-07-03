import { Modal, Form, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from 'react-rating';



const TripOfferModal = ({isOpen, toggleModal, className, brokerData}: any) => {
    return (
        <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size="lg" backdrop="static" keyboard={false}>
            <Modal.Header className='text-dark' closeButton>TRIP OFFER MODAL</Modal.Header>
            <Modal.Body>
                <Form className="ps-3 pe-3" action="#">
                    <Row>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">RATE</InputGroup.Text>
                                    <Form.Control
                                        aria-label="rate"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">MILES</InputGroup.Text>
                                    <Form.Control
                                        aria-label="miles"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">FROM</InputGroup.Text>
                                    <Form.Control
                                        aria-label="from"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">TO</InputGroup.Text>
                                    <Form.Control
                                        aria-label="to"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">PICK DATE</InputGroup.Text>
                                    <Form.Control
                                        type='date'
                                        aria-label="picdae"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">DEL DATE</InputGroup.Text>
                                    <Form.Control
                                        type='date'
                                        aria-label="deldate"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">WEIGHT</InputGroup.Text>
                                    <Form.Control
                                        aria-label="weight"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="username" className="form-label">
                                COMMENT
                            </label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Add details about commodity"
                                    style={{ height: '100px' }}
                                />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Row>
                            <Col md='2'></Col>
                            <Col className='m-auto' md='9'>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="TARP" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="RAMPS" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='my-2'>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="OVERSIZE" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="PARTIAL" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='my-2'>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="HAZMAT" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Rating
                                            initialRating={2}
                                            emptySymbol="mdi mdi-thumb-down font-22 text-muted"
                                            fullSymbol="mdi mdi-thumb-up font-22 text-success"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Row>
                    <Modal.Footer>
                        <div className='m-auto'>
                            <div className="mt-5">
                                <Link to="#" className="btn btn-primary">
                                    Submit Offer <i className="mdi mdi-forward ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default TripOfferModal;