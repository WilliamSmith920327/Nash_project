import { Row, Col, Card, Dropdown, ButtonGroup } from 'react-bootstrap';
import { PageTitle } from 'components';
import LeftPanel from './LeftPanel';
import QuickAccess from './QuickAccess';
import Recent from './Recent';
import { quickAccessFiles, recentFiles } from './data';


const FileManager = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Paperwork', path: '/apps/file', active: true },
                ]}
                title={'Paperwork'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftPanel />
                            </div>

                            <div className="page-aside-right">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="app-search">
                                        <form>
                                            <div className="mb-2 position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search files..."
                                                />
                                                <span className="mdi mdi-magnify search-icon"></span>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div>
                                        <ButtonGroup className="d-block mb-2">
                                            <Dropdown>
                                                <Dropdown.Toggle className="btn btn-success dropdown-toggle w-100">
                                                    <i className="mdi mdi-plus"></i> Create New{' '}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-folder-plus-outline me-1"></i> Folder
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-file-plus-outline me-1"></i> File
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-file-document me-1"></i> Document
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-upload me-1"></i> Choose File
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    </div>
                                </div>

                                <QuickAccess quickAccessFiles={quickAccessFiles} />

                                <Recent recentFiles={recentFiles} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export { FileManager };
