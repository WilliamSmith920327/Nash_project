import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { driver } from './data';

const RightSide = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-2 text-center">DRIVERS</h4>
                {
                    driver.map((dri, i) => {
                        return(
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <div className="flex-grow-1">
                                    <h5 className="fw-semibold my-0">{dri.name}</h5>
                                </div>
                                <Link to="#" className="text-muted">
                                    <i className="mdi mdi-information-outline h4  my-0"></i>
                                </Link>
                            </div>
                        )
                    })
                }
                <Card>
                    <Card.Header className='p-1'>MARCO ROZA</Card.Header>
                    <Card.Body className='p-1'>
                        CAREER<br />TRAILER <br />
                        AGE
                    </Card.Body>
                    <Button variant="link">read more</Button>
                </Card>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <Link to="#" className="text-muted">
                        <i className="mdi mdi-information-outline h4  my-0"></i>
                    </Link>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-grid">
                    <Button>INVITE</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RightSide;
