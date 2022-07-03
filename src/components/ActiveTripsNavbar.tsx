import { Nav } from "react-bootstrap";
import classnames from 'classnames';
import { Link } from "react-router-dom";


const ActiveTripsNavbar =(props: any) => {
    const {eventKey} = props;
    return(
        <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
            <Nav.Item as="li" className="nav-item">
                <Link to="/trip/activetrips/route" className={classnames('nav-link rounded-0', eventKey === 2 ? 'active' : '')}>
                    <span className="d-none d-lg-block">ROUTE</span>
                </Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
                <Link to="/trip/activetrips/commodity" className={classnames('nav-link rounded-0', eventKey === 3 ? 'active' : '')}>
                    <span className="d-none d-lg-block">COMMODITY</span>
                </Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
                <Link to="/trip/activetrips/permits" className={classnames('nav-link rounded-0', eventKey === 4 ? 'active' : '')}>
                    <span className="d-none d-lg-block">PERMITS</span>
                </Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
                <Link to="/trip/activetrips/invoice" className={classnames('nav-link rounded-0', eventKey === 5 ? 'active' : '')}>
                    <span className="d-none d-lg-block">INVOICE</span>
                </Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
                <Link to="/trip/activetrips/info" className={classnames('nav-link rounded-0', eventKey === 1 ? 'active' : '')}>
                    <span className="d-none d-lg-block">INFO</span>
                </Link>
            </Nav.Item>
        </Nav>
    )
};

export default ActiveTripsNavbar;

