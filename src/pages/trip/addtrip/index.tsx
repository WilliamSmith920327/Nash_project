import { Link } from "react-router-dom";
import { Card, Tab, Nav, Row, Col } from "react-bootstrap";
import { PageTitle } from "components";
import { useState } from "react";
import Broker from "./broker";
import Commodity from "./Commodity";
import Pickup from "./Pickup";
import Delivery from "./Delivery";
import Submit from "./Submit";

type TabContentItem = {
    id: string;
    title: string;
    content: any;
};

const Trip = () => {
    const [activeKey, setActiveKey] = useState("Broker");

    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: 'Broker',
            content: <Broker setActiveKey={setActiveKey}/>
        },
        {
            id: '2',
            title: 'Commodity',
            content: <Commodity setActiveKey={setActiveKey} />
        },
        {
            id: '3',
            title: 'Pickup',
            content: <Pickup setActiveKey={setActiveKey}/>
        },
        {
            id: '3',
            title: 'Delivery',
            content: <Delivery setActiveKey={setActiveKey} />
        },
        {
            id: '3',
            title: 'Submit',
            content: <Submit setActiveKey={setActiveKey} />
        },
    ];


    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'broker', path: '/trip/addtrip/broker', active: true },
                    { label: 'commodity', path: '/trip/addtrip/commodity' },
                    { label: 'pickup', path: '/trip/addtrip/pickup' },
                    { label: 'delivery', path: '/trip/addtrip/delivery' },
                    { label: 'submit', path: '/trip/addtrip/submit' }
                ]}
                title={'Trip'}
            />
            <Card>
                <Card.Body>
                    <Tab.Container activeKey={activeKey}>
                        <Nav variant="tabs">
                            {tabContents.map((tab, index) => {
                                return (
                                    <Nav.Item onClick={() => setActiveKey(tab.title)} key={index.toString()}>
                                        <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                            <span className="d-none d-md-block">{tab.title}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>

                        <Tab.Content>
                            {tabContents.map((tab, index) => {
                                return (
                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index.toString()}>
                                        <Row>
                                            <Col sm="12">
                                                <p className="mt-3">{tab.content}</p>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Tab.Container>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default Trip;