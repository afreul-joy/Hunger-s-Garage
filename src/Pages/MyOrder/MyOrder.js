import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    // console.log(myOrders);
   const {user} = useAuth();
   console.log(user.email);
    useEffect(() => {
        const url = `http://localhost:5000/myOrders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data =>setMyOrders(data));
    }, [user?.email]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              {
                const url = `http://localhost:5000/myOrders/${id}`
                fetch(url,{
                    method: 'DELETE',
    
                })
                    .then(res=>res.json())
                    .then(data => {
                        if(data.deletedCount >0){
                            const remainingOrder = myOrders.filter(user=>user._id !== id)
                            setMyOrders(remainingOrder)
                        }
                    });
            }
            }
          })

    }

    return (
        <Container >
        <h1>My Orders {myOrders?.length}</h1>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Order No</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Customer Name</th>
                    <th>Price</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Action</th>
                </tr>
            </thead>
            {myOrders?.map((myOrder, index) => (
                <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td><img src={myOrder?.img} className="img-fluid" style={{width:"60px"}} alt="" /></td>
                        <td>{myOrder?.productName}</td>
                        <td>{myOrder?.name}</td>
                        <td>{myOrder?.productPrice}</td>
                        <td>{myOrder?.email}</td>
                        <td>{myOrder?.phone}</td>
                        <td><Link to={`/myOrders/${myOrder._id}`}><button className="btn bg-info m-2"> <i class="fas fa-user-edit"></i> Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(myOrder?._id)} className="btn bg-warning m-2"> <i class="fas fa-trash"></i>  Cancel</button></td>
     
                    </tr>
                </tbody>
            ))}
        </Table>
        </Container>
    );
};

export default MyOrder;

