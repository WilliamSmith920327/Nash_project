import { Row, Col, Card } from "react-bootstrap";
import Driver from "./Driver";
import Drivers from './Drivers';
import MyTeam from './MyTeam';
import RecentCompleted from './RecentCompleted';
import { PageTitle } from "components";


const ActiveLoads = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Active Loads', path: '/activeloads', active: true },
                ]}
                title={'Active Loads'}
            />
            <Card>
                <Row>
                    <Col xl={3}>
                        <Driver/>
                    </Col>
                    <Col xl={9}>
                        <Drivers/>
                        <MyTeam/>
                        <RecentCompleted/>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default ActiveLoads;