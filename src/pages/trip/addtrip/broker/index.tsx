import { Button, Modal, Pagination } from 'react-bootstrap';
import { Table, PageSize, Spinner } from 'components';
import { Employee } from './types';
import { Column } from 'react-table';
import { Wizard, Steps, Step } from 'react-albus';
import { useToggle } from 'hooks';
import { VerticalForm } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NewBroker from './NewBroker';
import NewAgent from './NewAgent';
import FindAgent from './FindAgent';
import Contact from './Contact';
import { useRedux } from 'hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllBrokers } from 'redux/actions';



const Broker = (props: any) => {
    
    const [brokerData, SetBrokerData] = useState({});
    const [current_page, setCurrent_Page] = useState(1);
    const [page_size, setPage_size] = useState(10);
    const { dispatch, appSelector } = useRedux();
    useEffect(() => {
        dispatch(getAllBrokers({current_page, page_size}));
    }, [dispatch]);

    const { allBrokers, loading } = appSelector((state) => {
        return {
            allBrokers: state.Broker.allBrokers,
            loading: state.Broker.loading
        };
    });

    const pageProps = {
        current_page: allBrokers.current_page,
        first_page_url: allBrokers.first_page_url,
        from: allBrokers.from,
        last_page: allBrokers.last_page,
        last_page_url: allBrokers.last_page_url,
        links: allBrokers.links,
        next_page_url: allBrokers.next_page_url,
        path: allBrokers.path,
        prev_page_url: allBrokers.prev_page_url,
        to: allBrokers.to,
        total: allBrokers.total,
        setCurrent_Page: setCurrent_Page,
        setPage_size: setPage_size
    }

    const columns: ReadonlyArray<Column> = [
        {
            Header: 'Name',
            accessor: 'broker_name',
            defaultCanSort: true,
        },
        {
            Header: 'MC',
            accessor: 'broker_mc',
            defaultCanSort: false,
        },
        {
            Header: 'Score',
            accessor: 'dot',
            defaultCanSort: true,
        }
    ];
    
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
            text: '15',
            value: 15,
        },
        {
            text: 'All',
            value: allBrokers.total,
        },
    ];

    const { setActiveKey } = props;

    const [isOpen, toggleModal] = useToggle();
    const editBroker = (props: any) => {
        SetBrokerData(props.original);
        toggleModal();
        // console.log(brokerData);
    }

    const validationSchemaNewBroker = yupResolver(
        yup.object().shape({
            company: yup.string().required('Please enter company name'),
            mc: yup.number(),
            dot: yup.number(),
            address: yup.string().required('Please enter address'),
            email: yup.string().required('Please enter Email address'),
            phone: yup.number(),
        })
    );

    const validationSchemaNewAgent = yupResolver(
        yup.object().shape({
            first_name: yup.string().required('Please enter first name'),
            last_name: yup.string().required('Please enter last name'),
            email: yup.string().required('Please enter Email'),
            phone: yup.number().required('Please enter phone number'),
            ext: yup.number().required('please enter your ext'),
        })
    );
    
    const handleSubmit = () => {
        setActiveKey("Commodity");
        toggleModal();
    }

    return (
        <>
            {
                loading ? 
                (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : 
                (
                    <div className='w-75 m-auto'>
                        <Table
                            searchBoxClass='d-flex justify-content-end mt-1'
                            columns={columns}
                            data={allBrokers.data}
                            pageSize={5}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={false}
                            isSearchable={true}
                            placehoder="MC# or Name"
                            // isSelectable={true}
                            editTd={editBroker}
                            pageProps={pageProps}
                        />
                        <div className="d-lg-flex align-items-center text-center pb-1">
                            {sizePerPageList.length > 0 && (
                                <div className="d-inline-block me-3">
                                    <label className="me-1">Display :</label>
                                    <select
                                        // value={page_size}
                                        onChange={(e) => {
                                            setPage_size(Number(e.target.value));
                                            console.log(page_size);
                                            dispatch(getAllBrokers({current_page, page_size}));
                                        }}
                                        className="form-select d-inline-block w-auto"
                                    >
                                        {(sizePerPageList || []).map((pageSize, index) => {
                                            return (
                                                <option key={index.toString()} value={pageSize.value}>
                                                    {pageSize.text}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            )}

                            {/* <span className="me-3">
                                Page{' '}
                                <strong>
                                    {pageIndex + 1} of {tableProps.pageOptions.length}
                                </strong>{' '}
                            </span>

                            <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
                                <label>Go to page : </label>
                                <input
                                    type="number"
                                    value={pageIndex + 1}
                                    min="1"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                        tableProps.gotoPage(page);
                                        setPageIndex(tableProps.state.pageIndex);
                                    }}
                                    className="form-control w-25 ms-1 d-inline-block"
                                />
                            </span>

                            <ul className="pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0">
                                <li
                                    key="prevpage"
                                    className={classNames('page-item', 'paginate_button', 'previous', {
                                        disabled: activePage === 1,
                                    })}
                                    onClick={() => {
                                        if (activePage === 1) return;
                                        changePage(activePage - 1);
                                    }}
                                >
                                    <Link to="#" className="page-link">
                                        <i className="mdi mdi-chevron-left"></i>
                                    </Link>
                                </li>
                                {(visiblePages || []).map((page, index, array) => {
                                    return array[index - 1] + 1 < page ? (
                                        <React.Fragment key={page.toString()}>
                                            <li className="page-item disabled d-none d-xl-inline-block">
                                                <Link to="#" className="page-link">
                                                    ...
                                                </Link>
                                            </li>
                                            <li
                                                className={classNames('page-item', 'd-none', 'd-xl-inline-block', {
                                                    active: activePage === page,
                                                })}
                                                onClick={(e) => changePage(page)}
                                            >
                                                <Link to="#" className="page-link">
                                                    {page}
                                                </Link>
                                            </li>
                                        </React.Fragment>
                                    ) : (
                                        <li
                                            key={page.toString()}
                                            className={classNames('page-item', 'd-none', 'd-xl-inline-block', {
                                                active: activePage === page,
                                            })}
                                            onClick={(e) => changePage(page)}
                                        >
                                            <Link to="#" className="page-link">
                                                {page}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li
                                    key="nextpage"
                                    className={classNames('page-item', 'paginate_button', 'next', {
                                        disabled: activePage === tableProps.pageCount,
                                    })}
                                    onClick={() => {
                                        if (activePage === tableProps.pageCount) return;
                                        changePage(activePage + 1);
                                    }}
                                >
                                    <Link to="#" className="page-link">
                                        <i className="mdi mdi-chevron-right"></i>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>

                        <div className='text-center'>
                            <Button onClick={toggleModal} className="btn btn-primary mt-4 btn-rounded">CREATE NEW</Button>
                        </div>
                        <Modal show={isOpen} onHide={toggleModal}  backdrop="static" keyboard={false}>
                            <Wizard
                                render={({steps, step}) => (
                                    <Steps>
                                        <Step 
                                            id='new_broker'
                                            key={step.id}
                                            render={({ next }) => (
                                                <VerticalForm
                                                    onSubmit={(event, values) => next()} 
                                                    // resolver={validationSchemaNewBroker}
                                                    children={[<NewBroker name="new_broker"/>]}
                                                />
                                            )}
                                        />
                                        <Step
                                            id='new_agent'
                                            key={step.id}
                                            render={({next, previous})=> (
                                                <VerticalForm 
                                                    onSubmit={(event, values) => next()} 
                                                    // resolver={validationSchemaNewAgent}
                                                    children={[<NewAgent name="new_agent"/>]}
                                                />
                                            )}
                                        />
                                        <Step
                                            id='find_agent'
                                            key={step.id}
                                            render={({next, previous})=> (
                                                <VerticalForm 
                                                    onSubmit={(event, values) => next()} 
                                                    children={[<FindAgent next={next} previous={previous}/>]}
                                                />
                                            )}
                                        />
                                        <Step
                                            id='selected_broker'
                                            key={step.id}
                                            render={({previous})=> (
                                                <VerticalForm 
                                                    onSubmit={(event, values) => handleSubmit()}
                                                    children={[<Contact previous={previous}/>]}
                                                />
                                            )}
                                        />
                                    </Steps>
                                )}
                            />
                        </Modal>
            
                    </div>
        
                )
            }
        </>
        )
};

export default Broker;