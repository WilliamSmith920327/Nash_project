import { Row, Col, Card, Tab, Nav, Button} from 'react-bootstrap';
import { PageTitle } from 'components';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import AddNew from 'components/AddNew';
import Utah from 'components/Utah';
import Dhio from 'components/Dhio';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const Permits = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'pages', path: '/pages' },
                    { label: 'trip', path: '/pages/trip' },
                    { label: 'activetrips', path: '/pages/trip/activetrips' },
                    { label: 'permits', path: '/pages/trip/activetrips/permits', active: true },
                ]}
                title={'Permits'}
            />    
            <ActiveTripsNavbar eventKey="4"/>

            <Row>
                <Col xl={8} lg={7}>
                    <Tab.Container defaultActiveKey="addnew">
                        <Card className="d-block">
                            <Card.Header>
                                {/* <div className="button-list"> */}
                                <Nav as="ul" className="">
                                    <Nav.Link href="#" eventKey="utah">
                                        <Nav.Item as="li" className="nav-item">
                                            <Button variant="primary">UTAH <i className="dripicons-question"></i></Button>
                                        </Nav.Item>
                                    </Nav.Link>
                                    <Nav.Link href="#" eventKey="dhio">
                                        <Nav.Item as="li" className="nav-item">
                                            <Button variant="primary">DHIO <i className=" dripicons-menu"></i></Button>
                                        </Nav.Item>
                                    </Nav.Link>
                                    <Nav.Link href="#" eventKey="addnew">
                                        <Nav.Item as="li" className="nav-item">
                                            <Button variant="primary">ADD NEW <i className=" dripicons-plus"></i></Button>
                                        </Nav.Item>
                                    </Nav.Link>
                                </Nav>
                                {/* </div> */}
                            </Card.Header>
                            <Tab.Content>
                                <Tab.Pane eventKey="utah">
                                    <Utah/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dhio">
                                    <Dhio />
                                </Tab.Pane>
                                <Tab.Pane eventKey="addnew">
                                    <AddNew />
                                </Tab.Pane>
                            </Tab.Content>
                            
                        </Card>
                    </Tab.Container>
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

export default Permits;