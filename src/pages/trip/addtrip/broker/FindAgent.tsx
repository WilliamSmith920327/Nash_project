import {  Card, Button, Modal } from 'react-bootstrap';
import Rating from 'react-rating';

const FindAgent = (props: any) => {
    const { previous, next } = props;
    return (
        <>
            <Modal.Header className='modal-colored-header bg-info' closeButton>
                <Modal.Title>FIND AGENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <i className="mdi mdi-truck-fast h2 text-muted"></i>
                    <h5>
                        <b>BROKER NAME</b>
                    </h5>
                    <p className="mb-1">
                        <b>First Name or Last Name:</b> details.order_id
                    </p>
                    <Card className='mb-5'>
                        <Card.Body>
                            <Card.Title as="h5">HIKE OZZO, 902-555-9321</Card.Title>
                            <Card.Text>MIKER@GMAIL.COM</Card.Text>
                            <Rating
                                initialRating={5}
                                readonly
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </Card.Body>
                        <Card.Footer className='p-0'>
                            <Button onClick={next} className="btn btn-primary w-100">
                                SELECT
                            </Button>
                        </Card.Footer>
                    </Card>
                    <p>
                        <b>Payment Mode :</b> details.payment_mode
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={previous}>CREATE NEW</Button>
            </Modal.Footer>
        </>
    )
};

export default FindAgent;