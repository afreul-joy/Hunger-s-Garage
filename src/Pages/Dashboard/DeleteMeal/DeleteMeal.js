import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteMeal = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
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
          const url = `http://localhost:5000/meals/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingOrder = foods.filter((user) => user._id !== id);
                setFoods(remainingOrder);
              }
            });
        }
      }
    });
  };

  return (
    <Container>
      <h3 className="text-info my-3">Total Meals {foods.length}</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Image</th>
            <th>Product Name</th>

            <th>Price</th>

            <th>Action</th>
          </tr>
        </thead>
        {foods?.map((food, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={food?.img}
                  className="img-fluid"
                  style={{ width: "60px" }}
                  alt=""
                />
              </td>
              <td>{food?.name}</td>
              <td>{food?.price}</td>

              <td>
                <button
                  onClick={() => handleDelete(food?._id)}
                  className="btn bg-warning m-2"
                >
                  {" "}
                  <i class="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default DeleteMeal;
