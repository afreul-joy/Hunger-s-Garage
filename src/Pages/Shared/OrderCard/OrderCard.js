import "./OrderCard.css";
import React from "react";
import { Col } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const OrderCard = ({ order, cancelOrder }) => {
  const { productName,name, img, cell_phone, productPrice, date, status } = order;
  const { admin} = useAuth();

  return (
    <Col>
      <div className="order-card mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img width="100%" src={img} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-1">
            <div className="order-info">
              <p className="fw-bold fs-5">{productName}</p>
              <p>{name}</p>
              <p>Phone: {cell_phone}</p>
              <p>Price: {productPrice}</p>
              <p>Order Date: {date}</p>
              <div className="d-flex justify-content-between">
                <p>
                  Status:  
                  {status === "Approved" ? (
                    <span className="text-success fw-bold"> {status}</span>
                  ) : (
                    <span className="text-danger fw-bold"> {status}</span>
                  )}
                </p>
                {!admin&& <> 
                  <button
                      onClick={() => cancelOrder(order._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-window-close"></i> Cancel
                    </button>
                    {order.payment ? 
                  "paid"
                 : 
                  <Link to={`/dashboard/pay/${order._id}`}>
                    {" "}
                    <button> Pay</button>{" "}
                  </Link>
                }
                </>}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderCard;