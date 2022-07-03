import { Form, Row, Col, ButtonGroup } from 'react-bootstrap';
import { FileUploader } from 'components';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const Commodit = (props: any) => {
    return (
        <div className='w-75 m-auto'>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="load">CLIENT LOAD</Form.Label>
                        <Form.Control type="text" name="load" id="load" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="loadedmiles">LOADED MILES</Form.Label>
                        <Form.Control
                            type="text"
                            name="loadedmiles"
                            id="loadedmiles"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="weight">WEIGHT</Form.Label>
                        <Form.Control type="number" name="weight" id="weight" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="width">WIDTH</Form.Label>
                        <Form.Control
                            type="number"
                            name="width"
                            id="width"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="rate">RATE</Form.Label>
                        <Form.Control type="number" name="rate" id="rate" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="emptymiles">EMPTY MILES</Form.Label>
                        <Form.Control
                            type="number"
                            name="emptymiles"
                            id="emptymiles"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="pieces">PIECES</Form.Label>
                        <Form.Control type="number" name="pieces" id="pieces" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="height">HEIGHT</Form.Label>
                        <Form.Control
                            type="number"
                            name="height"
                            id="height"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="paymethod">PAYMENT METHOD</Form.Label>
                        <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            options={[
                                { value: 'amazon', label: 'Amazon' },
                                { value: 'express', label: 'american-express' },
                                { value: 'payoneer', label: 'Payoneer' },
                                { value: 'paypal', label: 'Paypal' },
                                { value: 'stripe', label: 'Stripe' },
                            ]}
                        ></Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="treller">TRAILER TYPE</Form.Label>
                        <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            options={[
                                { value: 'trailer', label: 'trailer' },
                            ]}
                        ></Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor=""></Form.Label>
                        <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            options={[
                                { value: '', label: '' },
                                { value: '', label: '' },
                                { value: '', label: '' },
                                { value: '', label: '' },
                                { value: '', label: '' },
                                { value: '', label: '' },
                                { value: '', label: '' },
                            ]}
                        ></Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="examplePassword2">LENGTH</Form.Label>
                        <Form.Control
                            type="text"
                            name="length"
                            id="length"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-0">
                        <Form.Label htmlFor="description">description</Form.Label>
                        <Form.Control
                            as="textarea"
                            id='description'
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>RATE COMFRMATION</Form.Label>

                        <FileUploader
                            onFileUpload={(files) => {
                                console.log(files);
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className='text-center'>
                <ButtonGroup>
                    <Link to="/trip" className="btn btn-danger">
                        <i className='mdi mdi-arrow-left'></i>
                        BACK
                    </Link>
                    <Link to="/trip/addtrip/pickup" className="btn btn-success">
                        NEXT
                        <i className='mdi mdi-arrow-right'></i>
                    </Link>
                </ButtonGroup>
            </div>

        </div>
    )
}

export default Commodit;