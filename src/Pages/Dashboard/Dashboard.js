import React from "react";
import { Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, admin } = useAuth();
  return (
    <div className="text-center">
      <Row>
        <div className="aside-col col-lg-3 col-md-3 col-12">
          <div className="aside">
            <ul className="mt-3">
              <li>
                <Link style={{ textDecoration: "none" }} to="/">
                  {" "}
                  <span className="text"> Home </span>{" "}
                </Link>
              </li>

              {/* if you are admin you can see those property  */}

              {admin && (
                <>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/makeAdmin"
                    >
                      {" "}
                      <span className="text"> Make Admin </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/addMeals"
                    >
                      <span className="text"> Add Meals</span>
                    </Link>
                  </li>
                  <hr />
                  <li></li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/deleteMeal"
                    >
                      {" "}
                      <span className="text"> Delete Meals </span>{" "}
                    </Link>
                  </li>{" "}
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/manageOrders"
                    >
                      {" "}
                      <span className="text"> Manage Orders </span>{" "}
                    </Link>
                  </li>
                  <hr />
                </>
              )}

              {/* if you are not admin you can't  see those property  */}

              {!admin && (
                <>
                  {" "}
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/myOrders"
                    >
                      {" "}
                      <span className="text"> My Orders </span>{" "}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/review"
                    >
                      {" "}
                      <span className="text"> Give Review </span>{" "}
                    </Link>
                  </li>
                  <hr />{" "}
                </>
              )}
              <br />
              <p>{user.displayName}</p>
              <hr />
              <p>{user.email}</p> Admin
              <hr />
            </ul>
          </div>
        </div>
        <div className=" col-lg-9 col-md-9 col-12">
          <Outlet></Outlet>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
