import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { Column } from 'react-table';
import { Table, CellFormatter, PageSize } from 'components';
import { Driver } from './types';
import { drivers } from './data';

/* product column render */
const ProductColumn = ({ row }: CellFormatter<Driver>) => {
    return (
        <>
            <p className="m-0 d-inline-block align-middle font-16">
                <Link to="/apps/ecommerce/details" className="text-body">
                    {row.original.name}
                </Link>
                <br />
                {row.original.static_text}
            </p>
        </>
    );
};

// get all columns
const columns: ReadonlyArray<Column> = [
    {
        Header: 'DRIVER',
        accessor: 'name',
        defaultCanSort: true,
        Cell: ProductColumn,
    },
    {
        Header: 'LOAD',
        accessor: 'category',
        defaultCanSort: true,
    },
    {
        Header: 'STATUS',
        accessor: 'status',
        defaultCanSort: true,
    },
    {
        Header: 'FROM',
        accessor: 'from',
        defaultCanSort: true,
    },
    {
        Header: 'TO',
        accessor: 'to',
        defaultCanSort: true,
    },
    {
        Header: 'DATE',
        accessor: 'added_date',
        defaultCanSort: true,
    },
    {
        Header: '$/mile',
        accessor: 'per_mile',
        defaultCanSort: true,
    },
    {
        Header: 'Rate',
        accessor: 'rate',
        defaultCanSort: true,
    },
];

// get pagelist to display
const sizePerPageList: PageSize[] = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: 'All',
        value: drivers.length,
    },
];

const Products = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <h2>RECENT COMPLETED</h2>
                        </Card.Header>
                        <Card.Body>
                            <Table<Driver>
                                columns={columns}
                                data={drivers}
                                pageSize={drivers.length}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={false}
                                isSearchable={true}
                                theadClass="table-light"
                                searchBoxClass="mb-2"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Products;
