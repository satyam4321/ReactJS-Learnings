import React from "react";
import Table from 'react-bootstrap/Table';
function List() {

    const data = [
        {
            name: 'Satyam', email: 'sat@test.com', address: [
                { Hn: '1', City: 'Mirzapur' },
                { Hn: '2', City: 'Varansi' },
                { Hn: '3', City: 'Pryagraj' }
            ]
        },
        {
            name: 'Gautam', email: 'gc@test.com', address: [
                { Hn: '1', City: 'Mirzapur' },
                { Hn: '2', City: 'Varansi' },
                { Hn: '3', City: 'Pryagraj' }
            ]
        },
        {
            name: 'Utkarsh', email: 'ukr@test.com', address: [
                { Hn: '1', City: 'Mirzapur' },
                { Hn: '2', City: 'Varansi' },
                { Hn: '3', City: 'Pryagraj' }
            ]
        }
    ]
    return (
        <div>
            <h1>List Component</h1>
            <Table striped>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Address</th>
                    </tr>
                    {
                        data.map((item, i) =>

                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table striped variant='dark'>
                                        <tbody>
                                            {
                                               item.address.map((child, k) =>
                                                    <tr key={k}>
                                                        <td>{child.Hn}</td>
                                                        <td>{child.City}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default List;