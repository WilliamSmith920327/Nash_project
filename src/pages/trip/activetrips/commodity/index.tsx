import { Row, Col, Card, Tab, Nav} from 'react-bootstrap';
import { PageTitle } from 'components';
import classNames from 'classnames';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import avatar3 from 'assets/images/users/avatar-3.jpg';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const Commodity = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'pages', path: '/pages' },
                    { label: 'trip', path: '/pages/trip' },
                    { label: 'activetrips', path: '/pages/trip/activetrips' },
                    { label: 'commodity', path: '/pages/trip/activetrips/commodity', active: true },
                ]}
                title={'Info'}
            />      
            <ActiveTripsNavbar eventKey="3"/>
            <Row>
                <Col xl={8} lg={7}>
                    <Card className="d-block">
                        <Card.Body>
                            <Row>
                                <Col sm={12}>
                                    <h1>COMMODITY DESCRIPTION</h1>
                                </Col>
                                <Col sm={6}>
                                    <p>WEIGHT :</p>
                                    <p>LENGHT :</p>
                                    <p>HEIGHT :</p>
                                    <p>WIDTH :</p>
                                </Col>
                                <Col sm={6}>
                                    <p>THILES : 4200</p>
                                    <p>LHILES : 3900</p>
                                    <p>EMILES : 4200</p>
                                    <p>RATE : 4200</p>
                                    <p>$/N : 4200</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row  style = {{margin: '10px'}}>
                                <Col sm={6}>
                                    <h4 style = {{textAlign: 'center', marginBottom: '30px'}}>PICK PHOTOS</h4>
                                    <Row  style = {{marginBottom: '10px'}}>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <h4 style = {{textAlign: 'center', marginBottom: '30px'}}>DELIVERY PHOTOS</h4>
                                    <Row  style = {{marginBottom: '10px'}}>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                        <Col sm={6}>
                                            <img src={avatar3} alt="" className={classNames('img-fluid', 'avatar-lg', 'rounded')} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} lg={5}>
                    <Tab.Container defaultActiveKey="chat">
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="chat" className=" rounded-0">
                                            CHAT
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="notes" className=" rounded-0">
                                            NOTES
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="chat">
                                        <Chat/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="notes">
                                        <Notes />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    )
};

export default Commodity;