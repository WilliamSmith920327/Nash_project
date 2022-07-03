import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/5f8f0b2aea639201c59209ef_ABL_Logo.png';
import { useModal } from '../uikit/hooks';
import TripOfferModal from 'pages/trip/TripOfferModal';

const Driver = () => {
    const { isOpen, size, className, scroll, toggleModal, openModalWithSize } =
        useModal();
    return (
        <Card>
            <Card.Body>
                <div className="inbox-widget">
                    <div className="inbox-item">
                        <h3 className="inbox-item-author">ANTONY BRABOS</h3>
                        <p className="inbox-item-date">
                            <button type="button" className="btn p-0">
                                {' '}
                                <h3><i className="uil uil-comment-alt-message"></i>{' '}</h3>
                            </button>
                        </p>
                    </div>
                    <Row>
                        <Col><h4>TRUCK-419</h4></Col>
                        <Col><h4>TRAILER-3519</h4></Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={Logo} alt="" className='w-100'/>
                        </Col>
                        <Col>
                            <h5>MC: 437519</h5>
                            <h5>DOT: 358732</h5>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-around my-3">
                        <div>
                            <h3><i className='mdi mdi-information-outline'></i></h3>
                        </div>
                        <div>
                            <h3><i className='mdi mdi-bell-alert-outline'></i></h3>
                        </div>
                        <div>
                            <h3><i className='mdi mdi-note-alert-outline'></i></h3>
                        </div>
                        <div>
                            <h3><i className='mdi mdi-phone-outline'></i></h3>
                        </div>
                        <div>
                            <h3><i className='mdi mdi-map-marker-outline'></i></h3>
                        </div>
                    </div>
                        
                    <div className='text-center'>
                        <div className="button-list mt-3">
                            <Button className="btn btn-primary btn-sm mr-1" onClick={() => openModalWithSize('lg')}>
                                <i className="mdi mdi-email-outline me-1"></i> <span>Send Offer</span>
                            </Button>
                            <Link className="btn btn-warning btn-sm" to="/trip">
                                <i className="mdi mdi-truck-outline me-1"></i> <span>Add trip</span>
                            </Link>
                        </div>
                        <TripOfferModal isOpen={isOpen} toggleModal={toggleModal}  className={className} size={size} scroll={scroll}/>
                    </div>
                    </div>
            </Card.Body>
        </Card>
    );
};

export default Driver;
