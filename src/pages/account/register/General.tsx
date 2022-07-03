import { Col, Row, Button } from 'react-bootstrap';
import { FileUploader } from 'components';
import { FormInput } from 'components';

const General = (props:any) => {
    const { errors, register, data } = props;
    return (
        <Row>
            <Col lg={3} className="mb-3">
                <FileUploader
                    onFileUpload={(files) => {
                        console.log(files);
                    }}
                />
            </Col>
            <Col lg={9}>
                <Row className='mb-3'>
                    <Col sm={6}>
                        <FormInput
                            label="first name"
                            type="name"
                            name="first_name"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.first_name}
                        />
                        <FormInput
                            label="middle name"
                            type="name"
                            name="middle_name"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.middle_name}
                        />
                        <FormInput
                            label="last name"
                            type="name"
                            name="last_name"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.last_name}
                        />
                    </Col>
                    <Col  sm={6}>
                        <FormInput
                            label="phone number"
                            type="number"
                            name="phone"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.phone}
                        />
                        <FormInput
                            label="country"
                            type="text"
                            name="country"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.country}
                        />
                        <FormInput
                            label="birthday"
                            type="date"
                            name="birthday"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                            defaultValue={data.birthday}
                        />
                        <ul className="list-inline wizard mb-0">
                            <li className="next list-inline-item float-end">
                                <Button variant="success" type="submit">
                                    Next
                                </Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default General;