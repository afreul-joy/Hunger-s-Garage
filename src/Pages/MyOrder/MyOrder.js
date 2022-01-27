import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders?._id]);


    return (
        <div className="container">
        <h1>Manage All Orders {myOrders?.length}</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Order No</th>
                    <th>Name</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            {myOrders?.map((myOrder, index) => (
                <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{myOrder?.name}</td>
                        <td>{myOrder?.productName}</td>
                        <td>{myOrder?.phone}</td>
                        <td>{myOrder?.productPrice}</td>
                        <td>{myOrder?.email}</td>
                        {/* <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2">Delete</button> */}
                    </tr>
                </tbody>
            ))}
        </Table>
    </div>
    );
};

export default MyOrder;