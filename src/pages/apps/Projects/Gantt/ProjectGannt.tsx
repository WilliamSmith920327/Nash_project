import { Row, Col, Card } from 'react-bootstrap';
import classnames from 'classnames';
import { PageTitle } from 'components';
import profileImg from 'assets/images/users/avatar-2.jpg';

const ProjectGannt = () => {
    const profileStats = [
        { label: 'Total Revenue', value: '$ 25,184' },
        { label: 'Number of Orders', value: '5482' },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Driver itinerary', path: '/apps/projects/gantt', active: true },
                ]}
                title={'Driver itinerary'}
            />

            <Card>
                <Card.Body>
                    <Row>
                        <Col xxl={3} lg={4}>
                            <div className="pe-xl-3">
                                <h5 className="mt-0 mb-3">widget with user</h5>
                            </div>
                            <Card className={classnames('widget-flat')}>
                                <Card.Body>
                                    <span className="float-start m-2 me-4">
                                        <img src={profileImg} style={{ height: '100px' }} alt="" className="rounded-circle img-thumbnail" />
                                    </span>

                                    <div>
                                        <h4 className="mt-1 mb-1">Michael Franklin</h4>
                                        <p className="font-13"> Authorised Brand Seller</p>

                                        <ul className="mb-0 list-inline">
                                            {profileStats.map((stat, i) => {
                                                return (
                                                    <li className="list-inline-item me-3" key={i + '-stat'}>
                                                        <h5 className="mb-1">{stat.value}</h5>
                                                        <p className="mb-0 font-13">{stat.label}</p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={9} lg={8} className="mt-4 mt-xl-0">
                            <div className="ps-xl-3">
                                <Row>
                                    <Col className="mt-3">
                                        <svg id="tasks-gantt"></svg>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export { ProjectGannt };
