import { Modal, Button, Table } from 'react-bootstrap';
import { UsaVectorMap } from 'components';

const MapModal = ( {isOpen, toggleModal, className, size, scroll}: any ) => {
    return (
        <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size={size} scrollable={scroll}>
            <Modal.Header onHide={toggleModal} closeButton>
            </Modal.Header>
            <Modal.Body>
                <Table className="mb-0 border-dark table-centered text-center text-dark" bordered>
                    <thead>
                        <tr>
                            <td className='p-0 border border-dark table-info'><b>Pacific<br />Time</b></td>
                            <td className='p-0 border border-dark table-danger'><h4><b>Mountain<br />Time</b></h4></td>
                            <td className='p-0 border border-dark table-success'><h4><b>Central<br />Time</b></h4></td>
                            <td className='p-0 border border-dark table-warning'><h4><b>Eastern<br />Time</b></h4></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-0'>-8:00 UTC <br />-7:00 URC*</td>
                            <td className='p-0'>-7:00 UTC <br />-6:00 URC*</td>
                            <td className='p-0'>-6:00 UTC <br />-5:00 URC*</td>
                            <td className='p-0'>-5:00 UTC <br />-4:00 URC*</td>
                        </tr>
                    </tbody>
                </Table>
                <hr />
                <UsaVectorMap
                    height="300px"
                    width="100%"
                    options={{
                        zoomOnScroll: false,
                        backgroundColor: 'transparent',
                        regionStyle: {
                            initial: {
                                fill: '#39afd1',
                            },
                        },
                    }}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={toggleModal}>
                    Close
                </Button>{' '}
                <Button onClick={toggleModal}>Save changes</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default MapModal;