import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  // console.log(myOrders);
  const { user } = useAuth();
  console.log(user.email);
  useEffect(() => {
    const url = `http://localhost:5000/allOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        {
          const url = `https://hungers-garage.herokuapp.com/myOrders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingOrder = orders.filter((user) => user._id !== id);
                setOrders(remainingOrder);
              }
            });
        }
      }
    });
  };
  const shippedOrder = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allOrders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Approved Successfully!", "", "success");
        }
      });
  };
  return (
    <Container>
      <h1>Total Orders {orders?.length}</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((myOrder, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={myOrder?.img}
                  className="img-fluid"
                  style={{ width: "60px" }}
                  alt=""
                />
              </td>
              <td>{myOrder?.productName}</td>
              <td>{myOrder?.name}</td>
              <td>{myOrder?.email}</td>
              
              <td>
                <button
                  onClick={() => shippedOrder(myOrder._id)}
                  className="btn btn-primary btn-sm me-3"
                >
                 {myOrder?.status}
                </button>
              </td>

              <td>
                <button
                  onClick={() => handleDelete(myOrder?._id)}
                  className="btn bg-warning m-2"
                >
                  {" "}
                  <i class="fas fa-trash"></i> Cancel
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default ManageOrders;
