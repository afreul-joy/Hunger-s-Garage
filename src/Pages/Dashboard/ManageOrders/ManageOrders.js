import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user, admin } = useAuth();
  console.log(user.email);
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/allOrders`;
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
  const approvedOrder = (id) => {
    // console.log(id);
    fetch(`https://hungers-garage.herokuapp.com/allOrders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Order Approved Successfully!", "", "success");
          window.location.reload(false);
        }
      });
  };
  return (
    <Container>
         <h2 className="text-center my-3 fw-bold" style={{ color: "#34495e" }}>
         Total Orders {orders?.length}
        </h2>
 
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
        {orders?.map((order, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={order?.img}
                  className="img-fluid"
                  style={{ width: "60px" }}
                  alt=""
                />
              </td>
              <td>{order?.productName}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>
                {order.status === "Pending" && admin ? (
                  <button
                    onClick={() => approvedOrder(order._id)}
                    className="btn btn-warning btn-sm me-3"
                  >
                    <i className="fas fa-check-circle"></i> Pending
                  </button>
                ) : (
                  ""
                )}
                <p>
                  {order.status === "Approved" ? (
                    <span className="text-success fw-bold">
                      {" "}
                      {order.status}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </td>

              <td>
                <button
                  onClick={() => handleDelete(order?._id)}
                  className="btn bg-danger m-2"
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
