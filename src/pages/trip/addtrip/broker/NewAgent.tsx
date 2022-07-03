import { Button, Modal } from 'react-bootstrap';
import { FormInput } from 'components';

const NewAgent = (props: any) => {
    const { register, errors } = props;
    return (
        <>
            <Modal.Header className='modal-colored-header bg-success' closeButton>
                <Modal.Title>NEW AGENT CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormInput
                    label="FIRST NAME:"
                    type="text"
                    name="first_name"
                    containerClass={'mb-1'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="LAST NAME:"
                    type="text"
                    name="last_name"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="EMAIL:"
                    type="email"
                    name="email"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="PHONE:"
                    type="number"
                    name="phone"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="EXT:"
                    type="text"
                    name="ext"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type="submit">Next</Button>
            </Modal.Footer>
        </>
    )
};

export default NewAgent;