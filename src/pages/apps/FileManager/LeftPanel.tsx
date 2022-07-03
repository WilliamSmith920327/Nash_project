import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

const LeftPanel = () => {
    return (
        <>
            

            <div className="email-menu-list mt-3">
                <Link to="/apps/file">
                    <i className="mdi mdi-folder-outline font-18 align-middle me-2"></i>My Files
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-google-drive font-18 align-middle me-2"></i>
                    Google Drive
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-dropbox font-18 align-middle me-2"></i>Dropbox
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-share-variant font-18 align-middle me-2"></i>
                    Share with me
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-clock-outline font-18 align-middle me-2"></i>
                    Recent
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-star-outline font-18 align-middle me-2"></i>
                    Starred
                </Link>
                <Link to="/apps/file">
                    <i className="mdi mdi-delete font-18 align-middle me-2"></i>Deleted Files
                </Link>
            </div>

            <div className="mt-5">
                <h4>
                    <span className="badge rounded-pill p-1 px-2 badge-secondary-lighten">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </>
    );
};

export default LeftPanel;
