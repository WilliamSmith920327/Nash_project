import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FormInput, FileUploader } from 'components';

const Utah = () => {
    return (
        <>
            <Card.Body>
                <Row>
                    <Col sm = {4}>
                        <h4>DRIVER</h4>
                        <p>NAME: </p>
                        <p>CDL #: </p>
                        <p>PHONE: </p>
                        <p>EMAIL: </p>
                        <Button variant="primary">CHAT</Button>
                    </Col>
                    <Col sm = {4}>
                        <h4>TRUCK # 919</h4>
                        <p>MAKE: </p>
                        <p>MODEL: </p>
                        <p>YEAR: </p>
                        <p>PLATE: </p>
                        <p>STATE: </p>
                        <p>VIN: </p>
                    </Col>
                    <Col sm = {4}>
                        <h4>TRAILER # 351</h4>
                        <p>MAKE: </p>
                        <p>MODEL: </p>
                        <p>YEAR: </p>
                        <p>PLATE: </p>
                        <p>STATE: </p>
                        <p>VIN: </p>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col sm={4}>
                        <FormInput
                            label="Valid From"
                            type="text"
                            name="validFrom"
                            placeholder=""
                            containerClass={'mb-3'}
                        />
                        <FormInput
                            label="Valid To"
                            type="text"
                            name="validTo"
                            placeholder=""
                            containerClass={'mb-3'}
                        />
                    </Col>
                    <Col sm={4}>
                        <FormInput
                            label="State Fee"
                            type="text"
                            name="state"
                            placeholder=""
                            containerClass={'mb-3'}
                        />
                        <Form.Group as={Row} style = {{marginTop: '-10px'}}>
                            <Form.Label htmlFor="exampleEmail3" column sm={12}>
                                ESCORT
                            </Form.Label>
                            <Col sm={12}>
                            <div className="can-toggle">
                                <input id="a" type="checkbox" />
                                <label htmlFor="a">
                                    <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                </label>
                            </div>
                            </Col>
                        </Form.Group>
                        
                    </Col>
                    <Col sm={4}>
                        <FileUploader
                            onFileUpload={(files) => {
                                console.log(files);
                            }}
                        />
                    </Col>
                </Row>
                <Row class="col-md-8 text-center" style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="primary" style ={{width: '100px'}}>ADD</Button>
                </Row>
            </Card.Footer>
        </>
    )
}

export default Utah;
