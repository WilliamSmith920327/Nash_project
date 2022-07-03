import { Row, Col, Card, Tab, Nav} from 'react-bootstrap';
import { PageTitle } from 'components';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import { Infor } from './types';
import { infoes } from './data';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const InfoCard = ({ info }: { info: Infor }) => {
    return (
            <Card className="d-block">
                <Card.Body>
                    <h4 className="mt-0">
                        {info.name1}
                    </h4>
                    <h4 className="mt-0">
                        {info.name2}
                    </h4>
                    <h4 className="mt-0">
                        {info.name3}
                    </h4>
                    <h4 className="mt-0">
                        {info.name4}
                    </h4>
                    <h4 className="mt-0">
                        {info.name5}
                    </h4>
                </Card.Body>
            </Card>
    );
};

const Info = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'pages', path: '/pages' },
                    { label: 'trip', path: '/pages/trip' },
                    { label: 'activetrips', path: '/pages/trip/activetrips' },
                    { label: 'info', path: '/pages/trip/activetrips/info', active: true },
                ]}
                title={'Info'}
            />
            <ActiveTripsNavbar eventKey="1"/>
            <Row>
                <Col xl={8} lg={7}>

                    <Row>
                        {infoes.map((info, i) => {
                            return (
                                <Col sm={6} key={'proj-' + info.id}>
                                    <InfoCard info={info} />
                                </Col>
                            );
                        })}
                    </Row>
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

export default Info;


