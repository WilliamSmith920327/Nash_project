import {Row, Col, Card, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Submit = (props: any) => {
    return (
        <div className='w-75 m-auto'>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>BROKER NAME:</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">AGENT NAME:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">AGENT PHONE:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">AGENT EMAIL:</span>
                                    </p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>DRIVER NAME:</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">TRUCK #:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">TRUCKER#:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">TRUCKER TYPE:</span>
                                    </p>
                                    
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>COMMODITY</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">TAGS:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">WEIGHT:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">LENGTHT:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">WIDTH:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">DESCRIPTION:</span>
                                    </p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>RATE INFO</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">L MILES:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">E MILES:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">T MILES:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">RATE:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">$ /M:</span>
                                    </p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Title>PICK DATE/TIME</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">SHIPPER NAME:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">APPT#:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">INSTRICTIONS:</span>
                                    </p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>DELIVERY DATE/TIME</Card.Title>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">RECEIVER NAME:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">APPT#:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">FULL ADDRESS:</span>
                                    </p>
                                    <p className="mb-2">
                                        <span className="fw-bold me-2">INSTRUCTIONS:</span>
                                    </p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className='text-center'>
                <ButtonGroup>
                    <Link to="/trip/addtrip/commodity" className="btn btn-danger">
                        <i className='mdi mdi-arrow-left'></i>
                        BACK
                    </Link>
                    <Link to="/trip/activetrips/info" className="btn btn-success">
                        SUBMIT
                        <i className='mdi mdi-arrow-right'></i>
                    </Link>
                </ButtonGroup>
            </div>
        </div>

    )
}

export default Submit;