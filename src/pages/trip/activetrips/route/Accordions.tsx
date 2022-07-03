import React, { useContext } from 'react';
import { Row, Col, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type AccordionItem = {
    id: number;
    title: string;
    text: string;
};

type CustomAccordion2Props = {
    item: AccordionItem;
    index: number;
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <h5 className={containerClass}>
            <Link
                to="#"
                className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
                })}
                onClick={decoratedOnClick}
            >
                {children}
            </Link>
        </h5>
    );
};

const CustomAccordion2 = ({ item, index }: CustomAccordion2Props) => {
    return (
        <Card className="mb-0">
            <Card.Header>
                <CustomToggle
                    eventKey={String(index)}
                    containerClass="m-0"
                    linkClass="custom-accordion-title d-block py-1"
                >
                    Q. {item.title}
                    <i className="mdi mdi-chevron-down accordion-arrow"></i>
                </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={String(index)}>
                <div>
                    <Card.Body>{item.text}</Card.Body>
                </div>
            </Accordion.Collapse>
        </Card>
    );
};

const Accordions = () => {
    const accordianContent: AccordionItem[] = [
        {
            id: 1,
            title: 'DATE / TIME',
            text: ' For more information on licenses, please refere',
        },
        {
            id: 2,
            title: 'ADDRESS',
            text: "No. This is a HTML template.",
        },
        {
            id: 3,
            title: 'APPT',
            text: 'We are here to help anytime',
        },
        {
            id: 4,
            title: 'INSTRUCTIVITY',
            text: 'All the future updates would be available without any cost',
        },
    ];

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">SIPPER NAME</h4>
                            <Accordion defaultActiveKey="1" id="accordion" className="custom-accordion">
                                {(accordianContent || []).map((item, index) => {
                                    return <CustomAccordion2 key={index.toString()} item={item} index={index} />;
                                })}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">RECEIVER NAME</h4>
                            <Accordion defaultActiveKey="1" id="accordion" className="custom-accordion">
                                {(accordianContent || []).map((item, index) => {
                                    return <CustomAccordion2 key={index.toString()} item={item} index={index} />;
                                })}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Accordions;
