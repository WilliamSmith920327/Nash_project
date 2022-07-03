import { Table } from 'react-bootstrap';

const Load = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>DRIVER</th>
                    <th>STATUS</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>LOAD</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>driver details</td>
                    <td>Loaded</td>
                    <td>LAS VEGAS.NV</td>
                    <td>BOSTON. NA</td>
                    <td>75986</td>
                    <td>5/29/2022</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default Load;