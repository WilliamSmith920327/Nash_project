import { Button, Modal } from 'react-bootstrap';
import { FormInput } from 'components';

const NewBroker = (props: any) => {
    const { register, errors } = props;
    return (
        <>
            <Modal.Header className='modal-colored-header bg-primary' closeButton>
                <Modal.Title>New Broker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormInput
                    label="COMPANY NAME:"
                    type="text"
                    name="company"
                    containerClass={'mb-1'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="MC #:"
                    type="number"
                    name="mc"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="DOT #:"
                    type="number"
                    name="dot"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="COMPANY ADDRESS:"
                    type="text"
                    name="address"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="ACCOUNTING EMAIL:"
                    type="email"
                    name="email"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="COORPORATE PHONE:"
                    type="number"
                    name="phone"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">Next</Button>
            </Modal.Footer>
        </>
    )
};

export default NewBroker;