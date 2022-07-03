import { Row, Col, Card, Tab, Nav, Button, Form} from 'react-bootstrap';
import { PageTitle } from 'components';
import { useState } from 'react';
import classNames from 'classnames';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import { ReactSortable } from 'react-sortablejs';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const Invoice = () => {
    type Color = {
        id: number;
        color: string;
    };

    const [items, setItems] = useState<Color[]>([
        {
            id: 1,
            color: 'secondary',
        },
    ]);
    
    const MovableCard = ({ item }: { item: Color }) => {
        return (
            <Card className={classNames('text-white', 'text-center', 'bg-' + item.color)}>
                <Card.Body>
                    <blockquote className="">
                        <p>pdf file</p>
                    </blockquote>
                </Card.Body>
            </Card>
        );
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'pages', path: '/pages' },
                    { label: 'trip', path: '/pages/trip' },
                    { label: 'activetrips', path: '/pages/trip/activetrips' },
                    { label: 'invoice', path: '/pages/trip/activetrips/invoice', active: true },
                ]}
                title={'Permits'}
            />    
            <ActiveTripsNavbar eventKey="5"/>
            
            <Row>
                <Col xl={8} lg={7}>
                    <Card className="d-block">
                        <Card.Body>
                            <Row>
                                <Col sm = {6}>
                                    <h4>RATE $ 5400</h4>
                                    <Row>
                                        <Col sm = {6}>
                                            <ReactSortable className="row" list={items} setList={setItems}>
                                                {(items || []).map((item, index) => {
                                                    return (
                                                        <Col key={index.toString()} md={12}>
                                                            <MovableCard item={item} />
                                                        </Col>
                                                    );
                                                })}
                                            </ReactSortable>
                                        </Col>
                                        <Col sm = {6}>
                                            <Button variant="primary" size="sm"><i className=" dripicons-plus"></i></Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm = {6}>
                                    <h4>POD</h4>
                                    <Row>
                                        <Col sm = {6}>
                                            <ReactSortable className="row" list={items} setList={setItems}>
                                                {(items || []).map((item, index) => {
                                                    return (
                                                        <Col key={index.toString()} md={12}>
                                                            <MovableCard item={item} />
                                                        </Col>
                                                    );
                                                })}
                                            </ReactSortable>
                                        </Col>
                                        <Col sm = {6}>
                                            <Button variant="primary" size="sm"><i className=" dripicons-plus"></i></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor="invoiceAmount" column md={3}>
                                            INVOICE AMOUNT
                                        </Form.Label>
                                        <Col md={9}>
                                            <Form.Control
                                                type="text"
                                                name="invoiceAmount"
                                                id="invoiceAmount"
                                                placeholder="INVOICE AMOUNT"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor="paymentMethod" column md={3}>
                                            PAYMENT METHOD
                                        </Form.Label>
                                        <Col md={9}>
                                            <Form.Control
                                                type="text"
                                                name="paymentMethod"
                                                id="paymentMethod"
                                                placeholder="PAYMENT METHOD"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor="billFrom" column md={3}>
                                            BILL FROM
                                        </Form.Label>
                                        <Col md={9}>
                                            <Form.Control
                                                type="text"
                                                name="billFrom"
                                                id="billFrom"
                                                placeholder="BILL FROM"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor="paymentTerm" column md={3}>
                                            PAYMENT TERM
                                        </Form.Label>
                                        <Col md={9}>
                                            <Form.Control
                                                type="text"
                                                name="paymentTerm"
                                                id="paymentTerm"
                                                placeholder="PAYMENT TERM"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor="copyOfInvoice" column md={3}>
                                            <i className=" dripicons-plus"></i>COPY OF INVOICE
                                        </Form.Label>
                                        <Col md={9}>
                                            <Form.Control
                                                type="text"
                                                name="copyOfInvoice"
                                                id="copyOfInvoice"
                                                placeholder="COPY OF INVOICE"
                                            />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row class="col-md-12 text-center" style={{display: 'flex', justifyContent: 'center'}}>
                                <Button variant="primary" style ={{width: '100px'}}>CREATE</Button>
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

export default Invoice;