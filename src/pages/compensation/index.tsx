import { Card, Table } from 'react-bootstrap';
import { PageTitle } from 'components';
import { records } from './data';

const Tables = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Compensation', path: '/Compensation', active: true },
                ]}
                title={'Compensation'}
            />
            <Card>
                <div className='bg-light p-4'>
                    <p className='text-center fw-bolder text-dark'>COMPENSATION</p>
                    <h1 className='text-center text-dark fw-bolder' style={{fontFamily: 'Franklin Gothic Medium'}}>Take control of your paycheck</h1>
                    <p className='text-center font-weight-bold'>
                        Earn 10 points for every $100 in gross and grow on ranking.<br />
                        Each truck is calculated separatly and automatically.
                    </p>
                    <div className="can-toggle demo-rebrand-2 text-center">
                        <input id="e" type="checkbox"/>
                        <label htmlFor="e">
                            <div className="can-toggle__switch m-auto" data-checked="Open Deck" data-unchecked="Dry & Reefer"></div>
                        </label>
                    </div>
                </div>

                <Card.Body className="p-0">
                    <div className='card'>
                        <Table className="mb-0" bordered>
                            <thead>
                                <tr>
                                    <th className='py-4'>
                                        <p>DRIVER MANAGER<br/><br/>DRY VAN<br/>REEFER</p>
                                    </th>
                                    <th className='py-4'>
                                        <p>RANK <span className='h2 text-dark'>1</span></p>
                                        <p><span className='fw-bolder text-dark'>30,000</span> points to complete</p>
                                    </th>
                                    <th className='py-4'>
                                        <p>RANK <span className='h2 text-dark'>2</span></p>
                                        <p><span className='fw-bolder text-dark'>70,000</span> points to complete</p></th>
                                    <th className='py-4'>
                                        <p>RANK <span className='h2 text-dark'>3</span></p>
                                        <p><span className='fw-bolder text-dark'>120,000</span> points to complete</p></th>
                                    <th className='py-4 text-center'>
                                        <p>RANK <span className='h2 text-dark'>4</span></p>
                                        <p><span className='fw-bolder text-dark'>200,000</span> points to complete</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-light'>
                                    <td><p className='text-dark text-weight-bold font-weight-bolder'>Pay structure<br/></p></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {records.map((record, index) => {
                                    return (
                                        <tr key={index.toString()}>
                                            <th scope="row">{record.range}</th>
                                            <td>{record.rank1}</td>
                                            <td>{record.rank2}</td>
                                            <td>{record.rank3}</td>
                                            <td>{record.rank4}</td>
                                        </tr>
                                    );
                                })}
                                <tr className='bg-light'>
                                    <td><p className='text-dark text-weight-bold font-weight-bolder'>PAYMENTS<br/></p></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Maximun number of trucks</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Assigned assistants</td>
                                    <td>&macr;</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Tables;
