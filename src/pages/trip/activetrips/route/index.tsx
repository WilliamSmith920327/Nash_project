import { Row, Col, Card, Tab, Nav} from 'react-bootstrap';
import { PageTitle } from 'components';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import GoogleMaps from './GoogleMaps';
import Accordions from './Accordions';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const Route = () => {
    return (
        <>
        <PageTitle
            breadCrumbItems={[
                { label: 'pages', path: '/pages' },
                { label: 'trip', path: '/pages/trip' },
                { label: 'activetrips', path: '/pages/trip/activetrips' },
                { label: 'route', path: '/pages/trip/activetrips/route', active: true },
            ]}
            title={'Route'}
        />      
        <ActiveTripsNavbar eventKey="2"/>

        <Row>
            <Col xl={8} lg={7}>
                <GoogleMaps />
                <Accordions />
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

export default Route;