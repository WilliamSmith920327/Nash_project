import { Col, Row, Form, Button } from 'react-bootstrap';

const Security = (previous: any) => {
    return (
        <Row>
            <Col sm={12}>
                <div className="text-center">
                    <h2 className="mt-0">
                        <i className="mdi mdi-check-all"></i>
                    </h2>
                    <h4 className="mt-0">Please enter the invitation code you received through gmail.</h4>

                    <p className="w-50 mb-2 mx-auto">
                        <Form.Control
                            className='border-2'
                        />
                    </p>
                </div>
            </Col>
            <Col sm={12}>
                <ul className="list-inline wizard mb-0">
                    <li className="previous list-inline-item">
                        <Button onClick={previous} variant="info">
                            CODE
                        </Button>
                    </li>

                    <li className="next list-inline-item float-end">
                        <Button variant="success">FINISH</Button>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}

export default Security;
