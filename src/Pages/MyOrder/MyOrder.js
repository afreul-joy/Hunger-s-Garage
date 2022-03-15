import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import OrderCard from "../Shared/OrderCard/OrderCard";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  // console.log(myOrders);
  const { user } = useAuth();
  console.log(user.email);
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/myOrders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  const cancelOrder = (id) => {
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
                const remainingOrder = myOrders.filter(
                  (user) => user._id !== id
                );
                setMyOrders(remainingOrder);
              }
            });
        }
      }
    });
  };

  return (
    <div className="pt-4">
      <div className="mt-1">
        <Container>
          <Row xs={1} sm={1} md={1} lg={2} className="g-5">
            {myOrders?.map((order) => (
              <OrderCard
                key={order._id}
                cancelOrder={cancelOrder}
                order={order}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyOrder;
