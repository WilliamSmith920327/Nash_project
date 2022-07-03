import { Col, Row, Button } from 'react-bootstrap';
import { FormInput } from 'components';

const Email = (props:any) => {
    const { errors, register, previous } = props
    return (
        <Row>
            <Col lg={6}>
                <FormInput
                    placeholder="EMAIL ADDRESS"
                    type="text"
                    name="emailAdress"
                    containerClass={'mb-4'}
                    register={register}
                />
                <FormInput
                    placeholder="EMAIL PASSWORD"
                    type="password"
                    name="emailPassword"
                    containerClass={'mb-4'}
                    register={register}
                />
                <FormInput
                    placeholder="RECOVERY EMAIL"
                    type="text"
                    name="recoveryEmail"
                    containerClass={'mb-4'}
                    register={register}
                        errors={errors}
                />
            </Col>
            <Col lg={6}>
                <Button className='mb-4'>Check</Button>
                <FormInput
                    placeholder="PASSWORD"
                    type="password"
                    name="conformPassword"
                    containerClass={'mb-4'}
                    register={register}
                    errors={errors}
                />
            </Col>
            <ul className="list-inline wizard mb-0">
                <li className="previous list-inline-item">
                    <Button onClick={previous} variant="info">
                        Previous
                    </Button>
                </li>
                <li className="next list-inline-item float-end">
                    <Button variant="success" type="submit">
                        Next
                    </Button>
                </li>
            </ul>
        </Row>
    )
};

export default Email;