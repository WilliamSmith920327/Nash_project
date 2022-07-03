import { Form, Button, Row, Col, ButtonGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Delivery = (props: any) => {
    return (
        <div className='w-75 m-auto'>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="date">DELIVERY DATE</Form.Label>
                        <Form.Control type="date" name="date" id="date" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="time">APPT TIME</Form.Label>
                        <Form.Control type="time" name="time" id="time" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="app">APPT #</Form.Label>
                        <Form.Control type="text" name="app" id="app" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="shipper">RECIEVER NAME</Form.Label>
                        <Form.Control type="text" name="shipper" id="shipper" />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="street">STREET</Form.Label>
                        <Form.Control type="text" name="street" id="street" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="city">CITY</Form.Label>
                        <Form.Control type="text" name="city" id="city" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="state">STATE</Form.Label>
                        <Form.Control type="text" name="state" id="state" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="zip">ZIP</Form.Label>
                        <Form.Control type="text" name="zip" id="zip" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-2">
                <Form.Label htmlFor="description">INSTRUCTIONS</Form.Label>
                <Form.Control
                    as="textarea"
                    id='instructions'
                    style={{ height: '100px' }}
                />
            </Form.Group>
            <Row className='mb-3'>
                <Col></Col>
                <Col md={2}>
                    <Button className="next list-inline-item float-end">ADD TO TRIP</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            DELIVERY 1
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>9.2722</p>
                                    <p>SHIPPER NAME</p>
                                </Col>
                                <Col>
                                    <p>APT#1234</p>
                                    <p>FULL ADDRESS</p>
                                </Col>
                            </Row>
                            INSTRUCTIONS
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            DELIVERY 1
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>9.2722</p>
                                    <p>SHIPPER NAME</p>
                                </Col>
                                <Col>
                                    <p>APT#1234</p>
                                    <p>FULL ADDRESS</p>
                                </Col>
                            </Row>
                            INSTRUCTIONS
                        </Card.Body>
                    </Card>
                </Col>
                <div className='text-center'>
                    <ButtonGroup>
                        <Link to="/trip/addtrip/pickup" className="btn btn-danger">
                            <i className='mdi mdi-arrow-left'></i>
                            BACK
                        </Link>
                        <Link to="/trip/addtrip/submit" className="btn btn-success">
                            NEXT
                            <i className='mdi mdi-arrow-right'></i>
                        </Link>
                    </ButtonGroup>
                </div>
            </Row>
            
        </div>
    )
}

export default Delivery;