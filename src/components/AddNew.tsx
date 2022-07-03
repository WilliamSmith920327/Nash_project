import { Row, Col, Card, Button } from 'react-bootstrap';
import { FormInput, FileUploader } from 'components';

const AddNew = () => {
    
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
                            label="VALID FROM"
                            type="text"
                            name="validFrom"
                            placeholder="VALID FROM"
                            containerClass={'mb-3'}
                        />
                        <FormInput
                            label="VALID FROM"
                            type="text"
                            name="validFrom"
                            placeholder="VALID FROM"
                            containerClass={'mb-3'}
                        />
                        <FormInput
                            label="VALID FROM"
                            type="text"
                            name="validFrom"
                            placeholder="VALID FROM"
                            containerClass={'mb-3'}
                        />
                    </Col>
                    <Col sm={4}>
                        <FormInput
                            label="VALID TO"
                            type="text"
                            name="validTo"
                            placeholder="VALID TO"
                            containerClass={'mb-3'}
                        />
                        <FormInput
                            label="ESCORT"
                            type="text"
                            name="escort"
                            placeholder="ESCORT"
                            containerClass={'mb-3'}
                        />
                        <FormInput
                            label="GOOGLE ROUTE"
                            type="text"
                            name="googleRoute"
                            placeholder="GOOGLE ROUTE"
                            containerClass={'mb-3'}
                        />
                    </Col>
                    <Col sm={4}>
                        <FormInput
                            label="STATE"
                            type="text"
                            name="state"
                            placeholder="STATE"
                            containerClass={'mb-3'}
                        />
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

export default AddNew;
