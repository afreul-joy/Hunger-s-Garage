import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Meals from "./Pages/Meals/Meals";
import BuyNow from "./Pages/Meals/BuyNow/BuyNow";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Edit from "./Pages/MyOrder/Edit/Edit";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAnAdmin from "./Pages/Dashboard/MakeAnAdmin/MakeAnAdmin";
import Footer from "./Pages/Shared/Footer/Footer";
import Breakfast from "./Pages/Home/Tabs/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Tabs/Lunch/Lunch";
import Dinner from "./Pages/Home/Tabs/Dinner/Dinner";
import AddMeals from "./Pages/Dashboard/AddMeals/AddMeals";
import DeleteMeal from "./Pages/Dashboard/DeleteMeal/DeleteMeal";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import TopHeader from "./Pages/Shared/Header/TopHeader/TopHeader";
import Services from "./Pages/Service/Service";
import ReviewDashboard from "./Pages/Dashboard/ReviewDashboard/ReviewDashboard";
import PrivetRoute from "./Pages/Authentication/PrivetRoute/PrivetRoute"
import Payment from "./Pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TopHeader></TopHeader>
        <Header></Header>

        <Routes>
          <Route path="/service" element={<Services></Services>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/meals" element={<Meals></Meals>}></Route>

          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/review" element={<ReviewDashboard />} />
            <Route path="/dashboard/makeAdmin" element={<MakeAnAdmin />} />
            <Route path="/dashboard/myOrders" element={<MyOrder />} />
            <Route path="/dashboard/pay/:id" element={<Payment />} />
            <Route path="/dashboard/addMeals" element={<AddMeals />} />
            <Route path="/dashboard/deleteMeal" element={<DeleteMeal />} />
            <Route path="/dashboard/manageOrders" element={<ManageOrders />} />
          </Route>

          <Route path="/myOrders/:id" element={<Edit></Edit>}></Route>

          <Route path="/meals/:id" element={ <><PrivetRoute><BuyNow></BuyNow></PrivetRoute> </> }></Route>

          <Route path="/" element={<Home></Home>}>
            <Route path="/" element={<Lunch />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
          </Route>

          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
        
      </AuthProvider>
    </div>
  );
}

export default App;
